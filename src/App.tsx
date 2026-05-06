import React from 'react';
import { motion } from 'motion/react';
import { Trophy, Users, MapPin } from 'lucide-react';
import ChatBot from './components/ChatBot';
import Dashboard from './components/Dashboard';
import { CLUB_INFO } from './constants';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-indigo-100 selection:text-indigo-900">
      {/* Sidebar/Mini Nav */}
      <nav className="bg-white border-b border-slate-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-2">
              <div className="bg-indigo-600 p-2 rounded-lg">
                <Trophy className="text-white w-6 h-6" />
              </div>
              <span className="text-xl font-black tracking-tight text-slate-900">
                ARENA<span className="text-indigo-600">HUB</span>
              </span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <a href="#" className="text-sm font-medium hover:text-indigo-600 transition-colors">Eventos</a>
              <a href="#" className="text-sm font-medium hover:text-indigo-600 transition-colors">Notícias</a>
              <a href="#" className="text-sm font-medium hover:text-indigo-600 transition-colors">Associações</a>
              <div className="h-4 w-px bg-slate-200" />
              <button className="bg-indigo-600 text-white px-5 py-2 rounded-full text-sm font-bold hover:bg-indigo-700 transition-all">
                Acesso Membro
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <header className="pt-16 pb-8 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 px-4 py-1.5 rounded-full text-xs font-bold mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-600"></span>
            </span>
            NOVIDADES DISPONÍVEIS
          </motion.div>
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
            <div>
              <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter mb-4 leading-none uppercase">
                VIVA O <br /> 
                <span className="text-indigo-600 italic">Esporte.</span>
              </h1>
              <p className="text-slate-500 max-w-lg text-lg leading-relaxed">
                Bem-vindo ao <strong>{CLUB_INFO.name}</strong>. Fique por dentro de tudo o que acontece no clube com nosso assistente inteligente.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-3">
                <div className="bg-slate-100 p-2 rounded-xl text-slate-600">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">LOCALIZAÇÃO</p>
                  <p className="text-sm font-semibold text-slate-700">São Paulo, SP</p>
                </div>
              </div>
              <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-3">
                <div className="bg-slate-100 p-2 rounded-xl text-slate-600">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">MEMBROS</p>
                  <p className="text-sm font-semibold text-slate-700">+2.500 Ativos</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative w-full h-[300px] md:h-[450px] rounded-[40px] overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1541252260730-0412e8e2108e?q=80&w=2074&auto=format&fit=crop" 
              alt="Club Arena"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
            <div className="absolute bottom-8 left-8 text-white">
              <p className="text-indigo-400 font-bold text-sm mb-1 uppercase tracking-widest">Destaque da Semana</p>
              <h2 className="text-3xl md:text-5xl font-black uppercase">TORNEIO DE BEACH TENNIS</h2>
              <p className="opacity-80 text-lg mt-2 max-w-md">Inscreva-se hoje e garanta seu kit atleta exclusivo.</p>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <Dashboard />
      </main>

      <footer className="bg-slate-900 text-white py-12 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="opacity-50 text-sm italic font-serif">
            {CLUB_INFO.name} — O seu centro de treinamento e lazer em São Paulo.
          </p>
        </div>
      </footer>

      {/* Chat Bot Floating */}
      <ChatBot />
    </div>
  );
}
