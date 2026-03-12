import SectionReveal from "./SectionReveal";
import { Monitor, Search, BarChart3, Settings } from "lucide-react";

const items = [
  { icon: Monitor, text: "Integrating AI capabilities into Drupal, WordPress, and enterprise CMS environments" },
  { icon: Search, text: "Improving search relevance and information discovery across decentralized sites" },
  { icon: Settings, text: "Enhancing editorial workflows and content governance processes" },
  { icon: BarChart3, text: "Accelerating content audits, migration planning, and modernization initiatives" },
  { icon: BarChart3, text: "Enabling more intelligent marketing, analytics, and audience insight" },
];

export default function SupportSection() {
  return (
    <section className="py-24 md:py-36" style={{ background: '#f8f8f6' }}>
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <SectionReveal>
          <p className="text-sm tracking-[0.25em] uppercase font-medium mb-4" style={{ color: '#FFCC00' }}>
            How We Support You
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight max-w-2xl">
            We apply AI across the digital ecosystem, strengthening both platform
            infrastructure and audience engagement.
          </h2>
        </SectionReveal>

        <div className="mt-16 grid gap-6">
          {items.map((item, i) => (
            <SectionReveal key={i} delay={i * 0.08}>
              <div className="flex items-start gap-5 group">
                <div
                  className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center mt-0.5 transition-colors duration-300 group-hover:scale-105"
                  style={{ background: '#FFCC00' }}
                >
                  <item.icon className="w-5 h-5 text-gray-900" />
                </div>
                <p className="text-lg text-gray-700 leading-relaxed pt-1.5">{item.text}</p>
              </div>
            </SectionReveal>
          ))}
        </div>

        <SectionReveal delay={0.4}>
          <p className="mt-12 text-base text-gray-500 leading-relaxed max-w-3xl">
            Our approach reinforces institutional systems while preserving editorial
            control, data ownership, and long-term sustainability.
          </p>
        </SectionReveal>
      </div>
    </section>
  );
}