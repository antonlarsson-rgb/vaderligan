"use client";

import { motion } from "framer-motion";
import { Crown, Target, TrendingUp, Users, Swords } from "lucide-react";
import SkyBackground from "@/components/SkyBackground";

const weeklyStats = [
  { week: "V12", accuracy: 72 },
  { week: "V13", accuracy: 85 },
  { week: "V14", accuracy: 91 },
  { week: "V15", accuracy: 87 },
];

const friends = [
  { name: "Erik S.", initials: "ES" },
  { name: "Maja W.", initials: "MW" },
  { name: "Hugo A.", initials: "HA" },
];

const forecast = [
  { label: "Temperatur", value: "14°C", icon: "🌡️" },
  { label: "Nederbörd", value: "Lätt regn", icon: "🌧️" },
  { label: "Vind", value: "8 m/s", icon: "💨" },
  { label: "Himmel", value: "Halvklart", icon: "🌤" },
];

export default function LedarePage() {
  return (
    <SkyBackground weather="default">
      <div className="min-h-screen px-4 pt-28 pb-16 max-w-xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          {/* Header */}
          <div className="text-center mb-2">
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              className="inline-block mb-4"
            >
              <Crown className="w-12 h-12 text-[#f5c518] mx-auto" strokeWidth={1.5} />
            </motion.div>
            <h1 className="text-3xl md:text-4xl font-bold mb-1">Veckans ledare</h1>
            <p className="text-white/50">Vecka 15 — Stockholm</p>
          </div>

          {/* Leader card */}
          <motion.div
            className="glass-card p-8 border border-[#f5c518]/30 text-center"
            whileHover={{ scale: 1.01 }}
            style={{ boxShadow: "0 0 40px rgba(245, 197, 24, 0.1)" }}
          >
            {/* Avatar */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
              className="w-20 h-20 rounded-full bg-[#f5c518]/20 border-2 border-[#f5c518] flex items-center justify-center mx-auto mb-4"
            >
              <span className="text-2xl font-bold text-[#f5c518]">AK</span>
            </motion.div>

            <h2 className="text-2xl font-bold gold-shimmer mb-1">Anna K.</h2>
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="text-4xl font-bold text-[#f5c518]">750</span>
              <span className="text-white/40 text-sm">poäng</span>
            </div>

            <div className="flex justify-center gap-6 text-sm">
              <div className="flex items-center gap-1.5 text-white/60">
                <Target className="w-4 h-4 text-[#4dd9e0]" />
                <span>87% träffsäkerhet</span>
              </div>
              <div className="flex items-center gap-1.5 text-white/60">
                <TrendingUp className="w-4 h-4 text-emerald-400" />
                <span>🔥 5 streak</span>
              </div>
            </div>
          </motion.div>

          {/* Forecast */}
          <div className="glass-card p-6">
            <h3 className="text-sm font-medium text-white/50 uppercase tracking-wider mb-4">
              Annas prognos — Stockholm
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {forecast.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="bg-white/5 rounded-xl p-4 text-center"
                >
                  <div className="text-2xl mb-1">{item.icon}</div>
                  <div className="text-white font-semibold">{item.value}</div>
                  <div className="text-xs text-white/40">{item.label}</div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Challenge button */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="w-full py-4 bg-[#f5c518] text-[#0a1628] font-bold rounded-2xl text-lg flex items-center justify-center gap-2 shadow-lg shadow-[#f5c518]/20 hover:shadow-[#f5c518]/40 transition-shadow cursor-pointer"
          >
            <Swords className="w-5 h-5" />
            Utmana Anna
          </motion.button>

          {/* Accuracy stats */}
          <div className="glass-card p-6">
            <h3 className="text-sm font-medium text-white/50 uppercase tracking-wider mb-4">
              Träffsäkerhet — senaste 4 veckor
            </h3>
            <div className="flex items-end gap-3 h-32">
              {weeklyStats.map((stat, i) => (
                <motion.div
                  key={stat.week}
                  className="flex-1 flex flex-col items-center gap-2"
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ delay: 0.5 + i * 0.1, duration: 0.5, ease: "easeOut" }}
                  style={{ originY: 1 }}
                >
                  <span className="text-xs font-medium text-[#4dd9e0]">{stat.accuracy}%</span>
                  <div
                    className="w-full rounded-lg"
                    style={{
                      height: `${stat.accuracy}%`,
                      background: `linear-gradient(180deg, #4dd9e0 0%, rgba(77, 217, 224, 0.3) 100%)`,
                    }}
                  />
                  <span className="text-xs text-white/40">{stat.week}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Friends section */}
          <div className="glass-card p-6">
            <div className="flex items-center gap-2 mb-4">
              <Users className="w-4 h-4 text-[#4dd9e0]" />
              <h3 className="text-sm font-medium text-white/50 uppercase tracking-wider">
                Följer du: 3 vänner
              </h3>
            </div>
            <div className="flex gap-4">
              {friends.map((friend, i) => (
                <motion.div
                  key={friend.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + i * 0.1 }}
                  className="flex flex-col items-center gap-2"
                >
                  <div className="w-12 h-12 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-sm font-bold text-white/70">
                    {friend.initials}
                  </div>
                  <span className="text-xs text-white/50">{friend.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </SkyBackground>
  );
}
