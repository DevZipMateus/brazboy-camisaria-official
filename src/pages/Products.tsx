import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shirt, Users, Baby, Star, Phone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Products = () => {
  const productCategories = [
    {
      id: "masculina",
      icon: Shirt,
      title: "Linha masculina",
      badge: "Mais vendida",
      description: "Nossa linha masculina oferece variedade e qualidade em cada peça",
      products: [
        {
          name: "Careca lisa",
          description: "Camiseta básica de alta qualidade",
          features: ["100% algodão", "Modelagem confortável", "Durabilidade superior"]
        },
        {
          name: "Careca floral", 
          description: "Estampas florais modernas e elegantes",
          features: ["Estampas exclusivas", "Tecido premium", "Design contemporâneo"]
        },
        {
          name: "Careca listrada",
          description: "Listras clássicas que nunca saem de moda",
          features: ["Listras bem definidas", "Corte perfeito", "Versatilidade no uso"]
        },
        {
          name: "Polo de piquet com bolso",
          description: "Elegância e praticidade em uma peça",
          features: ["Piquet de qualidade", "Bolso funcional", "Acabamento refinado"]
        },
        {
          name: "Polo de piquet sem bolso",
          description: "Design minimalista e sofisticado",
          features: ["Visual clean", "Modelagem ajustada", "Conforto garantido"]
        },
        {
          name: "Polo lisa",
          description: "Versatilidade para qualquer ocasião",
          features: ["Cores variadas", "Tecido respirável", "Durabilidade testada"]
        },
        {
          name: "Polo floral",
          description: "Estampas que destacam personalidade",
          features: ["Padrões únicos", "Qualidade superior", "Estilo diferenciado"]
        },
        {
          name: "Polo listrada",
          description: "Clássico renovado com qualidade premium",
          features: ["Listras harmoniosas", "Corte moderno", "Conforto absoluto"]
        },
        {
          name: "Regata lisa",
          description: "Liberdade e conforto para o verão",
          features: ["Tecido leve", "Corte anatômico", "Secagem rápida"]
        },
        {
          name: "Regata floral",
          description: "Frescor e estilo para dias quentes",
          features: ["Estampas vibrantes", "Modelagem perfeita", "Máximo conforto"]
        },
        {
          name: "Regata listrada",
          description: "Versatilidade em cada detalhe",
          features: ["Design atemporal", "Qualidade premium", "Uso versátil"]
        }
      ],
      color: "bg-gradient-primary"
    },
    {
      id: "feminina",
      icon: Users,
      title: "Linha feminina",
      badge: "Exclusiva",
      description: "Peças desenvolvidas especialmente para o público feminino",
      products: [
        {
          name: "Polo feminina",
          description: "Elegância e feminilidade em cada detalhe",
          features: ["Modelagem exclusiva", "Corte feminino", "Acabamento delicado", "Qualidade superior"]
        }
      ],
      color: "bg-gradient-accent"
    },
    {
      id: "infantil",
      icon: Baby,
      title: "Linha infantil",
      badge: "Conforto",
      description: "Roupas seguras e confortáveis para os pequenos",
      products: [
        {
          name: "Careca infantil",
          description: "Conforto e segurança para crianças",
          features: ["Tecido hipoalergênico", "Costura reforçada", "Tamanhos variados"]
        },
        {
          name: "Polo infantil",
          description: "Estilo e proteção para os pequenos",
          features: ["Material macio", "Cores alegres", "Design seguro"]
        },
        {
          name: "Regata infantil",
          description: "Leveza e frescor para dias quentes",
          features: ["Respirabilidade", "Movimentação livre", "Durabilidade"]
        }
      ],
      color: "bg-primary-light"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-primary py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">
              Nossos produtos
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed animate-fade-in">
              Descubra nossa linha completa de camisas, desenvolvidas com qualidade superior 
              para atender diferentes públicos e necessidades.
            </p>
            <div className="w-24 h-1 bg-white/30 mx-auto mt-8"></div>
          </div>
        </section>

        {/* Products Categories */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {productCategories.map((category, categoryIndex) => (
              <div key={category.id} className="mb-20 last:mb-0">
                {/* Category Header */}
                <div className="text-center mb-12 animate-fade-in">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-primary rounded-full mb-6 shadow-glow">
                    <category.icon className="h-10 w-10 text-white" />
                  </div>
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                      {category.title}
                    </h2>
                    <Badge variant="secondary" className="bg-accent text-white">
                      {category.badge}
                    </Badge>
                  </div>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    {category.description}
                  </p>
                  <div className="w-16 h-1 bg-gradient-primary mx-auto mt-6"></div>
                </div>

                {/* Products Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.products.map((product, productIndex) => (
                    <Card 
                      key={productIndex}
                      className="relative overflow-hidden border-0 shadow-elegant hover:shadow-glow transition-all duration-300 hover:-translate-y-2 group"
                      style={{ animationDelay: `${(categoryIndex * 0.1) + (productIndex * 0.05)}s` }}
                    >
                      <div className={`absolute top-0 right-0 w-32 h-32 ${category.color} opacity-10 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500`}></div>
                      
                      <CardHeader className="pb-4 relative z-10">
                        <CardTitle className="text-xl font-semibold text-foreground mb-2">
                          {product.name}
                        </CardTitle>
                        <p className="text-muted-foreground text-sm">
                          {product.description}
                        </p>
                      </CardHeader>
                      
                      <CardContent className="relative z-10">
                        <div className="space-y-3 mb-6">
                          {product.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center">
                              <Star className="h-4 w-4 text-accent mr-3 flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">{feature}</span>
                            </div>
                          ))}
                        </div>
                        
                        <Button
                          onClick={() => window.open('https://wa.me/5581994770239', '_blank')}
                          variant="outline"
                          className="w-full"
                        >
                          <Phone className="h-4 w-4 mr-2" />
                          Solicitar informações
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-secondary/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Interessado em nossos produtos?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Entre em contato conosco para conhecer nossa linha completa, solicitar catálogo 
              ou esclarecer dúvidas sobre nossos produtos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => window.open('https://wa.me/5581994770239', '_blank')}
                size="lg"
                variant="default"
                className="px-8 py-4 text-lg font-semibold"
              >
                Solicitar catálogo completo
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
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Products;