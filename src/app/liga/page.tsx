"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import SkyBackground from "@/components/SkyBackground";

const mockUsers = [
  { name: "Anna K.", points: 750, streak: 5, accuracy: 87 },
  { name: "Erik S.", points: 720, streak: 4, accuracy: 84 },
  { name: "Sofia L.", points: 695, streak: 3, accuracy: 82 },
  { name: "Oscar B.", points: 670, streak: 2, accuracy: 79 },
  { name: "Maja W.", points: 645, streak: 6, accuracy: 78 },
  { name: "Gustav N.", points: 620, streak: 1, accuracy: 76 },
  { name: "Ella F.", points: 590, streak: 0, accuracy: 74 },
  { name: "Hugo A.", points: 565, streak: 3, accuracy: 72 },
  { name: "Wilma D.", points: 540, streak: 0, accuracy: 70 },
  { name: "Liam P.", points: 510, streak: 1, accuracy: 68 },
];

const tabs = ["Globalt", "Vänner", "Sverige"];
const periods = ["Vecka", "Månad"];

function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("");
}

function getRankStyle(rank: number) {
  if (rank === 1) return { border: "border-[#f5c518]", bg: "bg-[#f5c518]/20", text: "text-[#f5c518]" };
  if (rank === 2) return { border: "border-[#c0c0c0]", bg: "bg-[#c0c0c0]/15", text: "text-[#c0c0c0]" };
  if (rank === 3) return { border: "border-[#cd7f32]", bg: "bg-[#cd7f32]/15", text: "text-[#cd7f32]" };
  return { border: "border-white/10", bg: "bg-white/5", text: "text-white/50" };
}

function getRankEmoji(rank: number) {
  if (rank === 1) return "🥇";
  if (rank === 2) return "🥈";
  if (rank === 3) return "🥉";
  return `${rank}`;
}

export default function LigaPage() {
  const [activeTab, setActiveTab] = useState("Globalt");
  const [activePeriod, setActivePeriod] = useState("Vecka");

  return (
    <SkyBackground weather="cloudy">
      <div className="min-h-screen px-4 pt-28 pb-16 max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-2">Topplistan</h1>
          <p className="text-white/50 text-center mb-8">Se vem som förutspår vädret bäst</p>

          {/* Tabs */}
          <div className="flex justify-center gap-2 mb-4">
            {tabs.map((tab) => (
              <motion.button
                key={tab}
                onClick={() => setActiveTab(tab)}
                whileTap={{ scale: 0.95 }}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all cursor-pointer ${
                  activeTab === tab
                    ? "bg-[#4dd9e0] text-[#0a1628]"
                    : "bg-white/8 text-white/60 hover:bg-white/12 hover:text-white/80"
                }`}
              >
                {tab}
              </motion.button>
            ))}
          </div>

          {/* Period toggle */}
          <div className="flex justify-center gap-2 mb-8">
            {periods.map((period) => (
              <motion.button
                key={period}
                onClick={() => setActivePeriod(period)}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                  activePeriod === period
                    ? "bg-white/15 text-white"
                    : "bg-transparent text-white/40 hover:text-white/60"
                }`}
              >
                {period}
              </motion.button>
            ))}
          </div>

          {/* Leaderboard */}
          <div className="space-y-3">
            {mockUsers.map((user, index) => {
              const rank = index + 1;
              const style = getRankStyle(rank);
              return (
                <motion.div
                  key={user.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ scale: 1.02, x: 4 }}
                  className={`glass-card glass-card-hover flex items-center gap-4 px-5 py-4 border ${style.border} transition-all`}
                >
                  {/* Rank */}
                  <div className={`w-8 text-center font-bold text-lg ${style.text}`}>
                    {getRankEmoji(rank)}
                  </div>

                  {/* Avatar */}
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold ${style.bg} ${style.text} border ${style.border}`}
                  >
                    {getInitials(user.name)}
                  </div>

                  {/* Name */}
                  <div className="flex-1 min-w-0">
                    <div className={`font-semibold truncate ${rank <= 3 ? "text-white" : "text-white/80"}`}>
                      {user.name}
                    </div>
                    <div className="text-xs text-white/40">
                      Träffsäkerhet: {user.accuracy}%
                    </div>
                  </div>

                  {/* Streak */}
                  {user.streak > 0 && (
                    <div className="text-sm flex items-center gap-1">
                      <span>🔥</span>
                      <span className="text-orange-400 font-medium">{user.streak}</span>
                    </div>
                  )}

                  {/* Points */}
                  <div className="text-right">
                    <div className={`font-bold text-lg ${rank === 1 ? "text-[#f5c518]" : "text-[#4dd9e0]"}`}>
                      {user.points}
                    </div>
                    <div className="text-[10px] text-white/30 uppercase tracking-wider">poäng</div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </SkyBackground>
  );
}
