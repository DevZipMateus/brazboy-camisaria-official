import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center animate-fade-in">
          <div className="mb-8">
            <img 
              src="/logo-braz-boy.png" 
              alt="Braz Boy Camisaria" 
              className="mx-auto h-32 w-auto md:h-40 mb-6"
            />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Braz Boy Camisaria
          </h1>
          
          <h2 className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Oferecemos camisas de excelência, unindo estilo, qualidade e sofisticação para lojistas e revendedores que prezam por confiança
          </h2>
          
          <p className="text-lg md:text-xl text-accent-light font-semibold mb-12 italic">
            "Qualidade que valoriza quem veste"
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={() => window.open('https://wa.me/5581994770239', '_blank')}
              size="lg"
              variant="cta"
              className="px-8 py-4 text-lg font-semibold"
            >
              Solicitar orçamento
            </Button>
            <Button
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              variant="hero"
              size="lg"
              className="px-8 py-4 text-lg font-semibold"
            >
              Ver produtos
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background/20 to-transparent"></div>
    </section>
  );
};

export default Hero;