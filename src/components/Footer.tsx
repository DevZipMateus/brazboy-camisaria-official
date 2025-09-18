import { MapPin, Phone, Mail, Instagram } from "lucide-react";
const Footer = () => {
  return <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <img src="/logo-braz-boy.png" alt="Braz Boy Camisaria" className="h-12 w-auto" />
            </div>
            <p className="text-primary-foreground/80 mb-4 leading-relaxed">
              Qualidade que valoriza quem veste. Oferecemos camisas de excelência, 
              unindo estilo, qualidade e sofisticação.
            </p>
            <p className="text-sm text-primary-foreground/60">
              CNPJ: 23.785.673/0001-08
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <Phone className="h-5 w-5 mr-3 mt-0.5 text-accent-light" />
                <div>
                  <a href="https://wa.me/5581994770239" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/80 hover:text-accent-light transition-colors">
                    (81) 99477-0239
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="h-5 w-5 mr-3 mt-0.5 text-accent-light" />
                <div>
                  <a href="mailto:camisariabrazboy89@gmail.com" className="text-primary-foreground/80 hover:text-accent-light transition-colors">
                    camisariabrazboy89@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <Instagram className="h-5 w-5 mr-3 mt-0.5 text-accent-light" />
                <div>
                  <a href="https://instagram.com/brazboy89" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/80 hover:text-accent-light transition-colors">
                    @brazboy89
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Address */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Endereço</h3>
            <div className="flex items-start">
              <MapPin className="h-5 w-5 mr-3 mt-0.5 text-accent-light" />
              <div className="text-primary-foreground/80">
                <p>Rua Projetada D, 76</p>
                <p>Bairro Marília</p>
                <p>Taquaritinga do Norte - PE</p>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Funcionamento</h3>
            <div className="text-primary-foreground/80 space-y-2">
              <p>Segunda a sexta</p>
              <p className="font-medium text-accent-light">7h às 17h</p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-light/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-primary-foreground/60 text-sm mb-4 md:mb-0">© 2025 Braz Boy Camisaria. Todos os direitos reservados.</p>
            <p className="text-primary-foreground/60 text-sm">
              Desenvolvido com qualidade e dedicação
            </p>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;