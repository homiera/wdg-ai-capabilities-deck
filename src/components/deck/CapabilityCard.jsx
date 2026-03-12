import SectionReveal from "./SectionReveal";

export default function CapabilityCard({ id, title, intro, bullets, footer, reverse = false }) {
  return (
    <section id={id} className="relative overflow-hidden" style={{ background: '#FFCC00' }}>
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-16 md:py-28">
        <div className="grid md:grid-cols-2 gap-10 md:gap-20 items-start">
          {/* Title side */}
          <SectionReveal>
            <div className={reverse ? 'md:order-2' : 'md:order-1'}>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                {title}
              </h2>
            </div>
          </SectionReveal>

          {/* Content side */}
          <SectionReveal delay={0.15}>
            <div className={reverse ? 'md:order-1' : 'md:order-2'}>
              <p className="text-base md:text-lg text-gray-900/80 leading-relaxed mb-6 md:mb-8">
                {intro}
              </p>

              {bullets && (
                <ul className="space-y-3 md:space-y-4">
                  {bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-gray-900 mt-2.5 flex-shrink-0" />
                      <span className="text-sm md:text-base text-gray-900/80 leading-relaxed">{b}</span>
                    </li>
                  ))}
                </ul>
              )}

              {footer && (
                <p className="mt-6 md:mt-8 text-sm md:text-base text-gray-900/60 leading-relaxed">
                  {footer}
                </p>
              )}
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}