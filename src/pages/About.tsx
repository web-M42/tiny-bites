import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import logoImage from "@/assets/logo.png";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-warm">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate("/")}>
          <img src={logoImage} alt="Kids Plate Pals" className="h-16 w-16 rounded-full" />
          <div>
            <h1 className="font-display text-2xl font-bold text-primary">Kids Plate Pals</h1>
            <p className="text-xs text-muted-foreground uppercase tracking-wide">Healthy Meals for Adventurous Eaters</p>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Hero Section */}
          <div className="text-center space-y-4">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
              Nossa História
            </h2>
            <p className="text-xl text-muted-foreground">
              Transformando refeições em aventuras deliciosas e saudáveis
            </p>
          </div>

          {/* Mission Section */}
          <div className="bg-card rounded-3xl p-8 md:p-12 shadow-card">
            <h3 className="font-display text-3xl font-bold text-primary mb-6">Nossa Missão</h3>
            <p className="text-lg text-foreground leading-relaxed">
              Na Kids Plate Pals, acreditamos que a hora da refeição deve ser um momento de alegria e descoberta. 
              Criamos refeições nutritivas e divertidas que ajudam pais ocupados a oferecer o melhor para seus filhos, 
              sem comprometer a qualidade ou a segurança alimentar.
            </p>
          </div>

          {/* Values Section */}
          <div className="space-y-8">
            <h3 className="font-display text-3xl font-bold text-foreground text-center">Nossos Valores</h3>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="bg-card rounded-2xl p-6 shadow-soft">
                <div className="text-4xl mb-4">🌱</div>
                <h4 className="font-semibold text-xl mb-3">Qualidade Natural</h4>
                <p className="text-muted-foreground">
                  Apenas ingredientes 100% naturais, sem aditivos ou conservantes artificiais.
                </p>
              </div>
              <div className="bg-card rounded-2xl p-6 shadow-soft">
                <div className="text-4xl mb-4">🛡️</div>
                <h4 className="font-semibold text-xl mb-3">Segurança Alimentar</h4>
                <p className="text-muted-foreground">
                  Livres de alergias comuns - sem glúten, laticínios, nozes e soja.
                </p>
              </div>
              <div className="bg-card rounded-2xl p-6 shadow-soft">
                <div className="text-4xl mb-4">❤️</div>
                <h4 className="font-semibold text-xl mb-3">Feito com Amor</h4>
                <p className="text-muted-foreground">
                  Cada produto é criado pensando na saúde e felicidade das crianças.
                </p>
              </div>
            </div>
          </div>

          {/* Story Section */}
          <div className="bg-card rounded-3xl p-8 md:p-12 shadow-card space-y-6">
            <h3 className="font-display text-3xl font-bold text-primary">Como Começamos</h3>
            <p className="text-lg text-foreground leading-relaxed">
              Kids Plate Pals nasceu da necessidade real de pais que queriam oferecer refeições saudáveis 
              e práticas para seus filhos. Percebemos que havia uma lacuna no mercado canadense para 
              produtos congelados que fossem ao mesmo tempo nutritivos, livres de alergias e divertidos 
              para as crianças.
            </p>
            <p className="text-lg text-foreground leading-relaxed">
              Hoje, nossos produtos são a escolha favorita de famílias e creches em todo o Canadá, 
              ajudando a tornar a hora da refeição mais fácil, saudável e divertida.
            </p>
          </div>

          {/* CTA Section */}
          <div className="text-center space-y-6 pt-8">
            <h3 className="font-display text-3xl font-bold text-foreground">
              Junte-se à Nossa Família
            </h3>
            <p className="text-lg text-muted-foreground">
              Faça parte da revolução das refeições saudáveis para crianças
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button 
                onClick={() => navigate("/#signup")} 
                className="h-14 px-8 text-lg font-bold bg-gradient-hero"
              >
                Cadastre-se na Lista de Espera
              </Button>
              <Button 
                onClick={() => navigate("/contact")} 
                variant="outline"
                className="h-14 px-8 text-lg font-semibold"
              >
                Entre em Contato
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
