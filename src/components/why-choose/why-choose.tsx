import {
  Zap,
  MessageSquare,
  BarChart2,
  Clock,
  Lock,
  Settings
} from 'lucide-react';
import { Card } from '@/components/ui/card';

export function WhyChooseWhatsAI() {
  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Integração Rápida",
      description: "Conecte sua conta do WhatsApp com nossas ferramentas de interface completa sem necessidade de conhecimentos técnicos ou de programação."
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Respostas Inteligentes",
      description: "Nossa IA aprende com seu estilo de conversa e gera respostas personalizadas para seus contatos."
    },
    {
      icon: <BarChart2 className="w-6 h-6" />,
      title: "Painel de Análises",
      description: "Obtenha insights sobre suas conversas, tempos de resposta e níveis de engajamento através de nossa interface intuitiva."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Disponibilidade 24/7",
      description: "Deixe a IA lidar com consultas mesmo enquanto você dorme, garantindo que você nunca perca uma mensagem importante."
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Foco em Privacidade",
      description: "Seus dados permanecem seguros e privados. Não armazenamos ou compartilhamos o conteúdo de suas conversas com terceiros."
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Personalizável",
      description: "Ajuste o comportamento da IA para atender às suas necessidades específicas e estilo de comunicação com opções fáceis de personalização."
    }
  ];

  return (
    <section
      id="why-choose-whatsai"
      className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-6xl mx-auto px-0 sm:px-0">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
            Por que escolher o <span className="text-primary">WhatsAI</span>?
          </h2>
          <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
            Nossa plataforma oferece integração premium entre WhatsApp e capacidades avançadas de IA,
            trazendo sofisticação, personalização e inteligência para suas conversas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 justify-center">
          {features.map((feature, index) => (
            <Card key={index} className="max-w-[294px] mx-auto p-6 hover:shadow-lg transition-shadow">
              <div className="flex flex-col space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="p-2 rounded-lg bg-fuchsia-100 text-fuchsia-900 w-10 h-10 flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                </div>
                <p className="text-gray-500 dark:text-gray-400">
                  {feature.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}