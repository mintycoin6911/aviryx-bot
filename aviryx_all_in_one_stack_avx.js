// =============================
// Aviryx ($AVX) — All-in-One Stack
// Telegram bot + Buy Alerts + Twitter bot + Webhook server + Live tracker stub
// EASIEST DEPLOY: Replit / Render / Railway
// =============================

// ========= FILE: package.json =========
{
  "name": "aviryx-stack",
  "version": "1.0.0",
  "description": "Aviryx ($AVX) all-in-one: Telegram bot, Twitter bot, webhook server, live tracker",
  "main": "server.js",
  "type": "module",
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  },
  "dependencies": {
    "axios": "^1.7.2",
    "body-parser": "^1.20.2",
    "cors": "^2.8.5",
    "dotenv": "^16.4.5",
    "express": "^4.19.2",
    "node-cron": "^3.0.3",
    "telegraf": "^4.16.3",
    "twitter-api-v2": "^1.17.2"
  },
  "devDependencies": {
    "nodemon": "^3.1.0"
  }
}

// ========= FILE: .env.example =========
# --- Required ---
TELEGRAM_BOT_TOKEN=
TELEGRAM_CHAT_ID=                 # your group/channel id for alerts (optional; bot can capture via /id)

# --- X/Twitter (optional; can leave blank to disable) ---
X_APP_KEY=
X_APP_SECRET=
X_ACCESS_TOKEN=
X_ACCESS_SECRET=

# --- Solana / Webhooks (Helius recommended) ---
HELIUS_API_KEY=
AVX_MINT=                         # your AVX mint address once live
DEXSCREENER_PAIR=                 # dexscreener pair url or id when live

# --- Links ---
PUMPFUN_URL=https://pump.fun/
TWITTER_URL=https://x.com/AviryxCoin
TELEGRAM_URL=https://t.me/AviryxNest
WEBSITE_URL=

# --- Feature flags ---
ENABLE_TG=true
ENABLE_TWITTER=false
PORT=3000

// ========= FILE: server.js =========
import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import cron from 'node-cron';
import { startTelegramBot, sendBuyAlert } from './src/bots/telegram.js';
import { startTwitterBot, tweetText } from './src/bots/twitter.js';

const app = express();
app.use(cors());
app.use(bodyParser.json({ limit: '1mb' }));

// --- Feature flags
const ENABLE_TG = (process.env.ENABLE_TG || 'true') === 'true';
const ENABLE_TWITTER = (process.env.ENABLE_TWITTER || 'false') === 'true';

// --- Start bots
if (ENABLE_TG) {
  startTelegramBot().catch(console.error);
}
if (ENABLE_TWITTER) {
  startTwitterBot().catch(console.error);
}

// --- Healthcheck
app.get('/status', (_req, res) => {
  res.json({ ok: true, ts: Date.now(), tg: ENABLE_TG, tw: ENABLE_TWITTER });
});

// --- Helius webhook endpoint (POST)
// Configure in Helius: https://beta.helius.dev → Webhooks → point to /webhooks/helius
app.post('/webhooks/helius', async (req, res) => {
  try {
    const events = req.body?.events || req.body || [];
    // Parse very permissively; Helius sends an array of events
    for (const evt of events) {
      const parsed = parseHeliusEvent(evt);
      if (parsed && parsed.isBuy) {
        // Fire Telegram alert
        await sendBuyAlert(parsed);
      }
    }
    res.status(200).json({ received: true });
  } catch (e) {
    console.error('Webhook error', e);
    res.status(200).json({ received: true });
  }
});

// --- Static site (optional): serve /web if you want (Replit/Render)
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use('/', express.static(path.join(__dirname, 'web')));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Aviryx server running on :${PORT}`));

// --- Minimal parser for Helius swap/transfer events → BUY guess
function parseHeliusEvent(evt) {
  try {
    const mint = process.env.AVX_MINT?.trim();
    if (!mint) return null;
    // Helius parsedTransactions style: look into tokenTransfers
    const transfers = evt?.tokenTransfers || evt?.parsedTransaction?.tokenTransfers || [];
    const our = transfers.filter(t => (t.mint?.toLowerCase() === mint.toLowerCase()));
    if (our.length === 0) return null;
    // Infer buy if net change to a user (non-pool) is positive
    let totalIn = 0, totalOut = 0;
    for (const t of our) {
      const amt = Number(t.tokenAmount || t.amount || 0);
      if (t.toUserAccount) totalIn += amt; else totalOut += amt;
    }
    const size = Math.abs(totalIn - totalOut);
    const isBuy = totalIn > totalOut; // rough heuristic
    const buyer = our[0]?.toUserAccount || 'unknown';
    return { isBuy, size, buyer, sig: evt?.signature || evt?.transactionSignature, raw: evt };
  } catch (e) {
    return null;
  }
}

// ========= FILE: src/bots/telegram.js =========
import { Telegraf, Markup } from 'telegraf';
import axios from 'axios';

let bot; // keep reference for alerts

export async function startTelegramBot() {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  if (!token) throw new Error('Missing TELEGRAM_BOT_TOKEN');

  bot = new Telegraf(token);

  bot.start(ctx => {
    ctx.reply(
      '🪽 Welcome to the Nest — Aviryx ($AVX)\n\nUse /buy /lore /socials /chart /help',
      Markup.inlineKeyboard([
        [Markup.button.url('Buy $AVX', process.env.PUMPFUN_URL || 'https://pump.fun')],
        [Markup.button.url('Twitter', process.env.TWITTER_URL || 'https://x.com/AviryxCoin'), Markup.button.url('Telegram', process.env.TELEGRAM_URL || 'https://t.me/AviryxNest')]
      ])
    );
  });

  bot.command('id', ctx => ctx.reply(`Chat ID: ${ctx.chat.id}`));

  bot.command('buy', ctx => ctx.reply('🚀 Buy $AVX on Pump.fun', Markup.inlineKeyboard([[Markup.button.url('Buy $AVX', process.env.PUMPFUN_URL || 'https://pump.fun')]])));

  bot.command('lore', ctx => ctx.reply('🦴 Aviryx — skull-crowned spirit of the chain. Born from digital ruins, sworn to guard memes and flight.'));

  bot.command('socials', ctx => ctx.reply(`Links:\n🐦 ${process.env.TWITTER_URL}\n🪽 ${process.env.TELEGRAM_URL}\n🌐 ${process.env.WEBSITE_URL || ''}`));

  bot.command('chart', async ctx => {
    const pair = process.env.DEXSCREENER_PAIR || '';
    if (!pair) return ctx.reply('Chart link coming soon.');
    ctx.reply(`📈 Chart: ${pair}`);
  });

  bot.command('broadcast', async ctx => {
    const chatId = String(ctx.chat?.id || '');
    const ownerId = process.env.TELEGRAM_CHAT_ID; // optional: restrict by your group id
    if (ownerId && String(ownerId) !== chatId) return ctx.reply('Not allowed here.');
    const msg = ctx.message.text.replace('/broadcast', '').trim();
    if (!msg) return ctx.reply('Usage: /broadcast <message>');
    await ctx.reply(`📣 ${msg}`);
  });

  await bot.launch();
  console.log('Telegram bot launched');

  // Graceful stop
  process.once('SIGINT', () => bot.stop('SIGINT'));
  process.once('SIGTERM', () => bot.stop('SIGTERM'));
}

export async function sendBuyAlert({ isBuy, size, buyer, sig }) {
  try {
    if (!bot) return;
    const chatId = process.env.TELEGRAM_CHAT_ID;
    const flavor = isBuy ? 'took flight' : 'landed';
    const lines = [
      `💸  A new bird ${flavor}: *${formatNum(size)} $AVX*`,
      buyer ? `🧬 Holder: \`${short(buyer)}\`` : '',
      sig ? `🔗 Tx: https://solscan.io/tx/${sig}` : ''
    ].filter(Boolean).join('\n');

    const keyboard = Markup.inlineKeyboard([
      [Markup.button.url('Buy $AVX', process.env.PUMPFUN_URL || 'https://pump.fun')],
      [Markup.button.url('Twitter', process.env.TWITTER_URL || 'https://x.com/AviryxCoin')]
    ]);

    if (chatId) {
      await bot.telegram.sendMessage(chatId, lines, { parse_mode: 'Markdown', ...keyboard });
    }
  } catch (e) {
    console.error('sendBuyAlert error', e);
  }
}

function short(addr = '') { return addr.slice(0, 4) + '…' + addr.slice(-4); }
function formatNum(n) { return Number(n || 0).toLocaleString(); }

// ========= FILE: src/bots/twitter.js =========
import { TwitterApi } from 'twitter-api-v2';
import cron from 'node-cron';

let client;

export async function startTwitterBot() {
  const { X_APP_KEY, X_APP_SECRET, X_ACCESS_TOKEN, X_ACCESS_SECRET } = process.env;
  if (!X_APP_KEY || !X_APP_SECRET || !X_ACCESS_TOKEN || !X_ACCESS_SECRET) {
    console.log('Twitter disabled (missing keys).');
    return;
  }
  client = new TwitterApi({
    appKey: X_APP_KEY,
    appSecret: X_APP_SECRET,
    accessToken: X_ACCESS_TOKEN,
    accessSecret: X_ACCESS_SECRET,
  });
  console.log('Twitter client ready');

  // Post twice daily (change times to your timezone preference)
  cron.schedule('0 10,18 * * *', async () => {
    try {
      const text = pickTweet();
      await tweetText(text);
      console.log('Tweeted:', text);
    } catch (e) { console.error('Tweet cron error', e); }
  }, { timezone: 'UTC' });
}

export async function tweetText(text) {
  if (!client) return;
  await client.v2.tweet(text);
}

function pickTweet() {
  const bank = [
    '🪽 $AVX | Aviryx — Bird of the chain. We don\'t moon, we fly.',
    'The skullbird watches. $AVX',
    'Aviryx prophecy: flight. #AVX #Solana',
    'Born on Pump.fun. Forged by memes. $AVX',
  ];
  return bank[Math.floor(Math.random() * bank.length)];
}

// ========= FILE: web/index.html =========
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Aviryx | $AVX</title>
  <link rel="icon" href="/favicon.ico" />
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Creepster&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Righteous&display=swap');
    body { margin:0; font-family:'Righteous', cursive; color:#e6e6e6; background:#0b0c10 url('https://i.imgur.com/tZyYssL.jpg') no-repeat fixed center/cover; }
    .wrap { background:rgba(0,0,0,.72); min-height:100vh; }
    header { text-align:center; padding:120px 20px 40px; }
    header h1 { font-family:'Creepster', cursive; font-size:4rem; color:#9d8dff; text-shadow:0 0 20px #8f98ff,0 0 10px #000; }
    header img { width:90px; display:inline-block; vertical-align:middle; margin-left:12px; filter: drop-shadow(0 0 10px orange); }
    header p { color:#cfcfcf; margin-top:12px; }
    .cta { text-align:center; margin:28px 0 10px; }
    .cta a { background:linear-gradient(90deg,#8f98ff,#78e8e8); padding:16px 32px; border-radius:48px; color:#000; text-decoration:none; font-weight:700; font-size:1.2rem; border:3px solid #78e8e8; box-shadow:0 0 25px #78e8e8,0 0 10px #8f98ff; }
    .cta a:hover { box-shadow:0 0 35px #78e8e8cc; }
    main { max-width:1000px; margin:0 auto; padding:30px 20px 60px; }
    h2 { color:#8f98ff; border-bottom:3px solid #8f98ff; padding-bottom:6px; margin-top:30px; text-shadow:0 0 10px #000,0 0 10px #8f98ff88; }
    p, li { line-height:1.8; font-size:1.05rem; }
    ul { padding-left:18px; }
    .grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(260px,1fr)); gap:18px; margin-top:14px; }
    .card { background:rgba(15,15,20,.95); border-radius:14px; padding:18px; box-shadow:0 0 25px rgba(0,0,0,.6); }
    .disclaimer { text-align:center; margin:30px auto; font-size:.9rem; color:#aaa; background:#1a1a1d; padding:18px; border-radius:10px; }
    footer { text-align:center; color:#888; padding:22px; }
  </style>
</head>
<body>
  <div class="wrap">
    <header>
      <h1>Welcome to the Nest <img src="https://i.imgur.com/oYiTquV.gif" alt="phoenix" /></h1>
      <p>Enter the world of Aviryx — Skull-crowned Spirit of the Chain</p>
      <div class="cta"><a href="https://pump.fun" target="_blank">🚀 BUY $AVX NOW</a></div>
    </header>
    <main>
      <section class="grid">
        <div class="card">
          <h2>About</h2>
          <p>Aviryx is a digital spirit born from lost chains — a skull-crowned guardian with neon wings. Meme-born, lore-fueled, and community-owned. Forged on Pump.fun, it doesn’t chase moons — it flies past them.</p>
        </div>
        <div class="card">
          <h2>Tokenomics</h2>
          <ul>
            <li>Total Supply: 1,000,000,000 AVX</li>
            <li>0/0 Tax — 100% Community</li>
            <li>LP Burned / Contract Renounced</li>
            <li>Launched via Pump.fun</li>
          </ul>
        </div>
        <div class="card">
          <h2>Lore</h2>
          <p>When data died, the bird rose — glitch-winged, bone-crowned. It guards the chain’s skies and calls its sentinels to flight. The prophecy is simple: ascend.</p>
        </div>
      </section>

      <section class="card">
        <h2>Live Tracker</h2>
        <div id="tracker">Loading price…</div>
      </section>

      <section class="card">
        <h2>Community</h2>
        <p>
          <a href="https://x.com/AviryxCoin" target="_blank">Twitter</a> ·
          <a href="https://t.me/AviryxNest" target="_blank">Telegram</a> ·
          <a href="https://pump.fun" target="_blank">Pump.fun</a>
        </p>
      </section>

      <div class="disclaimer">
        <strong>Disclaimer:</strong> $AVX is a meme-based cryptocurrency project with no intrinsic value or guaranteed future. Entertainment only. Always DYOR.
      </div>
    </main>
    <footer>© 2025 Aviryx. All rights reserved.</footer>
  </div>
  <script src="/tracker.js"></script>
</body>
</html>

// ========= FILE: web/tracker.js =========
(async function () {
  const el = document.getElementById('tracker');
  const pair = (typeof DEXSCREENER_PAIR !== 'undefined') ? DEXSCREENER_PAIR : ('' + (process.env?.DEXSCREENER_PAIR || ''));
  try {
    if (!pair) { el.textContent = 'Chart link coming soon.'; return; }
    // If you have a dexscreener pair URL, you can just render a link
    el.innerHTML = `<a href="${pair}" target="_blank">Open chart on Dexscreener</a>`;
  } catch (e) {
    el.textContent = 'Tracker unavailable right now.';
  }
})();

// ========= FILE: README.md =========
# Aviryx ($AVX) — All-in-One Stack

Everything you need in one app: Telegram help bot + buy alerts, Twitter autoposter, webhook server, and a simple site/tracker.

## Quick Start (Replit/Render/Railway)
1. Create a new project → paste these files.
2. Copy `.env.example` to `.env` and fill what you have. You can leave Twitter blank for now.
3. Install and run:
   ```bash
   npm install
   npm run start
   ```
4. Open `/status` → should return `{ ok: true }`.
5. In Telegram, DM your bot → `/start`. Add it to your group and make it admin.
6. Get your chat id with `/id` and paste into `.env` as `TELEGRAM_CHAT_ID`.

## Buy Alerts via Helius
- Create Helius webhook → point to `https://<your-app>/webhooks/helius`
- Set `AVX_MINT` in `.env` to your token mint address
- When buys happen, alerts post to your group automatically.

## Twitter Autoposts
- Add API keys to `.env` and set `ENABLE_TWITTER=true`.
- The bot tweets twice daily by default (change cron in `src/bots/twitter.js`).

## Website
- Served from `/web` when running the app, but recommended to host static on Netlify/Vercel and keep this server for bots/webhooks.
- Update the phoenix/mascot image URL in `web/index.html` once you host your own asset.

## Env Flags
- `ENABLE_TG=true|false`
- `ENABLE_TWITTER=true|false`

## Security Notes
- Never commit real `.env` to public repos.
- Restrict webhook endpoint in Helius to your server URL.

---
Questions or want me to customize features (raid mode, sticker maker, reply-bot)? Ping me and I’ll wire it up. 
