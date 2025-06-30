import { Check, X, Shield } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const PlanCard = ({
  title,
  price,
  description,
  features,
  highlight = false,
}: {
  title: string;
  price: string;
  description: string;
  features: string[];
  highlight?: boolean;
}) => {
  // Mapeamento de features para verificação
  const featureChecks = {
    "Respostas inteligentes": features.includes("Respostas inteligentes"),
    "Integrações de API": features.some(f => f.includes("integrações de API")),
    "Tokens de IA": features.some(f => f.includes("tokens de IA")),
    "Análise básica de interações": features.includes("Análise básica de interações"),
    "Análise avançada de interações": features.includes("Análise avançada de interações"),
    "Customização de IA": features.includes("Customização de IA"),
  };

  // Encontra a descrição exata das features com quantidade
  const apiText = features.find(f => f.includes("integrações de API")) || "Integrações de API";
  const tokensText = features.find(f => f.includes("tokens de IA")) || "Tokens de IA";

  return (
    <div className="relative">
      {highlight && (
        <div className="absolute -top-2 -right-2 bg-fuchsia-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
          POPULAR
        </div>
      )}
      <Card className={`w-full max-w-sm mx-auto flex flex-col justify-between ${highlight ? 'border-2 border-fuchsia-700' : 'border border-gray-200'} bg-white shadow-md`}>
        <CardHeader className="items-center text-center">
          <CardTitle className="text-xl text-fuchsia-900">{title}</CardTitle>
          <CardDescription className="text-gray-600">{description}</CardDescription>
          <div className="mt-4 flex flex-col items-center">
            <div className="flex items-end">
              <span className="text-3xl font-bold text-fuchsia-900">{price}</span>
              <span className="text-sm text-gray-400 ml-2 mb-1" style={{ position: 'relative', top: '0.3em' }}>/mês</span>
            </div>
          </div>
        </CardHeader>
        <CardContent className="flex flex-col flex-1 justify-between items-center text-center">
          <ul className="space-y-2 mb-6 w-full text-left">
            {/* Respostas inteligentes */}
            <li className="flex items-center">
              {featureChecks["Respostas inteligentes"] ? (
                <Check className="h-4 w-4 mr-2 text-fuchsia-700" />
              ) : (
                <X className="h-4 w-4 mr-2 text-gray-300" />
              )}
              <span className="text-gray-700">Respostas inteligentes</span>
            </li>
            
            {/* Integrações de API com subitem */}
            <li className="flex flex-col">
              <div className="flex items-center">
                {featureChecks["Integrações de API"] ? (
                  <Check className="h-4 w-4 mr-2 text-fuchsia-700" />
                ) : (
                  <X className="h-4 w-4 mr-2 text-gray-300" />
                )}
                <span className="text-gray-700">{apiText}</span>
              </div>
              <div className="flex items-center mt-1">
                {featureChecks["Tokens de IA"] ? (
                  <Check className="h-4 w-4 mr-2 text-fuchsia-700" />
                ) : (
                  <X className="h-4 w-4 mr-2 text-gray-300" />
                )}
                <span className="text-gray-700">{tokensText}</span>
              </div>
            </li>
            
            {/* Análise básica */}
            <li className="flex items-center">
              {featureChecks["Análise básica de interações"] ? (
                <Check className="h-4 w-4 mr-2 text-fuchsia-700" />
              ) : (
                <X className="h-4 w-4 mr-2 text-gray-300" />
              )}
              <span className="text-gray-700">Análise básica de interações</span>
            </li>
            
            {/* Análise avançada */}
            <li className="flex items-center">
              {featureChecks["Análise avançada de interações"] ? (
                <Check className="h-4 w-4 mr-2 text-fuchsia-700" />
              ) : (
                <X className="h-4 w-4 mr-2 text-gray-300" />
              )}
              <span className="text-gray-700">Análise avançada de interações</span>
            </li>
            
            {/* Customização */}
            <li className="flex items-center">
              {featureChecks["Customização de IA"] ? (
                <Check className="h-4 w-4 mr-2 text-fuchsia-700" />
              ) : (
                <X className="h-4 w-4 mr-2 text-gray-300" />
              )}
              <span className="text-gray-700">Customização de IA</span>
            </li>
          </ul>
          <Button className="w-full mt-auto bg-fuchsia-900 text-white hover:bg-fuchsia-700 transition-colors">
            Escolher plano
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export const Planos = () => {
  const plans = [
    {
      title: "Standard",
      price: "R$99",
      description: "Perfeito para iniciantes e pequenas empresas que querem começar",
      features: [
        "Respostas inteligentes",
        "5 integrações de API",
        "Até 100 mi tokens de IA",
      ],
    },
    {
      title: "Pro",
      price: "R$140",
      description: "Ideal para profissionais e empresas em crescimento",
      features: [
        "Respostas inteligentes",
        "15 integrações de API",
        "Até 200 mi tokens de IA",
        "Análise básica de interações",
      ],
    },
    {
      title: "Enterprise",
      price: "R$250",
      description: "Ideal para negócios maiores com necessidades avançadas",
      features: [
        "Respostas inteligentes",
        "25 integrações de API",
        "Até 500 mi tokens de IA",
        "Análise básica de interações",
        "Análise avançada de interações",
        "Customização de IA",
      ],
    },
  ];

  return (
    <section id="planos">
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto px-0 sm:px-0">
          <div className="text-center mb-12">
            <h2 className="text-fuchsia-900">
              Conecte seu número e escolha seu plano
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Escolha o plano perfeito para suas necessidades e comece a aproveitar os benefícios da IA no WhatsApp.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            {plans.map((plan, index) => (
              <PlanCard
                key={index}
                title={plan.title}
                price={plan.price}
                description={plan.description}
                features={plan.features}
                highlight={index === 1} // Destaca o plano Pro
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};