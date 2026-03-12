import SectionReveal from "./SectionReveal";

export default function PerspectiveSection() {
  return (
    <section id="perspective" className="relative py-24 md:py-36 bg-white">
      {/* Yellow accent block */}
      <div className="absolute left-0 top-12 w-16 md:w-24 h-48" style={{ background: '#FFCC00' }} />

      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <SectionReveal>
          <p className="text-sm tracking-[0.25em] uppercase font-medium mb-4" style={{ color: '#FFCC00' }}>
            Our Perspective
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
            AI is most powerful when it elevates the systems institutions already trust.
          </h2>
        </SectionReveal>

        <SectionReveal delay={0.15}>
          <div className="mt-8 md:mt-12 space-y-5 md:space-y-6 text-base md:text-lg text-gray-600 leading-relaxed">
            <p>
              We focus on meaningful applications that transform how people access
              information, steward content, and navigate complex digital ecosystems —
              unlocking greater clarity, efficiency, and resilience without introducing
              unnecessary risk.
            </p>
            <p>
              To us, AI is not a standalone innovation. It is part of a larger movement to
              modernize and future-proof institutional digital infrastructure.
            </p>
            <p>
              Our role is to help organizations harness this moment thoughtfully, building
              intelligent systems that are adaptive, sustainable, and positioned to serve
              their missions well into the future.
            </p>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}