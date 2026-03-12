import SectionReveal from "./SectionReveal";
import { Mail, Phone } from "lucide-react";

const contacts = [
  { name: "Ab Emam", role: "Founder & Division President", email: "ab@wdg.co", phone: "202.997.2678" },
  { name: "Homiera Emam", role: "Director, Growth & Public Affairs", email: "homiera@wdg.co", phone: "202.368.0669" },
];

export default function ContactSection() {
  return (
    <section id="contact" className="relative py-24 md:py-32" style={{ background: '#FFCC00' }}>
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          <SectionReveal>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold text-gray-900 leading-none">
              Thank you.
            </h2>
          </SectionReveal>

          <SectionReveal delay={0.15}>
            <div className="space-y-8">
              {contacts.map((c, i) => (
                <div key={i}>
                  <p className="text-lg font-bold text-gray-900">{c.name}</p>
                  <p className="text-sm text-gray-900/60 mt-0.5">{c.role}</p>
                  <div className="flex flex-wrap items-center gap-4 mt-2">
                    <a href={`mailto:${c.email}`} className="flex items-center gap-1.5 text-sm text-gray-900/80 hover:text-gray-900 transition-colors">
                      <Mail className="w-3.5 h-3.5" />
                      {c.email}
                    </a>
                    {c.phone && (
                      <a href={`tel:${c.phone.replace(/\./g, '')}`} className="flex items-center gap-1.5 text-sm text-gray-900/80 hover:text-gray-900 transition-colors">
                        <Phone className="w-3.5 h-3.5" />
                        {c.phone}
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </SectionReveal>
        </div>

        <div className="mt-20 pt-6 border-t border-gray-900/20 flex flex-wrap items-center justify-between gap-4">
          <p className="text-xs text-gray-900/40">All Content © 2026</p>
          <p className="text-xs text-gray-900/40">AI Capabilities Across WDG + the Agital Company</p>
          <img
            src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b2cf11c7b190e6231185ca/be4742ef5_logoblacklarge2x.png"
            alt="WDG an Agital Company"
            className="h-8"
          />
        </div>
      </div>
    </section>
  );
}