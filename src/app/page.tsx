"use client";

import { motion } from "framer-motion";
import { Cloud, Trophy, Users, CalendarDays } from "lucide-react";
import Link from "next/link";
import SkyBackground from "@/components/SkyBackground";

const features = [
  { icon: CalendarDays, title: "Tippa veckovis", desc: "Gör din väderprognos varje vecka" },
  { icon: Trophy, title: "Följ ledaren", desc: "Se vem som har bäst träffsäkerhet" },
  { icon: Users, title: "Tävla med vänner", desc: "Skapa ligor och utmana varandra" },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function Home() {
  return (
    <SkyBackground weather="sunny">
      <div className="min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-16">
        <motion.div
          className="text-center max-w-2xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Animated cloud icon */}
          <motion.div
            variants={itemVariants}
            className="mb-6"
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="inline-block"
            >
              <Cloud className="w-16 h-16 text-[#4dd9e0] mx-auto" strokeWidth={1.5} />
            </motion.div>
          </motion.div>

          {/* Title */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-4"
          >
            <span className="gold-shimmer">Väder</span>
            <span className="text-white">ligan</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-white/70 mb-10 max-w-md mx-auto"
          >
            Tävla om att förutspå vädret i Sverige
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link href="/tippa">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-[#4dd9e0] text-[#0a1628] font-bold rounded-full text-lg shadow-lg shadow-[#4dd9e0]/20 hover:shadow-[#4dd9e0]/40 transition-shadow cursor-pointer"
              >
                Gå med
              </motion.button>
            </Link>
            <Link href="/liga">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/10 text-white font-bold rounded-full text-lg border border-white/20 hover:bg-white/15 transition-colors cursor-pointer"
              >
                Logga in
              </motion.button>
            </Link>
          </motion.div>

          {/* Features */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto"
          >
            {features.map(({ icon: Icon, title, desc }) => (
              <motion.div
                key={title}
                whileHover={{ scale: 1.03, y: -4 }}
                className="glass-card glass-card-hover p-6 text-center transition-all"
              >
                <Icon className="w-8 h-8 text-[#4dd9e0] mx-auto mb-3" strokeWidth={1.5} />
                <h3 className="font-semibold text-white mb-1">{title}</h3>
                <p className="text-sm text-white/50">{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </SkyBackground>
  );
}
