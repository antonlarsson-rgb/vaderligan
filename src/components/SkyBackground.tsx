"use client";

import { motion } from "framer-motion";

type WeatherState = "sunny" | "cloudy" | "rainy" | "snow" | "default";

interface SkyBackgroundProps {
  weather?: WeatherState;
  children: React.ReactNode;
}

function RainDrops() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: 40 }).map((_, i) => (
        <div
          key={i}
          className="absolute w-[1px] bg-blue-300/40"
          style={{
            left: `${Math.random() * 100}%`,
            height: `${15 + Math.random() * 25}px`,
            animationName: "rain-fall",
            animationDuration: `${0.6 + Math.random() * 0.8}s`,
            animationDelay: `${Math.random() * 2}s`,
            animationIterationCount: "infinite",
            animationTimingFunction: "linear",
          }}
        />
      ))}
    </div>
  );
}

function SnowFlakes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: 30 }).map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white/60"
          style={{
            left: `${Math.random() * 100}%`,
            width: `${3 + Math.random() * 5}px`,
            height: `${3 + Math.random() * 5}px`,
            animationName: "snow-fall",
            animationDuration: `${3 + Math.random() * 5}s`,
            animationDelay: `${Math.random() * 5}s`,
            animationIterationCount: "infinite",
            animationTimingFunction: "linear",
          }}
        />
      ))}
    </div>
  );
}

function Clouds() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white/5"
          style={{
            top: `${10 + i * 15}%`,
            width: `${150 + i * 50}px`,
            height: `${60 + i * 20}px`,
            animationName: "cloud-drift",
            animationDuration: `${20 + i * 10}s`,
            animationDelay: `${i * 7}s`,
            animationIterationCount: "infinite",
            animationTimingFunction: "linear",
            filter: "blur(20px)",
          }}
        />
      ))}
    </div>
  );
}

export default function SkyBackground({
  weather = "default",
  children,
}: SkyBackgroundProps) {
  const skyClass = {
    sunny: "sky-sunny",
    cloudy: "sky-cloudy",
    rainy: "sky-rainy",
    snow: "sky-snow",
    default: "sky-default",
  }[weather];

  return (
    <motion.div
      className={`relative min-h-screen ${skyClass}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {weather === "rainy" && <RainDrops />}
      {weather === "snow" && <SnowFlakes />}
      {(weather === "cloudy" || weather === "default") && <Clouds />}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
