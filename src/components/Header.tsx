import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateToSection = (sectionId: string) => {
    // Se estamos na página inicial, rola para a seção
    if (location.pathname === '/') {
      scrollToSection(sectionId);
    } else {
      // Se estamos em outra página, navega para home e depois rola
      navigate('/');
      setTimeout(() => scrollToSection(sectionId), 100);
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/95 backdrop-blur-md shadow-elegant' : 'bg-background/80 backdrop-blur-sm'
    }`}>
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <img 
                src="/logo-braz-boy.png" 
                alt="Braz Boy Camisaria" 
                className="h-12 w-auto cursor-pointer"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => navigateToSection('hero')}
                className="text-foreground hover:text-primary transition-smooth font-medium"
              >
                Início
              </button>
              <button
                onClick={() => navigateToSection('about')}
                className="text-foreground hover:text-primary transition-smooth font-medium"
              >
                Sobre nós
              </button>
              <Link
                to="/produtos"
                className="text-foreground hover:text-primary transition-smooth font-medium"
              >
                Produtos
              </Link>
              <button
                onClick={() => navigateToSection('services')}
                className="text-foreground hover:text-primary transition-smooth font-medium"
              >
                Serviços
              </button>
              <button
                onClick={() => navigateToSection('contact')}
                className="text-foreground hover:text-primary transition-smooth font-medium"
              >
                Contato
              </button>
              <Button 
                onClick={() => window.open('https://wa.me/5581994770239', '_blank')}
                variant="default"
                className="bg-white text-primary hover:bg-gray-100"
              >
                Fale conosco
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground hover:text-primary"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-md rounded-lg mt-2 p-4 shadow-elegant">
            <div className="px-2 pt-2 pb-3 space-y-3">
              <button
                onClick={() => navigateToSection('hero')}
                className="block text-foreground hover:text-primary transition-smooth font-medium w-full text-left"
              >
                Início
              </button>
              <button
                onClick={() => navigateToSection('about')}
                className="block text-foreground hover:text-primary transition-smooth font-medium w-full text-left"
              >
                Sobre nós
              </button>
              <Link
                to="/produtos"
                className="block text-foreground hover:text-primary transition-smooth font-medium w-full text-left"
                onClick={() => setIsMenuOpen(false)}
              >
                Produtos
              </Link>
              <button
                onClick={() => navigateToSection('services')}
                className="block text-foreground hover:text-primary transition-smooth font-medium w-full text-left"
              >
                Serviços
              </button>
              <button
                onClick={() => navigateToSection('contact')}
                className="block text-foreground hover:text-primary transition-smooth font-medium w-full text-left"
              >
                Contato
              </button>
              <Button 
                onClick={() => window.open('https://wa.me/5581994770239', '_blank')}
                variant="default"
                className="w-full bg-white text-primary hover:bg-gray-100 mt-4"
              >
                Fale conosco
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;