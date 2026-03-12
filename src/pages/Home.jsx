import DeckNav from "../components/deck/DeckNav";
import HeroSection from "../components/deck/HeroSection";
import PerspectiveSection from "../components/deck/PerspectiveSection";
import SupportSection from "../components/deck/SupportSection";
import ChapterDivider from "../components/deck/ChapterDivider";
import CapabilityCard from "../components/deck/CapabilityCard";
import QuoteSection from "../components/deck/QuoteSection";
import ContactSection from "../components/deck/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <DeckNav />
      <HeroSection />
      <PerspectiveSection />
      <SupportSection />

      {/* Chapter 01 - Platform & CMS */}
      <ChapterDivider activeIndex={0} id="ch1" />
      <CapabilityCard
        id="cms"
        title="AI Within CMS Platforms"
        intro="We integrate AI capabilities directly into Drupal, WordPress, and enterprise CMS environments to support distributed editorial teams. These tools work within existing publishing workflows, helping teams manage large and complex content ecosystems more effectively."
        bullets={[
          "Automated tagging and metadata generation",
          "Content summaries and structural recommendations",
          "Accessibility and readability assistance",
          "Editorial workflow and governance support",
        ]}
        footer="This reduces manual effort while helping teams maintain consistent, well-structured content."
      />
      <CapabilityCard
        id="content-intel"
        title="Content Intelligence & Modernization"
        intro="AI provides new visibility into large and decentralized content ecosystems, helping institutions better understand what exists and what needs improvement."
        bullets={[
          "Content inventories and audits",
          "Migration planning and restructuring",
          "Identification of outdated or duplicated content",
          "Information architecture improvements",
        ]}
        footer="This allows organizations to modernize digital platforms more efficiently and with greater clarity."
        reverse
      />

      {/* Chapter 02 - Search */}
      <ChapterDivider activeIndex={1} id="ch2" />
      <CapabilityCard
        id="search"
        title="AI‑Enhanced Search"
        intro="Search is often the primary way users navigate large institutional websites. AI makes search more accurate, more intuitive, and more useful."
        bullets={[
          "Understand user intent, not just keywords",
          "Surface relevant content across departments and sites",
          "Provide clearer pathways to academic, research, and administrative resources",
          "Improve continuously based on real user behavior",
        ]}
        footer="This improves discovery for students, faculty, researchers, staff, and the public."
      />
      <CapabilityCard
        id="assistants"
        title="Digital Assistants & Knowledge Interfaces"
        intro="AI can help institutions make their internal and public knowledge more accessible. We support the design and implementation of AI-assisted knowledge interfaces that help users navigate trusted institutional content."
        bullets={[
          "Student services and self-service tools",
          "Internal operations and knowledge base access",
          "Grounded in approved content and institutional governance",
        ]}
        footer="The goal is to expand access to information without sacrificing accuracy or control."
        reverse
      />

      {/* Chapter 03 - Marketing */}
      <ChapterDivider activeIndex={2} id="ch3" />
      <CapabilityCard
        id="marketing"
        title="AI‑Supported Marketing & SEO"
        intro="We apply AI to help organizations better understand their audiences and strengthen digital engagement. These capabilities support recruitment, visibility, and long-term growth."
        bullets={[
          "Search optimization and content gap analysis",
          "Audience segmentation and behavioral insight",
          "AI-assisted content planning and optimization",
          "Campaign performance analysis and reporting",
        ]}
        footer="This helps institutions ensure their digital ecosystem supports their mission and strategic goals."
      />
      <CapabilityCard
        id="analytics"
        title="Analytics & Operational Insight"
        intro="AI enables teams to better understand how their digital platforms are performing and where improvements will have the greatest impact."
        bullets={[
          "Automated reporting and performance summaries",
          "Identification of user friction and navigation challenges",
          "Behavioral analysis across digital properties",
          "Faster insight generation for decision-making",
        ]}
        footer="This helps teams prioritize effort and operate more efficiently."
        reverse
      />

      {/* Chapter 04 - Strategy */}
      <ChapterDivider activeIndex={3} id="ch4" />
      <CapabilityCard
        id="strategy"
        title="Our Approach"
        intro="We deploy AI with conviction and clarity of purpose — not as experimentation, but as strategic infrastructure."
        bullets={[
          "Integrates with existing infrastructure",
          "Supports accessibility and compliance standards",
          "Preserves institutional ownership of systems and data",
          "Strengthens internal capability rather than creating dependency",
        ]}
        footer="The result is intelligent infrastructure that is resilient, scalable, and designed to lead — not simply adapt — in a rapidly evolving digital landscape."
      />
      <CapabilityCard
        id="engage"
        title="How We Engage"
        intro="We meet organizations wherever they are: at the spark of curiosity or at the edge of transformation."
        bullets={[
          "Identifying high-impact opportunities and piloting new capabilities",
          "Reimagining CMS, search, and broader digital ecosystems",
          "Turning vision into measurable progress",
        ]}
        footer="Our focus is not just implementation, it's evolution. We work alongside institutions to unlock what's possible and build digital foundations that expand capacity, elevate mission delivery, and shape what comes next."
        reverse
      />

      <QuoteSection />
      <ContactSection />
    </div>
  );
}