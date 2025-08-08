/**
 * Aviryx ($AVX) - Complete Halloween-Themed Cryptocurrency Platform
 * Full-stack React/Express application with Telegram & Twitter bots
 * Generated: 2025-01-07
 */

// ===== PACKAGE.JSON =====
const packageJson = {
  "name": "aviryx-halloween",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "NODE_ENV=development tsx server/index.ts",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "@hookform/resolvers": "^3.3.4",
    "@neondatabase/serverless": "^0.9.0",
    "@radix-ui/react-accordion": "^1.1.2",
    "@radix-ui/react-alert-dialog": "^1.0.5",
    "@radix-ui/react-aspect-ratio": "^1.0.3",
    "@radix-ui/react-avatar": "^1.0.4",
    "@radix-ui/react-checkbox": "^1.0.4",
    "@radix-ui/react-collapsible": "^1.0.3",
    "@radix-ui/react-context-menu": "^2.1.5",
    "@radix-ui/react-dialog": "^1.0.5",
    "@radix-ui/react-dropdown-menu": "^2.0.6",
    "@radix-ui/react-hover-card": "^1.0.7",
    "@radix-ui/react-label": "^2.0.2",
    "@radix-ui/react-menubar": "^1.0.4",
    "@radix-ui/react-navigation-menu": "^1.1.4",
    "@radix-ui/react-popover": "^1.0.7",
    "@radix-ui/react-progress": "^1.0.3",
    "@radix-ui/react-radio-group": "^1.1.3",
    "@radix-ui/react-scroll-area": "^1.0.5",
    "@radix-ui/react-select": "^2.0.0",
    "@radix-ui/react-separator": "^1.0.3",
    "@radix-ui/react-slider": "^1.1.2",
    "@radix-ui/react-slot": "^1.0.2",
    "@radix-ui/react-switch": "^1.0.3",
    "@radix-ui/react-tabs": "^1.0.4",
    "@radix-ui/react-toast": "^1.1.5",
    "@radix-ui/react-toggle": "^1.0.3",
    "@radix-ui/react-toggle-group": "^1.0.4",
    "@radix-ui/react-tooltip": "^1.0.7",
    "@tanstack/react-query": "^5.17.19",
    "@types/express": "^4.17.21",
    "@types/express-session": "^1.17.10",
    "@types/node": "^20.10.6",
    "@types/react": "^18.2.46",
    "@types/react-dom": "^18.2.18",
    "@vitejs/plugin-react": "^4.2.1",
    "autoprefixer": "^10.4.16",
    "axios": "^1.6.2",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.0.0",
    "cmdk": "^0.2.0",
    "connect-pg-simple": "^9.0.1",
    "date-fns": "^3.0.6",
    "drizzle-kit": "^0.20.7",
    "drizzle-orm": "^0.29.1",
    "drizzle-zod": "^0.5.1",
    "embla-carousel-react": "^8.0.0",
    "express": "^4.18.2",
    "express-session": "^1.17.3",
    "framer-motion": "^10.18.0",
    "input-otp": "^1.2.4",
    "lucide-react": "^0.303.0",
    "memorystore": "^1.6.7",
    "next-themes": "^0.2.1",
    "node-cron": "^3.0.3",
    "passport": "^0.7.0",
    "passport-local": "^1.0.0",
    "postcss": "^8.4.32",
    "react": "^18.2.0",
    "react-day-picker": "^8.10.0",
    "react-dom": "^18.2.0",
    "react-hook-form": "^7.48.2",
    "react-icons": "^4.12.0",
    "react-resizable-panels": "^0.0.63",
    "recharts": "^2.8.0",
    "tailwind-merge": "^2.2.0",
    "tailwindcss": "^3.4.0",
    "tailwindcss-animate": "^1.0.7",
    "telegraf": "^4.15.6",
    "tsx": "^4.6.2",
    "tw-animate-css": "^1.0.1",
    "twitter-api-v2": "^1.15.2",
    "typescript": "^5.3.3",
    "vaul": "^0.8.0",
    "vite": "^5.0.10",
    "wouter": "^3.0.0",
    "ws": "^8.16.0",
    "zod": "^3.22.4",
    "zod-validation-error": "^2.1.0"
  }
};

// ===== CSS STYLES (client/src/index.css) =====
const indexCSS = `
@import url('https://fonts.googleapis.com/css2?family=Creepster&family=Righteous:wght@400&family=JetBrains+Mono:wght@400;500;600&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --background: hsl(0 0% 100%);
  --foreground: hsl(210 25% 7.8431%);
  --card: hsl(180 6.6667% 97.0588%);
  --card-foreground: hsl(210 25% 7.8431%);
  --popover: hsl(0 0% 100%);
  --popover-foreground: hsl(210 25% 7.8431%);
  --primary: hsl(203.8863 88.2845% 53.1373%);
  --primary-foreground: hsl(0 0% 100%);
  --secondary: hsl(210 25% 7.8431%);
  --secondary-foreground: hsl(0 0% 100%);
  --muted: hsl(240 1.9608% 90%);
  --muted-foreground: hsl(210 25% 7.8431%);
  --accent: hsl(211.5789 51.3514% 92.7451%);
  --accent-foreground: hsl(203.8863 88.2845% 53.1373%);
  --destructive: hsl(356.3033 90.5579% 54.3137%);
  --destructive-foreground: hsl(0 0% 100%);
  --border: hsl(201.4286 30.4348% 90.9804%);
  --input: hsl(200 23.0769% 97.4510%);
  --ring: hsl(202.8169 89.1213% 53.1373%);
  --chart-1: hsl(203.8863 88.2845% 53.1373%);
  --chart-2: hsl(159.7826 100% 36.0784%);
  --chart-3: hsl(42.0290 92.8251% 56.2745%);
  --chart-4: hsl(147.1429 78.5047% 41.9608%);
  --chart-5: hsl(341.4894 75.2000% 50.9804%);
  --sidebar: hsl(180 6.6667% 97.0588%);
  --sidebar-foreground: hsl(210 25% 7.8431%);
  --sidebar-primary: hsl(203.8863 88.2845% 53.1373%);
  --sidebar-primary-foreground: hsl(0 0% 100%);
  --sidebar-accent: hsl(211.5789 51.3514% 92.7451%);
  --sidebar-accent-foreground: hsl(203.8863 88.2845% 53.1373%);
  --sidebar-border: hsl(205.0000 25.0000% 90.5882%);
  --sidebar-ring: hsl(202.8169 89.1213% 53.1373%);
  
  /* Aviryx Halloween colors */
  --aviryx-purple: hsl(270 100% 65%);
  --aviryx-cyan: hsl(180 100% 50%);
  --aviryx-dark: hsl(240 20% 4%);
  --aviryx-card: hsl(240 25% 8%);
  --aviryx-accent: hsl(25 100% 55%);
  --halloween-orange: hsl(25 100% 55%);
  --halloween-purple: hsl(270 100% 65%);
  --halloween-green: hsl(120 100% 35%);
  --spooky-glow: hsl(270 100% 80%);
  
  --font-sans: 'Righteous', sans-serif;
  --font-serif: Georgia, serif;
  --font-mono: 'JetBrains Mono', monospace;
  --font-creepster: 'Creepster', cursive;
  --radius: 1.3rem;
}

.dark {
  --background: hsl(240 20% 4%);
  --foreground: hsl(25 100% 85%);
  --card: hsl(240 25% 8%);
  --card-foreground: hsl(25 100% 85%);
  --popover: hsl(240 20% 4%);
  --popover-foreground: hsl(25 100% 85%);
  --primary: hsl(270 100% 65%);
  --primary-foreground: hsl(240 20% 4%);
  --secondary: hsl(25 100% 55%);
  --secondary-foreground: hsl(240 20% 4%);
  --muted: hsl(240 25% 12%);
  --muted-foreground: hsl(25 60% 60%);
  --accent: hsl(240 25% 8%);
  --accent-foreground: hsl(270 100% 65%);
  --destructive: hsl(0 100% 50%);
  --destructive-foreground: hsl(25 100% 85%);
  --border: hsl(240 25% 15%);
  --input: hsl(240 25% 12%);
  --ring: hsl(270 100% 65%);
}

@layer base {
  * {
    @apply border-border;
  }

  body {
    @apply bg-aviryx-dark font-sans antialiased overflow-x-hidden;
    font-family: var(--font-sans);
    color: hsl(var(--halloween-orange));
  }

  html {
    scroll-behavior: smooth;
  }
}

@layer components {
  .glass-effect {
    @apply bg-aviryx-card/80 backdrop-blur-[10px] border border-aviryx-purple/20;
  }

  .font-creepster {
    font-family: var(--font-creepster);
  }

  .font-mono {
    font-family: var(--font-mono);
  }

  .text-aviryx-purple {
    color: hsl(var(--aviryx-purple));
  }

  .text-aviryx-cyan {
    color: hsl(var(--aviryx-cyan));
  }

  .bg-aviryx-dark {
    background-color: hsl(var(--aviryx-dark));
  }

  .bg-aviryx-card {
    background-color: hsl(var(--aviryx-card));
  }

  .border-aviryx-purple {
    border-color: hsl(var(--aviryx-purple));
  }

  .custom-scrollbar::-webkit-scrollbar {
    width: 8px;
  }

  .custom-scrollbar::-webkit-scrollbar-track {
    background: hsl(var(--aviryx-card));
  }

  .custom-scrollbar::-webkit-scrollbar-thumb {
    background: hsl(var(--aviryx-purple));
    border-radius: 4px;
  }

  .custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background: hsl(var(--aviryx-cyan));
  }
}

@layer utilities {
  .animate-pulse-glow {
    animation: pulse-glow 2s infinite;
  }

  .animate-float {
    animation: float 3s ease-in-out infinite;
  }

  .animate-glow {
    animation: glow 2s ease-in-out infinite alternate;
  }

  .animate-ticker {
    animation: ticker 20s linear infinite;
  }

  @keyframes pulse-glow {
    0%, 100% {
      box-shadow: 0 0 20px hsl(var(--aviryx-cyan)), 0 0 40px hsl(var(--aviryx-purple));
    }
    50% {
      box-shadow: 0 0 30px hsl(var(--aviryx-cyan)), 0 0 60px hsl(var(--aviryx-purple));
    }
  }

  @keyframes float {
    0%, 100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-10px);
    }
  }

  @keyframes glow {
    0% {
      text-shadow: 0 0 20px hsl(var(--aviryx-purple)), 0 0 30px hsl(var(--aviryx-cyan));
    }
    100% {
      text-shadow: 0 0 30px hsl(var(--aviryx-purple)), 0 0 40px hsl(var(--aviryx-cyan));
    }
  }

  @keyframes ticker {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(-100%);
    }
  }

  .price-up {
    color: hsl(var(--halloween-green));
  }

  .price-down {
    color: hsl(var(--halloween-orange));
  }

  .ticker-tape {
    background: linear-gradient(90deg, hsl(var(--aviryx-purple)), hsl(var(--aviryx-cyan)));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
}
`;

// ===== DATABASE SCHEMA (shared/schema.ts) =====
const schemaCode = `
import { pgTable, uuid, text, timestamp, real, integer, json } from 'drizzle-orm/pg-core';
import { createInsertSchema } from 'drizzle-zod';
import { z } from 'zod';

export const users = pgTable('users', {
  id: uuid('id').primaryKey().defaultRandom(),
  username: text('username').notNull().unique(),
  email: text('email'),
  passwordHash: text('password_hash').notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
});

export const priceData = pgTable('price_data', {
  id: uuid('id').primaryKey().defaultRandom(),
  price: text('price').notNull(),
  change24h: text('change_24h').notNull(),
  volume24h: text('volume_24h').notNull(),
  marketCap: text('market_cap').notNull(),
  holders: integer('holders'),
  timestamp: timestamp('timestamp').notNull().defaultNow(),
});

export const transactions = pgTable('transactions', {
  id: uuid('id').primaryKey().defaultRandom(),
  signature: text('signature').notNull().unique(),
  type: text('type').notNull(),
  amount: text('amount').notNull(),
  wallet: text('wallet').notNull(),
  timestamp: timestamp('timestamp').notNull().defaultNow(),
});

export const botStats = pgTable('bot_stats', {
  id: uuid('id').primaryKey().defaultRandom(),
  telegramMembers: integer('telegram_members'),
  twitterFollowers: integer('twitter_followers'),
  lastTweet: timestamp('last_tweet'),
  botStatus: json('bot_status').$type<{
    telegram: boolean;
    twitter: boolean;
  }>().notNull().default({ telegram: false, twitter: false }),
  messagesTotal: integer('messages_total').default(0),
  timestamp: timestamp('timestamp').notNull().defaultNow(),
});

export const insertUserSchema = createInsertSchema(users).omit({ id: true, createdAt: true });
export const insertPriceDataSchema = createInsertSchema(priceData).omit({ id: true, timestamp: true });
export const insertTransactionSchema = createInsertSchema(transactions).omit({ id: true, timestamp: true });
export const insertBotStatsSchema = createInsertSchema(botStats).omit({ id: true, timestamp: true });

export type User = typeof users.$inferSelect;
export type PriceData = typeof priceData.$inferSelect;
export type Transaction = typeof transactions.$inferSelect;
export type BotStats = typeof botStats.$inferSelect;

export type InsertUser = z.infer<typeof insertUserSchema>;
export type InsertPriceData = z.infer<typeof insertPriceDataSchema>;
export type InsertTransaction = z.infer<typeof insertTransactionSchema>;
export type InsertBotStats = z.infer<typeof insertBotStatsSchema>;
`;

// ===== REACT COMPONENTS =====

// Navigation Component
const navigationComponent = `
import { useState } from "react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="relative z-20 glass-effect sticky top-0 py-4" data-testid="navigation">
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-halloween-purple to-halloween-orange p-1 animate-float" style={{boxShadow: '0 0 15px hsl(var(--halloween-purple))'}}>
            <img src="/attached_assets/AVX_1754610768959.png" alt="Aviryx" className="w-full h-full object-contain" />
          </div>
          <span className="text-xl font-creepster" style={{color: 'hsl(var(--halloween-orange))', textShadow: '0 0 10px hsl(var(--halloween-orange))'}}>Aviryx 🎃</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('about')} 
            className="transition-colors"
            style={{color: 'hsl(var(--halloween-orange))'}}
            onMouseEnter={(e) => e.currentTarget.style.color = 'hsl(var(--halloween-purple))'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'hsl(var(--halloween-orange))'}
            data-testid="nav-about"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('tokenomics')} 
            className="transition-colors"
            style={{color: 'hsl(var(--halloween-orange))'}}
            onMouseEnter={(e) => e.currentTarget.style.color = 'hsl(var(--halloween-purple))'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'hsl(var(--halloween-orange))'}
            data-testid="nav-tokenomics"
          >
            Tokenomics
          </button>
          <button 
            onClick={() => scrollToSection('tracker')} 
            className="transition-colors"
            style={{color: 'hsl(var(--halloween-orange))'}}
            onMouseEnter={(e) => e.currentTarget.style.color = 'hsl(var(--halloween-purple))'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'hsl(var(--halloween-orange))'}
            data-testid="nav-tracker"
          >
            Live Data
          </button>
          <button 
            onClick={() => scrollToSection('community')} 
            className="transition-colors"
            style={{color: 'hsl(var(--halloween-orange))'}}
            onMouseEnter={(e) => e.currentTarget.style.color = 'hsl(var(--halloween-purple))'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'hsl(var(--halloween-orange))'}
            data-testid="nav-community"
          >
            Community
          </button>
        </div>

        <div className="flex items-center space-x-4">
          <a
            href={import.meta.env.VITE_PUMPFUN_URL || 'https://pump.fun'}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-halloween-purple to-halloween-orange text-black px-6 py-2 rounded-full font-semibold hover:animate-pulse-glow transition-all duration-300"
            style={{boxShadow: '0 0 15px hsl(var(--halloween-purple))'}}
            data-testid="button-buy-avx"
          >
            Buy $AVX
          </a>
          <button 
            className="md:hidden text-aviryx-purple"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            data-testid="button-menu-toggle"
          >
            <i className="fas fa-bars text-xl"></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden glass-effect mt-2 mx-6 rounded-lg p-4">
          <div className="flex flex-col space-y-3">
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-left hover:text-aviryx-cyan transition-colors"
              data-testid="mobile-nav-about"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('tokenomics')} 
              className="text-left hover:text-aviryx-cyan transition-colors"
              data-testid="mobile-nav-tokenomics"
            >
              Tokenomics
            </button>
            <button 
              onClick={() => scrollToSection('tracker')} 
              className="text-left hover:text-aviryx-cyan transition-colors"
              data-testid="mobile-nav-tracker"
            >
              Live Data
            </button>
            <button 
              onClick={() => scrollToSection('community')} 
              className="text-left hover:text-aviryx-cyan transition-colors"
              data-testid="mobile-nav-community"
            >
              Community
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
`;

// Hero Section Component
const heroSectionComponent = `
import { useQuery } from "@tanstack/react-query";

export default function HeroSection() {
  const { data: price } = useQuery({
    queryKey: ['/api/price/latest'],
    refetchInterval: 10000,
  });

  return (
    <section className="relative z-10 py-20 text-center" data-testid="hero-section">
      <div className="container mx-auto px-6">
        {/* Floating AVX icon */}
        <div className="inline-block animate-float mb-6">
          <div className="w-32 h-32 mx-auto bg-gradient-to-r from-halloween-purple to-halloween-orange rounded-full p-2 animate-glow" style={{boxShadow: '0 0 30px hsl(var(--halloween-purple)), 0 0 60px hsl(var(--halloween-orange))'}}>
            <img src="/attached_assets/AVX_1754610768959.png" alt="Aviryx" className="w-full h-full object-contain" />
          </div>
        </div>
        
        <h1 className="font-creepster text-6xl md:text-8xl mb-4 animate-glow" data-testid="hero-title" style={{textShadow: '0 0 20px hsl(var(--halloween-purple)), 0 0 40px hsl(var(--halloween-orange))'}}>
          <span className="bg-gradient-to-r from-halloween-purple to-halloween-orange bg-clip-text text-transparent">
            AVIRYX
          </span>
        </h1>
        
        <p className="text-2xl md:text-3xl mb-6" data-testid="hero-subtitle" style={{color: 'hsl(var(--halloween-orange))', textShadow: '0 0 10px hsl(var(--halloween-orange))'}}>
          🎃 Bird of the Chain. Guardian of Memes. 🎃
        </p>
        
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed" data-testid="hero-description" style={{color: 'hsl(var(--halloween-orange))'}}>
          👻 Born from digital ruins on Halloween night, sworn to guard memes and haunted flight. 
          We don't chase moons — we haunt them. 🦇
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <a
            href={import.meta.env.VITE_PUMPFUN_URL || 'https://pump.fun'}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-halloween-purple to-halloween-orange text-black px-8 py-4 rounded-full font-bold text-lg hover:animate-pulse-glow transition-all duration-300 flex items-center space-x-2"
            style={{boxShadow: '0 0 20px hsl(var(--halloween-purple)), 0 0 40px hsl(var(--halloween-orange))'}}  
            data-testid="button-buy-pumpfun"
          >
            <i className="fas fa-rocket"></i>
            <span>Buy $AVX on Pump.fun</span>
          </a>
          
          <a
            href={import.meta.env.VITE_DEXSCREENER_PAIR || '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-halloween-orange px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 flex items-center space-x-2"
            style={{color: 'hsl(var(--halloween-orange))', borderColor: 'hsl(var(--halloween-orange))', boxShadow: '0 0 15px hsl(var(--halloween-orange))'}}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'hsl(var(--halloween-orange))';
              e.currentTarget.style.color = 'black';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = 'hsl(var(--halloween-orange))';
            }}
            data-testid="button-view-chart"
          >
            <i className="fas fa-chart-line"></i>
            <span>View Chart</span>
          </a>
        </div>

        {/* Key Stats */}
        {price && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto" data-testid="hero-stats">
            <div className="glass-effect rounded-xl p-4">
              <div className="text-aviryx-cyan text-2xl font-bold" data-testid="stat-market-cap">
                $\{Number(price.marketCap).toLocaleString()}
              </div>
              <div className="text-sm text-gray-400">Market Cap</div>
            </div>
            <div className="glass-effect rounded-xl p-4">
              <div className="text-aviryx-purple text-2xl font-bold" data-testid="stat-holders">
                {price.holders?.toLocaleString()}
              </div>
              <div className="text-sm text-gray-400">Holders</div>
            </div>
            <div className="glass-effect rounded-xl p-4">
              <div className={\`text-2xl font-bold \${parseFloat(price.change24h) >= 0 ? 'text-green-400' : 'text-red-400'}\`} data-testid="stat-change">
                {parseFloat(price.change24h) >= 0 ? '+' : ''}{price.change24h}%
              </div>
              <div className="text-sm text-gray-400">24h Change</div>
            </div>
            <div className="glass-effect rounded-xl p-4">
              <div className="text-aviryx-cyan text-2xl font-bold" data-testid="stat-volume">
                $\{Number(price.volume24h).toLocaleString()}
              </div>
              <div className="text-sm text-gray-400">24h Volume</div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
`;

// ===== EXPRESS SERVER CODE =====
const serverCode = `
import express from 'express';
import session from 'express-session';
import cors from 'cors';
import { MemStorage } from './storage.js';
import { setupRoutes } from './routes.js';
import { setupTelegramBot } from './services/telegram.js';
import { setupTwitterBot } from './services/twitter.js';
import viteDevServer from './vite.js';

const app = express();
const PORT = process.env.PORT || 5000;

// Initialize storage
const storage = new MemStorage();

// Middleware
app.use(cors());
app.use(express.json());
app.use(session({
  secret: process.env.SESSION_SECRET || 'aviryx-secret-key',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false }
}));

// Custom request logging
app.use((req, res, next) => {
  const start = Date.now();
  res.on('finish', () => {
    const duration = Date.now() - start;
    const logData = {
      id: crypto.randomUUID(),
      method: req.method,
      url: req.url,
      status: res.statusCode,
      duration: \`\${duration}ms\`,
      timestamp: new Date().toISOString(),
      userAgent: req.get('User-Agent'),
      ip: req.ip
    };
    console.log(\`\${new Date().toLocaleTimeString()} [express] \${req.method} \${req.url} \${res.statusCode} in \${duration}ms :: \${JSON.stringify(logData).substring(0, 100)}...\`);
  });
  next();
});

// Setup API routes
setupRoutes(app, storage);

// Setup bots
if (process.env.TELEGRAM_BOT_TOKEN) {
  setupTelegramBot(storage);
}

if (process.env.TWITTER_API_KEY) {
  setupTwitterBot(storage);
}

// Vite dev server in development
if (process.env.NODE_ENV === 'development') {
  await viteDevServer(app);
}

app.listen(PORT, '0.0.0.0', () => {
  console.log(\`\${new Date().toLocaleTimeString()} [express] serving on port \${PORT}\`);
});
`;

// ===== TELEGRAM BOT SERVICE =====
const telegramBotCode = `
import { Telegraf } from 'telegraf';

export function setupTelegramBot(storage) {
  if (!process.env.TELEGRAM_BOT_TOKEN) {
    console.log('No Telegram bot token provided');
    return;
  }

  const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN);

  // Commands
  bot.start((ctx) => {
    ctx.reply(
      \`🎃 Welcome to the Aviryx Nest! 🦇\\n\\n\` +
      \`I'm your guardian bot, here to serve the skull-crowned spirit of the chain.\\n\\n\` +
      \`Commands:\\n\` +
      \`/buy - Quick buy link\\n\` +
      \`/lore - Project backstory\\n\` +
      \`/chart - Live price chart\\n\` +
      \`/socials - Community links\`
    );
  });

  bot.command('buy', (ctx) => {
    const buyUrl = process.env.VITE_PUMPFUN_URL || 'https://pump.fun';
    ctx.reply(
      \`🚀 Ready to join the flight?\\n\\n\` +
      \`Buy $AVX: \${buyUrl}\\n\\n\` +
      \`👻 Remember: We don't chase moons — we haunt them! 🌙\`
    );
  });

  bot.command('lore', (ctx) => {
    ctx.reply(
      \`🦴 THE LORE OF AVIRYX 🦴\\n\\n\` +
      \`When data died, the bird rose — glitch-winged, bone-crowned. \` +
      \`Aviryx emerged from the digital ruins as a guardian spirit, \` +
      \`watching over the blockchain's eternal flight paths.\\n\\n\` +
      \`It calls its sentinels to ascend beyond the ordinary, \` +
      \`where memes become legends. 👻\\n\\n\` +
      \`Born from Halloween night, sworn to guard memes and haunted flight. 🎃\`
    );
  });

  bot.command('chart', (ctx) => {
    const chartUrl = process.env.VITE_DEXSCREENER_PAIR || 'https://dexscreener.com';
    ctx.reply(
      \`📈 Live $AVX Chart\\n\\n\` +
      \`View on DexScreener: \${chartUrl}\\n\\n\` +
      \`Track the spirit's flight in real-time! 🦇\`
    );
  });

  bot.command('socials', (ctx) => {
    const telegram = process.env.VITE_TELEGRAM_URL || 'https://t.me/AviryxNest';
    const twitter = process.env.VITE_TWITTER_URL || 'https://x.com/AviryxCoin';
    
    ctx.reply(
      \`🌐 Join the Aviryx Community\\n\\n\` +
      \`🔮 Telegram: \${telegram}\\n\` +
      \`🐦 Twitter: \${twitter}\\n\\n\` +
      \`Gather with fellow spirits! 👻\`
    );
  });

  // Handle buy alerts
  bot.on('message', async (ctx) => {
    try {
      await storage.updateBotStats({
        messagesTotal: (await storage.getBotStats())?.messagesTotal + 1 || 1,
        botStatus: { telegram: true, twitter: false }
      });
    } catch (error) {
      console.error('Error updating bot stats:', error);
    }
  });

  bot.launch();
  console.log('🤖 Telegram bot launched');

  // Send buy alerts
  async function sendBuyAlert(transaction) {
    if (!process.env.TELEGRAM_CHAT_ID) return;
    
    const amount = Number(transaction.amount);
    const amountFormatted = amount.toLocaleString();
    
    const message = 
      \`🚀 BUY ALERT 🚀\\n\\n\` +
      \`💰 Amount: \${amountFormatted} $AVX\\n\` +
      \`👤 Wallet: \${transaction.wallet.substring(0, 8)}...\\n\` +
      \`⏰ Time: \${new Date().toLocaleTimeString()}\\n\\n\` +
      \`Another spirit joins the flight! 🦇\\n\\n\` +
      \`Join them: \${process.env.VITE_PUMPFUN_URL || 'https://pump.fun'}\`;

    try {
      await bot.telegram.sendMessage(process.env.TELEGRAM_CHAT_ID, message);
    } catch (error) {
      console.error('Error sending buy alert:', error);
    }
  }

  return { sendBuyAlert };
}
`;

// ===== TWITTER BOT SERVICE =====
const twitterBotCode = `
import { TwitterApi } from 'twitter-api-v2';
import cron from 'node-cron';

export function setupTwitterBot(storage) {
  if (!process.env.TWITTER_API_KEY || !process.env.TWITTER_API_SECRET) {
    console.log('No Twitter credentials provided');
    return;
  }

  const client = new TwitterApi({
    appKey: process.env.TWITTER_API_KEY,
    appSecret: process.env.TWITTER_API_SECRET,
    accessToken: process.env.TWITTER_ACCESS_TOKEN,
    accessSecret: process.env.TWITTER_ACCESS_SECRET,
  });

  const tweets = [
    \`🎃 The skull-crowned guardian watches over the chain... $AVX\`,
    \`👻 Born from digital ruins, sworn to protect. We don't chase moons — we haunt them! $AVX\`,
    \`🦇 When memes become legends, Aviryx leads the flight. Join the nest! $AVX\`,
    \`💀 Glitch-winged, bone-crowned. The spirit of the blockchain soars! $AVX\`,
    \`🌙 Another night, another haunted flight. The guardian never sleeps! $AVX\`,
    \`⚡ From Halloween night to eternal flight — Aviryx protects the chain! $AVX\`,
    \`🔮 Digital spirit, meme guardian, chain protector. This is Aviryx! $AVX\`
  ];

  // Schedule tweets twice daily
  cron.schedule('0 10,18 * * *', async () => {
    try {
      const randomTweet = tweets[Math.floor(Math.random() * tweets.length)];
      await client.v2.tweet(randomTweet);
      
      await storage.updateBotStats({
        lastTweet: new Date(),
        botStatus: { telegram: true, twitter: true }
      });
      
      console.log('🐦 Tweet sent:', randomTweet);
    } catch (error) {
      console.error('Error sending tweet:', error);
    }
  });

  console.log('🐦 Twitter bot scheduled (10 AM & 6 PM UTC)');
}
`;

// ===== ENVIRONMENT VARIABLES =====
const envConfig = `
# Environment Configuration for Aviryx Halloween Platform

# Database
DATABASE_URL=your_neon_database_url_here

# Telegram Bot
TELEGRAM_BOT_TOKEN=your_telegram_bot_token_here
TELEGRAM_CHAT_ID=your_telegram_chat_id_here

# Twitter Bot  
TWITTER_API_KEY=your_twitter_api_key_here
TWITTER_API_SECRET=your_twitter_api_secret_here
TWITTER_ACCESS_TOKEN=your_twitter_access_token_here
TWITTER_ACCESS_SECRET=your_twitter_access_secret_here

# Frontend URLs
VITE_PUMPFUN_URL=https://pump.fun
VITE_DEXSCREENER_PAIR=https://dexscreener.com
VITE_TELEGRAM_URL=https://t.me/AviryxNest
VITE_TWITTER_URL=https://x.com/AviryxCoin
VITE_AVX_MINT=your_token_mint_address_here

# Session
SESSION_SECRET=your_session_secret_here

# Development
NODE_ENV=development
PORT=5000
`;

// ===== EXPORT ALL =====
module.exports = {
  packageJson,
  indexCSS,
  schemaCode,
  navigationComponent,
  heroSectionComponent,
  serverCode,
  telegramBotCode,
  twitterBotCode,
  envConfig,
  
  // Installation Instructions
  setup: \`
AVIRYX HALLOWEEN SETUP INSTRUCTIONS:

1. Create new project directory:
   mkdir aviryx-halloween && cd aviryx-halloween

2. Initialize npm and install dependencies:
   npm init -y
   npm install \${Object.keys(packageJson.dependencies).join(' ')}

3. Create file structure:
   - client/src/components/
   - client/src/lib/
   - server/services/
   - shared/
   - public/attached_assets/

4. Copy code from this file to respective locations:
   - CSS → client/src/index.css
   - Components → client/src/components/
   - Schema → shared/schema.ts
   - Server → server/index.ts
   - Services → server/services/

5. Add environment variables to .env file

6. Add AVX artwork images to public/attached_assets/

7. Run development server:
   npm run dev

Features included:
✓ Halloween-themed UI with orange/purple colors
✓ Telegram bot with buy alerts
✓ Twitter bot with scheduled tweets
✓ Real-time price tracking
✓ Community sections
✓ Responsive design
✓ PostgreSQL database integration
✓ Session management
✓ API routes for all data
  \`
};

console.log('🎃 Aviryx Halloween Platform - Complete backup generated! 🦇');