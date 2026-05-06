import React from 'react';
import { motion } from 'motion/react';
import { Calendar, Trophy, Users, ArrowRight } from 'lucide-react';
import { CLUB_INFO, EVENTS, NEWS } from '../constants';

export default function Dashboard() {
  return (
    <div className="grid lg:grid-cols-3 gap-8 py-12">
      {/* Events Column */}
      <div className="lg:col-span-2 space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold flex items-center gap-2 text-slate-800">
            <Calendar className="text-indigo-600" /> 
            Próximos Eventos
          </h2>
          <button className="text-sm text-indigo-600 hover:underline flex items-center gap-1 font-medium">
            Ver todos <ArrowRight className="w-4 h-4" />
          </button>
        </div>
        
        <div className="grid sm:grid-cols-2 gap-4">
          {EVENTS.map((event, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              key={event.id}
              className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-indigo-600 transition-all group-hover:w-2" />
              <div className="text-xs font-bold text-indigo-600 mb-2 uppercase tracking-wider">
                {event.category}
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">{event.title}</h3>
              <div className="text-sm text-slate-500 mb-4">
                {new Date(event.date).toLocaleDateString('pt-BR', { 
                  day: 'numeric', 
                  month: 'long', 
                  hour: '2-digit',
                  minute: '2-digit'
                })}
              </div>
              <p className="text-sm text-slate-600 line-clamp-2">{event.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* News & Info Column */}
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold flex items-center gap-2 mb-6 text-slate-800">
            <Trophy className="text-amber-500" /> 
            Notícias
          </h2>
          <div className="space-y-4">
            {NEWS.map((item, idx) => (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                key={item.id}
                className="bg-slate-50 p-4 rounded-xl border border-slate-200"
              >
                <div className="text-xs text-slate-400 mb-1">{item.date}</div>
                <h4 className="font-bold text-slate-800 mb-1">{item.title}</h4>
                <p className="text-sm text-slate-600">{item.summary}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="bg-indigo-900 text-white p-6 rounded-2xl relative overflow-hidden">
          <Users className="absolute -right-4 -bottom-4 w-32 h-32 opacity-10 rotate-12" />
          <h3 className="font-bold mb-2">Faz parte do clube?</h3>
          <p className="text-sm text-indigo-200 mb-4">
            Nossa secretaria está pronta para tirar suas dúvidas presenciais.
          </p>
          <div className="space-y-2 text-sm text-indigo-100">
            <p><strong className="text-white">Endereço:</strong> {CLUB_INFO.address}</p>
            <p><strong className="text-white">Horários:</strong> {CLUB_INFO.hours.weekdays}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
