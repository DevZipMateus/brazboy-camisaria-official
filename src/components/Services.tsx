import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shirt, Users, Baby } from "lucide-react";

const Services = () => {
  const categories = [
    {
      icon: Shirt,
      title: "Linha masculina",
      badge: "Mais vendida",
      items: [
        "Careca lisa, floral e listrada",
        "Polo de piquet com e sem bolso", 
        "Polo lisa, floral e listrada",
        "Regata lisa, floral e listrada"
      ],
      color: "bg-gradient-primary"
    },
    {
      icon: Users,
      title: "Linha feminina",
      badge: "Exclusiva",
      items: [
        "Polo feminina",
        "Modelos exclusivos para o público feminino",
        "Acabamento refinado",
        "Variadas opções de estampas"
      ],
      color: "bg-gradient-accent"
    },
    {
      icon: Baby,
      title: "Linha infantil",
      badge: "Conforto",
      items: [
        "Careca infantil",
        "Polo infantil",
        "Regata infantil",
        "Materiais adequados para crianças"
      ],
      color: "bg-primary-light"
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Nossos produtos
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Oferecemos uma linha completa de camisas para atender diferentes públicos e necessidades, 
            sempre mantendo nosso padrão de qualidade e elegância.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {categories.map((category, index) => (
            <Card 
              key={index}
              className="relative overflow-hidden border-0 shadow-elegant hover:shadow-glow transition-all duration-300 hover:-translate-y-2 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`absolute top-0 right-0 w-32 h-32 ${category.color} opacity-10 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500`}></div>
              
              <CardHeader className="text-center pb-4 relative z-10">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full mb-4 shadow-glow mx-auto">
                  <category.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <div className="flex items-center justify-center gap-3 mb-2">
                  <CardTitle className="text-xl font-semibold text-foreground">
                    {category.title}
                  </CardTitle>
                  <Badge variant="secondary" className="bg-accent text-accent-foreground">
                    {category.badge}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="relative z-10">
                <ul className="space-y-3">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center bg-secondary/20 rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Pronto para conhecer nossa linha completa?
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Entre em contato conosco e descubra como podemos atender às necessidades do seu negócio 
            com produtos de qualidade superior.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => window.open('https://wa.me/5581994770239', '_blank')}
              size="lg"
              variant="default"
              className="px-8 py-4 text-lg font-semibold"
            >
              Solicitar catálogo
            </Button>
            <Button
              onClick={() => window.open('https://wa.me/5581994770239', '_blank')}
              variant="outline"
              size="lg"
              className="px-8 py-4 text-lg font-semibold"
            >
              Falar com vendedor
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;