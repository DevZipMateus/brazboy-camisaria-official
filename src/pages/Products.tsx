import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Shirt, Users, Baby, Star, Phone, Crown } from "lucide-react";
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Products = () => {
  // Componente de carrossel automático
  const AutoCarousel = ({ images, productId }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(true);

    useEffect(() => {
      if (images.length <= 1) return;
      
      const interval = setInterval(() => {
        setCurrentIndex((prev) => prev + 1);
      }, 3000);

      return () => clearInterval(interval);
    }, [images.length]);

    useEffect(() => {
      if (currentIndex === images.length) {
        // Quando chegamos no final, aguardamos a transição e depois voltamos ao início sem transição
        setTimeout(() => {
          setIsTransitioning(false);
          setCurrentIndex(0);
        }, 500);
      } else if (currentIndex === 0 && !isTransitioning) {
        // Reativa a transição após voltar ao início
        setTimeout(() => {
          setIsTransitioning(true);
        }, 50);
      }
    }, [currentIndex, images.length, isTransitioning]);

    // Criamos um array com as imagens + primeira imagem duplicada no final
    const extendedImages = [...images, images[0]];

    return (
      <div className="relative aspect-[4/5] bg-muted/20 rounded-t-lg overflow-hidden">
        <div 
          className={`flex h-full ${isTransitioning ? 'transition-transform duration-500 ease-in-out' : ''}`}
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {extendedImages.map((image, index) => (
            <div key={index} className="flex-shrink-0 w-full h-full">
              <img
                src={image}
                alt={`Produto ${productId} - Imagem ${(index % images.length) + 1}`}
                className="w-full h-full object-contain p-2"
                loading="lazy"
              />
            </div>
          ))}
        </div>
        {images.length > 1 && (
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === (currentIndex % images.length) ? 'bg-primary' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        )}
      </div>
    );
  };

  // Mapeamento das imagens por produto - URLs codificadas para espaços
  const productImages = {
    "careca-algodao": [
      "/produtos/careca%20algodao/IMG-20250624-WA2149.jpg",
      "/produtos/careca%20algodao/IMG-20250624-WA2153.jpg",
      "/produtos/careca%20algodao/IMG-20250624-WA2161.jpg",
      "/produtos/careca%20algodao/IMG-20250624-WA2165.jpg",
      "/produtos/careca%20algodao/IMG-20250624-WA2183.jpg"
    ],
    "careca-floral": [
      "/produtos/careca%20floral/IMG-20250624-WA1932.jpg",
      "/produtos/careca%20floral/IMG-20250624-WA1996.jpg",
      "/produtos/careca%20floral/IMG-20250624-WA2044.jpg",
      "/produtos/careca%20floral/IMG-20250624-WA2090.jpg",
      "/produtos/careca%20floral/IMG-20250624-WA2099.jpg"
    ],
    "careca-listra-fina": [
      "/produtos/careca%20listra%20fina/IMG-20250624-WA2114.jpg",
      "/produtos/careca%20listra%20fina/IMG-20250624-WA2120.jpg",
      "/produtos/careca%20listra%20fina/IMG-20250624-WA2377.jpg",
      "/produtos/careca%20listra%20fina/IMG-20250624-WA2381.jpg",
      "/produtos/careca%20listra%20fina/IMG-20250624-WA2393.jpg"
    ],
    "careca-listra-larga": [
      "/produtos/careca%20listra%20larga/IMG-20250624-WA1939.jpg",
      "/produtos/careca%20listra%20larga/IMG-20250624-WA2025.jpg",
      "/produtos/careca%20listra%20larga/IMG-20250624-WA2059.jpg",
      "/produtos/careca%20listra%20larga/IMG-20250624-WA2086.jpg",
      "/produtos/careca%20listra%20larga/IMG-20250624-WA2101.jpg"
    ],
    "careca-plus-size": [
      "/produtos/careca%20plus%20size/IMG-20250708-WA2442.jpg",
      "/produtos/careca%20plus%20size/IMG-20250708-WA2446.jpg",
      "/produtos/careca%20plus%20size/IMG-20250708-WA2450.jpg",
      "/produtos/careca%20plus%20size/IMG-20250708-WA2452.jpg",
      "/produtos/careca%20plus%20size/IMG-20250708-WA2457.jpg"
    ],
    "polo-algodao": [
      "/produtos/polo%20algodao/IMG-20250624-WA1994.jpg",
      "/produtos/polo%20algodao/IMG-20250624-WA2042.jpg",
      "/produtos/polo%20algodao/IMG-20250624-WA2051.jpg",
      "/produtos/polo%20algodao/IMG-20250624-WA2054.jpg",
      "/produtos/polo%20algodao/IMG-20250624-WA2057.jpg"
    ],
    "polo-floral": [
      "/produtos/polo%20floral/IMG-20250624-WA1915.jpg",
      "/produtos/polo%20floral/IMG-20250624-WA2037.jpg",
      "/produtos/polo%20floral/IMG-20250624-WA2071.jpg",
      "/produtos/polo%20floral/IMG-20250624-WA2076.jpg",
      "/produtos/polo%20floral/IMG-20250624-WA2097.jpg"
    ],
    "polo-listrado": [
      "/produtos/polo%20listrado/IMG-20250711-WA1182.jpg",
      "/produtos/polo%20listrado/IMG-20250711-WA1184.jpg",
      "/produtos/polo%20listrado/IMG-20250711-WA1188.jpg",
      "/produtos/polo%20listrado/IMG-20250711-WA1192.jpg",
      "/produtos/polo%20listrado/IMG-20250711-WA1196.jpg"
    ],
    "polo-listrinha": [
      "/produtos/polo%20listrinha/IMG-20250625-WA0440.jpg",
      "/produtos/polo%20listrinha/IMG-20250625-WA0441.jpg",
      "/produtos/polo%20listrinha/IMG-20250625-WA0443.jpg",
      "/produtos/polo%20listrinha/IMG-20250625-WA0444.jpg",
      "/produtos/polo%20listrinha/IMG-20250625-WA0445.jpg"
    ],
    "polo-piquet-com-bolso": [
      "/produtos/polo%20piquet%20com%20bolso/IMG-20250624-WA2192.jpg",
      "/produtos/polo%20piquet%20com%20bolso/IMG-20250624-WA2197.jpg",
      "/produtos/polo%20piquet%20com%20bolso/IMG-20250624-WA2200.jpg",
      "/produtos/polo%20piquet%20com%20bolso/IMG-20250624-WA2211.jpg",
      "/produtos/polo%20piquet%20com%20bolso/IMG-20250624-WA2235.jpg"
    ],
    "polo-piquet": [
      "/produtos/polo%20piquet/IMG-20250624-WA2293.jpg",
      "/produtos/polo%20piquet/IMG-20250624-WA2297.jpg",
      "/produtos/polo%20piquet/IMG-20250624-WA2301.jpg",
      "/produtos/polo%20piquet/IMG-20250624-WA2305.jpg",
      "/produtos/polo%20piquet/IMG-20250624-WA2312.jpg"
    ],
    "polo-plus-size": [
      "/produtos/polo%20plus%20size/IMG-20240529-WA4514.jpg",
      "/produtos/polo%20plus%20size/IMG-20240529-WA4516.jpg",
      "/produtos/polo%20plus%20size/IMG-20240529-WA4517.jpg",
      "/produtos/polo%20plus%20size/IMG-20240529-WA4520.jpg",
      "/produtos/polo%20plus%20size/IMG-20240529-WA4522.jpg"
    ],
    "regata-algodao": [
      "/produtos/regata%20algodao/IMG-20250624-WA1957.jpg",
      "/produtos/regata%20algodao/IMG-20250624-WA2030.jpg",
      "/produtos/regata%20algodao/IMG-20250624-WA2066.jpg",
      "/produtos/regata%20algodao/IMG-20250624-WA2075.jpg",
      "/produtos/regata%20algodao/IMG-20250624-WA2087.jpg"
    ],
    "regata-floral": [
      "/produtos/regata%20floral/IMG-20250624-WA2062.jpg",
      "/produtos/regata%20floral/IMG-20250624-WA2064.jpg",
      "/produtos/regata%20floral/IMG-20250624-WA2070.jpg",
      "/produtos/regata%20floral/IMG-20250624-WA2079.jpg",
      "/produtos/regata%20floral/IMG-20250624-WA2081.jpg"
    ],
    "uv-protecao": [
      "/produtos/uv%20proteção/IMG-20250624-WA1860.jpg",
      "/produtos/uv%20proteção/IMG-20250624-WA2127.jpg",
      "/produtos/uv%20proteção/IMG-20250624-WA2133.jpg",
      "/produtos/uv%20proteção/IMG-20250624-WA2137.jpg",
      "/produtos/uv%20proteção/IMG-20250624-WA2143.jpg"
    ],
    "polo-feminina": [
      "/produtos/polo%20feminina/IMG-20250624-WA2238.jpg",
      "/produtos/polo%20feminina/IMG-20250624-WA2242.jpg",
      "/produtos/polo%20feminina/IMG-20250624-WA2247.jpg",
      "/produtos/polo%20feminina/IMG-20250624-WA2253.jpg",
      "/produtos/polo%20feminina/IMG-20250624-WA2262.jpg"
    ],
    "careca-infantil": [
      "/produtos/careca%20infantil/IMG-20250708-WA2213.jpg",
      "/produtos/careca%20infantil/IMG-20250708-WA2217.jpg",
      "/produtos/careca%20infantil/IMG-20250708-WA2219.jpg",
      "/produtos/careca%20infantil/IMG-20250708-WA2220.jpg",
      "/produtos/careca%20infantil/IMG-20250708-WA2222.jpg"
    ],
    "polo-infantil": [
      "/produtos/polo%20infantil/IMG-20250708-WA2177.jpg",
      "/produtos/polo%20infantil/IMG-20250708-WA2182.jpg",
      "/produtos/polo%20infantil/IMG-20250708-WA2184.jpg",
      "/produtos/polo%20infantil/IMG-20250708-WA2186.jpg",
      "/produtos/polo%20infantil/IMG-20250708-WA2188.jpg"
    ],
    "regata-infantil": [
      "/produtos/regata%20infantil/IMG-20250708-WA2191.jpg",
      "/produtos/regata%20infantil/IMG-20250708-WA2196.jpg",
      "/produtos/regata%20infantil/IMG-20250708-WA2199.jpg",
      "/produtos/regata%20infantil/IMG-20250708-WA2201.jpg",
      "/produtos/regata%20infantil/IMG-20250708-WA2230.jpg"
    ],
    "menegotti": [
      "/produtos/menegotti/IMG-20250618-WA1390.jpg",
      "/produtos/menegotti/IMG-20250618-WA1394.jpg",
      "/produtos/menegotti/IMG-20250618-WA1415.jpg",
      "/produtos/menegotti/IMG-20250618-WA1419.jpg",
      "/produtos/menegotti/IMG-20250618-WA1421.jpg"
    ]
  };

  const productCategories = [
    {
      id: "masculina",
      icon: Shirt,
      title: "Linha masculina",
      badge: "Mais vendida",
      description: "Nossa linha masculina oferece variedade e qualidade em cada peça",
      products: [
        {
          id: "careca-algodao",
          name: "Careca algodão",
          description: "Camiseta básica de alta qualidade em 100% algodão",
          features: ["100% algodão", "Modelagem confortável", "Durabilidade superior", "Cores variadas"],
          images: productImages["careca-algodao"]
        },
        {
          id: "careca-floral",
          name: "Careca floral", 
          description: "Estampas florais modernas e elegantes",
          features: ["Estampas exclusivas", "Tecido premium", "Design contemporâneo", "Máxima qualidade"],
          images: productImages["careca-floral"]
        },
        {
          id: "careca-listra-fina",
          name: "Careca listra fina",
          description: "Listras finas clássicas que nunca saem de moda",
          features: ["Listras bem definidas", "Corte perfeito", "Versatilidade no uso", "Acabamento premium"],
          images: productImages["careca-listra-fina"]
        },
        {
          id: "careca-listra-larga",
          name: "Careca listra larga",
          description: "Listras largas para um visual marcante",
          features: ["Design moderno", "Estilo diferenciado", "Conforto garantido", "Qualidade superior"],
          images: productImages["careca-listra-larga"]
        },
        {
          id: "careca-plus-size",
          name: "Careca plus size",
          description: "Modelagem especial para tamanhos grandes",
          features: ["Modelagem específica", "Conforto ampliado", "Caimento perfeito", "Tamanhos especiais"],
          images: productImages["careca-plus-size"]
        },
        {
          id: "polo-algodao",
          name: "Polo algodão",
          description: "Polo clássica em algodão de alta qualidade",
          features: ["100% algodão", "Gola estruturada", "Botões de qualidade", "Versatilidade total"],
          images: productImages["polo-algodao"]
        },
        {
          id: "polo-floral",
          name: "Polo floral",
          description: "Estampas florais que destacam personalidade",
          features: ["Padrões únicos", "Qualidade superior", "Estilo diferenciado", "Design exclusivo"],
          images: productImages["polo-floral"]
        },
        {
          id: "polo-listrado",
          name: "Polo listrado",
          description: "Clássico renovado com qualidade premium",
          features: ["Listras harmoniosas", "Corte moderno", "Conforto absoluto", "Elegância casual"],
          images: productImages["polo-listrado"]
        },
        {
          id: "polo-listrinha",
          name: "Polo listrinha",
          description: "Listras delicadas para um visual sofisticado",
          features: ["Listras sutis", "Acabamento refinado", "Modelagem ajustada", "Versatilidade máxima"],
          images: productImages["polo-listrinha"]
        },
        {
          id: "polo-piquet-com-bolso",
          name: "Polo piquet com bolso",
          description: "Elegância e praticidade em uma peça",
          features: ["Piquet de qualidade", "Bolso funcional", "Acabamento refinado", "Durabilidade superior"],
          images: productImages["polo-piquet-com-bolso"]
        },
        {
          id: "polo-piquet",
          name: "Polo piquet",
          description: "Design minimalista e sofisticado",
          features: ["Visual clean", "Modelagem ajustada", "Conforto garantido", "Tecido premium"],
          images: productImages["polo-piquet"]
        },
        {
          id: "polo-plus-size",
          name: "Polo plus size",
          description: "Polo com modelagem especial para tamanhos grandes",
          features: ["Modelagem específica", "Caimento perfeito", "Conforto ampliado", "Qualidade garantida"],
          images: productImages["polo-plus-size"]
        },
        {
          id: "regata-algodao",
          name: "Regata algodão",
          description: "Liberdade e conforto para o verão",
          features: ["Tecido leve", "Corte anatômico", "Secagem rápida", "100% algodão"],
          images: productImages["regata-algodao"]
        },
        {
          id: "regata-floral",
          name: "Regata floral",
          description: "Frescor e estilo para dias quentes",
          features: ["Estampas vibrantes", "Modelagem perfeita", "Máximo conforto", "Design tropical"],
          images: productImages["regata-floral"]
        },
        {
          id: "uv-protecao",
          name: "UV proteção",
          description: "Proteção solar com estilo e conforto",
          features: ["Proteção UV", "Tecido tecnológico", "Secagem rápida", "Conforto térmico"],
          images: productImages["uv-protecao"]
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
          id: "polo-feminina",
          name: "Polo feminina",
          description: "Elegância e feminilidade em cada detalhe",
          features: ["Modelagem exclusiva", "Corte feminino", "Acabamento delicado", "Qualidade superior"],
          images: productImages["polo-feminina"]
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
          id: "careca-infantil",
          name: "Careca infantil",
          description: "Conforto e segurança para crianças",
          features: ["Tecido hipoalergênico", "Costura reforçada", "Tamanhos variados", "Segurança total"],
          images: productImages["careca-infantil"]
        },
        {
          id: "polo-infantil",
          name: "Polo infantil",
          description: "Estilo e proteção para os pequenos",
          features: ["Material macio", "Cores alegres", "Design seguro", "Conforto garantido"],
          images: productImages["polo-infantil"]
        },
        {
          id: "regata-infantil",
          name: "Regata infantil",
          description: "Leveza e frescor para dias quentes",
          features: ["Respirabilidade", "Movimentação livre", "Durabilidade", "Tecido suave"],
          images: productImages["regata-infantil"]
        }
      ],
      color: "bg-primary-light"
    },
    {
      id: "premium",
      icon: Crown,
      title: "Linha premium",
      badge: "Exclusiva",
      description: "Produtos especiais com qualidade superior",
      products: [
        {
          id: "menegotti",
          name: "Menegotti",
          description: "Linha premium com acabamento especial",
          features: ["Qualidade premium", "Acabamento especial", "Design exclusivo", "Máxima durabilidade"],
          images: productImages["menegotti"]
        }
      ],
      color: "bg-gradient-secondary"
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
                      key={product.id}
                      className="relative overflow-hidden border-0 shadow-elegant hover:shadow-glow transition-all duration-300 hover:-translate-y-2 group"
                      style={{ animationDelay: `${(categoryIndex * 0.1) + (productIndex * 0.05)}s` }}
                    >
                      <div className={`absolute top-0 right-0 w-32 h-32 ${category.color} opacity-10 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500`}></div>
                      
                      {/* Product Image Carousel */}
                      <div className="relative mb-4">
                        <AutoCarousel images={product.images} productId={product.id} />
                      </div>
                      
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
                          onClick={() => window.open(`https://wa.me/5581994770239?text=Olá! Gostaria de saber mais sobre o produto: ${product.name}`, '_blank')}
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