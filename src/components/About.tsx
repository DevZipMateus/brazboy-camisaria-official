import { Card, CardContent } from "@/components/ui/card";
import { Target, Users, Award, Clock } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Nossa missão",
      description: "Produzir camisas que transmitam conforto, elegância e durabilidade, atendendo às necessidades de lojistas e revendedores"
    },
    {
      icon: Award,
      title: "Qualidade",
      description: "Comprometimento com a excelência em cada peça produzida, utilizando materiais selecionados e técnicas aprimoradas"
    },
    {
      icon: Users,
      title: "Parcerias sólidas",
      description: "Construímos relacionamentos duradouros com nossos clientes e parceiros lojistas baseados na confiança mútua"
    },
    {
      icon: Clock,
      title: "Tradição",
      description: "Desde o início, buscamos construir uma marca sólida, reconhecida pelo compromisso e pela qualidade superior"
    }
  ];

  return (
    <section id="about" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Sobre nós
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A Braz Boy Camisaria surgiu com o propósito de oferecer camisas de excelência, 
            unindo estilo, qualidade e sofisticação. Desde o início, buscamos construir uma 
            marca sólida, reconhecida pelo compromisso com nossos clientes e parceiros lojistas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <Card 
              key={index} 
              className="border-0 shadow-elegant hover:shadow-glow transition-all duration-300 hover:-translate-y-2 bg-background/80 backdrop-blur-sm"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full mb-4 shadow-glow">
                  <value.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-gradient-primary rounded-2xl p-8 md:p-12 text-center shadow-elegant">
          <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
            Estilo clássico e detalhista
          </h3>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
            Nossa abordagem combina técnicas tradicionais com um olhar moderno, 
            criando peças que refletem sofisticação e atenção aos detalhes em cada acabamento.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;