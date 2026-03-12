import { motion } from "framer-motion";
import SectionReveal from "./SectionReveal";

const chapters = [
  { num: "01", title: "Platform & CMS Capabilities" },
  { num: "02", title: "Search & Knowledge Access" },
  { num: "03", title: "Marketing, Analytics & Audience Intelligence" },
  { num: "04", title: "Strategy & Implementation" },
];

export default function ChapterDivider({ activeIndex, id }) {
  return (
    <section id={id} className="relative py-24 md:py-32 overflow-hidden" style={{ background: '#1a1a1a' }}>
      {/* Yellow left accent */}
      <div className="absolute left-0 top-0 w-1 h-full" style={{ background: '#FFCC00' }} />

      {/* Subtle background circle */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-5" style={{ background: 'radial-gradient(circle, #FFCC00, transparent)' }} />

      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
        <div className="space-y-5 md:space-y-6">
          {chapters.map((ch, i) => {
            const isActive = i === activeIndex;
            return (
              <SectionReveal key={i} delay={i * 0.1}>
                <div className="flex items-center gap-4 md:gap-6">
                  <span
                    className="text-base md:text-lg font-bold w-8 md:w-10 flex-shrink-0 transition-colors duration-500"
                    style={{ color: isActive ? '#FFCC00' : 'rgba(255,255,255,0.2)' }}
                  >
                    {ch.num}
                  </span>
                  <span
                    className="text-base sm:text-xl md:text-2xl font-semibold transition-colors duration-500 leading-snug"
                    style={{ color: isActive ? '#FFCC00' : 'rgba(255,255,255,0.2)' }}
                  >
                    {ch.title}
                  </span>
                  {isActive && (
                    <motion.div
                      layoutId="chapter-indicator"
                      className="h-0.5 flex-1 ml-2 md:ml-4 hidden sm:block"
                      style={{ background: '#FFCC00' }}
                    />
                  )}
                </div>
              </SectionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}