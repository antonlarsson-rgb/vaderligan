"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Send, Check, MapPin, Thermometer, Droplets, Wind } from "lucide-react";
import SkyBackground from "@/components/SkyBackground";

const cities = [
  "Stockholm", "Göteborg", "Malmö", "Uppsala", "Västerås",
  "Örebro", "Linköping", "Helsingborg", "Norrköping", "Jönköping",
];

const precipOptions = ["Ingen", "Lätt regn", "Regn", "Kraftigt regn", "Snö"];

const skyOptions = [
  { value: "klart", label: "☀️ Klart" },
  { value: "halvklart", label: "🌤 Halvklart" },
  { value: "molnigt", label: "☁️ Molnigt" },
];

export default function TippaPage() {
  const [city, setCity] = useState("Stockholm");
  const [temp, setTemp] = useState(12);
  const [precip, setPrecip] = useState("Ingen");
  const [wind, setWind] = useState(5);
  const [sky, setSky] = useState("halvklart");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const skyWeather = sky === "klart" ? "sunny" : sky === "molnigt" ? "cloudy" : "default";

  return (
    <SkyBackground weather={skyWeather}>
      <div className="min-h-screen px-4 pt-28 pb-16 max-w-xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-2">
            Vecka 15
          </h1>
          <p className="text-white/50 text-center mb-10">Tippa ditt väder</p>

          <div className="space-y-6">
            {/* City selector */}
            <div className="glass-card p-5">
              <label className="flex items-center gap-2 text-sm font-medium text-white/70 mb-3">
                <MapPin className="w-4 h-4 text-[#4dd9e0]" />
                Välj stad
              </label>
              <select
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full bg-white/10 border border-white/15 rounded-xl px-4 py-3 text-white appearance-none cursor-pointer focus:outline-none focus:border-[#4dd9e0]/50 transition-colors"
              >
                {cities.map((c) => (
                  <option key={c} value={c} className="bg-[#0a1628] text-white">
                    {c}
                  </option>
                ))}
              </select>
            </div>

            {/* Temperature slider */}
            <motion.div
              className="glass-card p-5"
              whileHover={{ borderColor: "rgba(77, 217, 224, 0.2)" }}
            >
              <label className="flex items-center gap-2 text-sm font-medium text-white/70 mb-3">
                <Thermometer className="w-4 h-4 text-[#4dd9e0]" />
                Temperatur
              </label>
              <div className="flex items-center gap-4">
                <span className="text-xs text-white/40 w-10">-20°</span>
                <input
                  type="range"
                  min={-20}
                  max={35}
                  value={temp}
                  onChange={(e) => setTemp(Number(e.target.value))}
                  className="flex-1"
                />
                <span className="text-xs text-white/40 w-10 text-right">35°</span>
              </div>
              <div className="text-center mt-3">
                <motion.span
                  key={temp}
                  initial={{ scale: 1.3, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className={`text-3xl font-bold ${
                    temp < 0 ? "text-blue-400" : temp > 25 ? "text-orange-400" : "text-[#4dd9e0]"
                  }`}
                >
                  {temp}°C
                </motion.span>
              </div>
            </motion.div>

            {/* Precipitation */}
            <div className="glass-card p-5">
              <label className="flex items-center gap-2 text-sm font-medium text-white/70 mb-3">
                <Droplets className="w-4 h-4 text-[#4dd9e0]" />
                Nederbörd
              </label>
              <div className="flex flex-wrap gap-2">
                {precipOptions.map((option) => (
                  <motion.button
                    key={option}
                    onClick={() => setPrecip(option)}
                    whileTap={{ scale: 0.95 }}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all cursor-pointer ${
                      precip === option
                        ? "bg-[#4dd9e0] text-[#0a1628]"
                        : "bg-white/8 text-white/60 hover:bg-white/12"
                    }`}
                  >
                    {option}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Wind slider */}
            <motion.div
              className="glass-card p-5"
              whileHover={{ borderColor: "rgba(77, 217, 224, 0.2)" }}
            >
              <label className="flex items-center gap-2 text-sm font-medium text-white/70 mb-3">
                <Wind className="w-4 h-4 text-[#4dd9e0]" />
                Vind
              </label>
              <div className="flex items-center gap-4">
                <span className="text-xs text-white/40 w-10">0</span>
                <input
                  type="range"
                  min={0}
                  max={30}
                  value={wind}
                  onChange={(e) => setWind(Number(e.target.value))}
                  className="flex-1"
                />
                <span className="text-xs text-white/40 w-10 text-right">30</span>
              </div>
              <div className="text-center mt-3">
                <motion.span
                  key={wind}
                  initial={{ scale: 1.3, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-3xl font-bold text-[#4dd9e0]"
                >
                  {wind} m/s
                </motion.span>
              </div>
            </motion.div>

            {/* Sky condition */}
            <div className="glass-card p-5">
              <label className="text-sm font-medium text-white/70 mb-3 block">
                Sol / Moln
              </label>
              <div className="grid grid-cols-3 gap-2">
                {skyOptions.map((option) => (
                  <motion.button
                    key={option.value}
                    onClick={() => setSky(option.value)}
                    whileTap={{ scale: 0.95 }}
                    className={`py-3 rounded-xl text-sm font-medium transition-all cursor-pointer ${
                      sky === option.value
                        ? "bg-[#4dd9e0] text-[#0a1628]"
                        : "bg-white/8 text-white/60 hover:bg-white/12"
                    }`}
                  >
                    {option.label}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Submit button */}
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.button
                  key="submit"
                  onClick={handleSubmit}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full py-4 bg-[#4dd9e0] text-[#0a1628] font-bold rounded-2xl text-lg flex items-center justify-center gap-2 shadow-lg shadow-[#4dd9e0]/20 hover:shadow-[#4dd9e0]/40 transition-shadow cursor-pointer"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                >
                  <Send className="w-5 h-5" />
                  Skicka tipp
                </motion.button>
              ) : (
                <motion.div
                  key="confirmed"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="w-full py-4 bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 font-bold rounded-2xl text-lg flex items-center justify-center gap-2"
                >
                  <motion.div
                    initial={{ rotate: -90, scale: 0 }}
                    animate={{ rotate: 0, scale: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  >
                    <Check className="w-6 h-6" />
                  </motion.div>
                  Tipp skickad för {city}!
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </SkyBackground>
  );
}
