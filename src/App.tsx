import { NavBar } from './components/navbar/navbar';
import { Hero } from './components/sections/hero';
import { WhatsAIIntegration } from './components/integracao/whatsai-integration';
import { WhyChooseWhatsAI } from './components/why-choose/why-choose';
import { Planos } from './components/planos/planos';
import AnimatedSection from './components/AnimatedSection';

export default function App() {
  return (
    <>
      <NavBar />
      <Hero /> {/* Hero geralmente não precisa de animação no scroll */}

      <AnimatedSection type="zoomIn" delay={0.1}>
        <WhatsAIIntegration />
      </AnimatedSection>

      <AnimatedSection type="fadeInUp" delay={0.2}>
        <WhyChooseWhatsAI />
      </AnimatedSection>

      <AnimatedSection type="zoomIn" delay={0.3}>
        <Planos />
      </AnimatedSection>
      <footer className="bg-gray-800 text-white py-4 text-center">
        <p>&copy; 2025 Endurance Technologies LTDA. All rights reserved.</p>
      </footer>
    </>
  );
}