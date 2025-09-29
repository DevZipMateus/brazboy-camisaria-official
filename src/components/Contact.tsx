import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Instagram } from "lucide-react";
const Contact = () => {
  const contactInfo = [{
    icon: Phone,
    title: "Telefone",
    content: "(81) 99477-0239",
    action: () => window.open('https://wa.me/5581994770239', '_blank')
  }, {
    icon: Mail,
    title: "E-mail",
    content: "camisariabrazboy89@gmail.com",
    action: () => window.location.href = 'mailto:camisariabrazboy89@gmail.com'
  }, {
    icon: MapPin,
    title: "Endereço",
    content: "Rua Projetada D, 76\nBairro Marília\nTaquaritinga do Norte - PE",
    action: () => window.open('https://www.google.com/maps/dir//Rua+Projetada+D+-+Taquaritinga+do+Norte,+PE,+55790-000/@-7.9044664,-36.0881391,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x7a97b11584365bf:0x5b9d5d62a7489b18!2m2!1d-36.0469394!2d-7.9045534?entry=ttu&g_ep=EgoyMDI1MDkwNy4wIKXMDSoASAFQAw%3D%3D', '_blank')
  }, {
    icon: MapPin,
    title: "Box no Moda Center",
    content: "no calçadão\nSetor Branco, Rua K\nBox 75 e 76\nSanta Cruz do Capibaribe - PE",
    action: () => window.open('https://www.google.com/maps/search/Moda+Center+Santa+Cruz+do+Capibaribe+PE', '_blank')
  }, {
    icon: Clock,
    title: "Horário de funcionamento",
    content: "Segunda a sexta\ndas 7h às 17h",
    action: null
  }, {
    icon: Instagram,
    title: "Instagram",
    content: "@brazboy89",
    action: () => window.open('https://instagram.com/brazboy89', '_blank')
  }];
  return <section id="contact" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Entre em contato
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Estamos prontos para atender você! Entre em contato conosco para solicitar orçamentos, 
            esclarecer dúvidas ou conhecer melhor nossos produtos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {contactInfo.map((info, index) => <Card key={index} className={`border-0 shadow-elegant hover:shadow-glow transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm ${info.action ? 'cursor-pointer' : ''} ${info.title === 'Box no Moda Center' ? 'bg-gradient-primary text-primary-foreground ring-2 ring-accent/50' : 'bg-background/80'}`} onClick={info.action || undefined} style={{
          animationDelay: `${index * 0.1}s`
        }}>
              <CardHeader className="text-center pb-4 relative">
                {info.title === 'Box no Moda Center'}
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-full mb-4 shadow-glow mx-auto ${info.title === 'Box no Moda Center' ? 'bg-primary-foreground text-primary' : 'bg-gradient-primary text-primary-foreground'}`}>
                  <info.icon className="h-7 w-7" />
                </div>
                <CardTitle className={`text-lg font-semibold ${info.title === 'Box no Moda Center' ? 'text-primary-foreground' : 'text-foreground'}`}>
                  {info.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className={`whitespace-pre-line leading-relaxed ${info.title === 'Box no Moda Center' ? 'text-primary-foreground/90' : 'text-muted-foreground'}`}>
                  {info.content}
                </p>
              </CardContent>
            </Card>)}
        </div>

        {/* Map */}
        <div className="mb-16">
          <Card className="border-0 shadow-elegant overflow-hidden">
            <CardContent className="p-0">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31531.97944664997!2d-36.088139103710935!3d-7.904466436308594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7a97b11584365bf%3A0x5b9d5d62a7489b18!2sRua%20Projetada%20D%20-%20Taquaritinga%20do%20Norte%2C%20PE%2C%2055790-000!5e0!3m2!1spt-BR!2sbr!4v1703175234567!5m2!1spt-BR!2sbr" width="100%" height="400" style={{
              border: 0
            }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Localização da Braz Boy Camisaria"></iframe>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-primary rounded-2xl p-8 md:p-12 shadow-elegant">
          <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
            Vamos trabalhar juntos?
          </h3>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Seja um parceiro da Braz Boy Camisaria e ofereça qualidade superior aos seus clientes. 
            Entre em contato conosco agora mesmo!
          </p>
          <Button onClick={() => window.open('https://wa.me/5581994770239', '_blank')} size="lg" variant="accent" className="px-8 py-4 text-lg font-semibold">
            Falar no WhatsApp
          </Button>
        </div>
      </div>
    </section>;
};
export default Contact;