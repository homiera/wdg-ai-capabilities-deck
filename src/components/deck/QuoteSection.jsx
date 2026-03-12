import SectionReveal from "./SectionReveal";

export default function QuoteSection() {
  return (
    <section className="relative py-24 md:py-36 overflow-hidden" style={{ background: '#f0efed' }}>
      {/* Background circles */}
      <div className="absolute right-0 top-0 w-[600px] h-[600px] rounded-full opacity-[0.04]"
        style={{ background: 'radial-gradient(circle, #1a1a1a, transparent)' }}
      />

      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <SectionReveal>
          <div className="flex items-start gap-4 md:gap-6">
            <span className="text-5xl md:text-8xl font-bold leading-none -mt-1 md:-mt-2 flex-shrink-0" style={{ color: '#FFCC00' }}>
              "
            </span>
            <div>
              <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 leading-snug">
                AI is one part of a broader shift in how institutions manage and deliver information.
              </p>
              <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-2xl">
                Our role is to help organizations apply these capabilities thoughtfully,
                strengthening the systems they already rely on and building digital
                infrastructure that supports their mission well into the future.
              </p>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}