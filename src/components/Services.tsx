import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Shirt, Users, Baby } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();
  
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
      color: "bg-gradient-primary",
      images: [
        "/produtos/careca%20algodao/IMG-20250624-WA2149.jpg",
        "/produtos/polo%20algodao/IMG-20250624-WA1994.jpg",
        "/produtos/regata%20algodao/IMG-20250624-WA1957.jpg"
      ]
    },
    {
      icon: Users,
      title: "Linha feminina",
      badge: "Exclusiva",
      items: [
        "Polo feminina",
        "Modelos exclusivos para o público feminino",
        "Acabamento refinado"
      ],
      color: "bg-gradient-accent",
      images: [
        "/produtos/polo%20feminina/IMG-20250624-WA2238.jpg",
        "/produtos/polo%20feminina/IMG-20250624-WA2242.jpg",
        "/produtos/polo%20feminina/IMG-20250624-WA2247.jpg"
      ]
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
      color: "bg-primary-light",
      images: [
        "/produtos/careca%20infantil/IMG-20250708-WA2213.jpg",
        "/produtos/polo%20infantil/IMG-20250708-WA2177.jpg",
        "/produtos/regata%20infantil/IMG-20250708-WA2191.jpg"
      ]
    }
  ];

  const AutoCarousel = ({ images, categoryIndex }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      }, 3000);

      return () => clearInterval(interval);
    }, [images.length]);

    return (
      <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-in-out h-full"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="flex-shrink-0 w-full h-full">
              <img
                src={image}
                alt={`Produto ${index + 1}`}
                className="w-full h-full object-contain bg-secondary/10"
              />
            </div>
          ))}
        </div>
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? 'bg-primary' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    );
  };

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
                <AutoCarousel images={category.images} categoryIndex={index} />
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
              onClick={() => navigate('/produtos')}
              size="lg"
              variant="default"
              className="px-8 py-4 text-lg font-semibold"
            >
              Ver produtos
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