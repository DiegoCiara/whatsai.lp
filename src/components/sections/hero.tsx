import { RocketIcon } from "lucide-react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import ChatSimulator from "../chat/chat-simulator";
import React, { useRef, useEffect, useState } from "react";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile on mount and on resize
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  useEffect(() => {
    const refCurrent = containerRef.current;
    if (!refCurrent) return;

    let lastState = false;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        const isVisible = entry.intersectionRatio > 0.4;
        if (isVisible && !lastState) {
          setVisible(false);
          requestAnimationFrame(() => {
            setVisible(true);
            setAnimationKey(prev => prev + 1);
          });
        } else if (!isVisible && lastState) {
          setVisible(false);
        }
        lastState = isVisible;
      },
      { threshold: Array.from({ length: 101 }, (_, i) => i / 100) }
    );
    observer.observe(refCurrent);
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="py-10 px-4 sm:px-8 lg:px-8 bg-gradient-to-r from-fuchsia-50 to-white dark:from-fuchsia-900/10 dark:to-white/10 backdrop-blur-md rounded-lg"
      style={{
        paddingBottom: 24,
        minHeight: isMobile ? '100vh' : undefined,
        height: isMobile ? '100vh' : undefined,
      }}
    >
      <div className="max-w-6xl mx-auto text-left grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 items-center md:min-h-[60vh]">
        <div
          key={`hero-content-${animationKey}`}
          className={`flex flex-col justify-start items-start card-animate w-full ${
            visible ? "opacity-0 translate-y-8 animate-fadein" : "opacity-0"
          }`}
          style={{
            animationDelay: visible ? "0s" : undefined,
            animationFillMode: visible ? "forwards" : undefined,
            animationDuration: isMobile ? undefined : "0.3s",
          }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 typewriter-effect leading-tight">
            <span className="typewriter-line block" style={{ animationDelay: '0s' }}>Transforme o seu</span>
            <span className="typewriter-line block" style={{ animationDelay: '0.8s' }}>WhatsApp Business</span>
            <span className="typewriter-line-end block" style={{ animationDelay: '1.6s' }}>
              com o <span className="text-fuchsia-900">Poder da IA</span>
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-6 mt-4 delayed-appear">
            Integre poderosas capacidades de IA ao seu WhatsApp em apenas dois cliques. Automatize respostas, analise conversas e aumente o engajamento dos clientes instantaneamente.
          </p>
          <div className="flex flex-col self-baseline sm:self-auto sm:flex-row sm:w-full sm:items-center gap-3 delayed-appear">
            <Button className="bg-fuchsia-900 text-white hover:bg-fuchsia-700 transition-colors w-full sm:w-auto">
              Comece Agora
            </Button>
            <Badge className="bg-fuchsia-100 text-fuchsia-900 animate-bounce w-full w-auto flex items-center justify-center">
              <RocketIcon className="inline h-4 w-4 mr-1" />
              Aprenda
            </Badge>
          </div>
        </div>
        {/* Desktop ChatSimulator */}
        {!isMobile && (
          <div className="w-full flex justify-center md:justify-end items-center">
            <ChatSimulator />
          </div>
        )}
      </div>
    </section>
  );
}