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
      title: "Quick Integration",
      description: "Connect your WhatsApp account with our full interface tools for coding or technical knowledge required."
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Smart Responses",
      description: "Our AI learns from your conversation style and generates responses tailored to your contacts."
    },
    {
      icon: <BarChart2 className="w-6 h-6" />,
      title: "Analytics Dashboard",
      description: "Get insights on your conversations, response times, and engagement levels through our intuitive interface."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "24/7 Availability",
      description: "Let AI handle inquiries even when you're asleep, ensuring you never miss an important message."
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Privacy Focused",
      description: "Your data remains secure and private. We don't store or share your conversation content with third parties."
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Customizable",
      description: "Tweak the AI's behavior to match your specific needs and communication style with easy customization options."
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
            Why Choose <span className="text-primary">WhatsAI</span>?
          </h2>
          <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
            Our platform offers premium integration between WhatsApp and advanced AI capabilities, 
            bringing sophisticated customization and intelligence to your conversations.
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