import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-end pb-20 md:pb-28 overflow-hidden" style={{ background: '#1a1a1a' }}>
      {/* Animated circuit pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M 0 50 H 40 M 60 50 H 100 M 50 0 V 40 M 50 60 V 100" stroke="#FFCC00" strokeWidth="0.5" fill="none"/>
              <circle cx="50" cy="50" r="3" fill="none" stroke="#FFCC00" strokeWidth="0.5"/>
              <circle cx="0" cy="50" r="2" fill="#FFCC00"/>
              <circle cx="100" cy="50" r="2" fill="#FFCC00"/>
              <circle cx="50" cy="0" r="2" fill="#FFCC00"/>
              <circle cx="50" cy="100" r="2" fill="#FFCC00"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)"/>
        </svg>
      </div>

      {/* Yellow accent line left */}
      <div className="absolute left-0 top-0 w-1 h-full" style={{ background: '#FFCC00' }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 w-full">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-sm tracking-[0.3em] uppercase mb-6"
          style={{ color: '#FFCC00' }}
        >
          WDG + Agital
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight max-w-4xl"
        >
          AI Capabilities
          <br />
          <span className="text-white/60">Across WDG + Agital</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-8 text-lg md:text-xl text-white/50 max-w-2xl leading-relaxed"
        >
          Helping institutions apply AI to strengthen digital platforms,
          content ecosystems, and audience engagement.
        </motion.p>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-12 h-px w-full origin-left"
          style={{ background: 'linear-gradient(to right, #FFCC00, transparent)' }}
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-4 text-xs text-white/30 tracking-wider"
        >
          Prepared by WDG, an Agital Company
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-1.5 rounded-full bg-white/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}