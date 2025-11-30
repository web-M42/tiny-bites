import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import heroImage from "@/assets/hero-meals.jpg";
import logoImage from "@/assets/logo.jpg";

export const Hero = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Obrigado por se inscrever!",
        description: "Você receberá novidades em breve sobre as amostras grátis.",
      });
      setEmail("");
    }
  };

  return (
    <section className="relative min-h-screen bg-gradient-warm">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <div className="flex items-center gap-3">
          <img src={logoImage} alt="Kids Plate Pals" className="h-16 w-16 rounded-full" />
          <div>
            <h1 className="font-display text-2xl font-bold text-primary">Kids Plate Pals</h1>
            <p className="text-xs text-muted-foreground uppercase tracking-wide">Healthy Meals for Adventurous Eaters</p>
          </div>
        </div>
      </header>

      {/* Hero Content */}
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <div className="space-y-4">
              <div className="inline-block rounded-full bg-primary/10 px-4 py-2">
                <span className="text-sm font-semibold text-primary">✨ Agora Disponível no Canadá</span>
              </div>
              <h2 className="font-display text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl">
                A Solução para o Almoço Escolar:
                <span className="block text-primary mt-2">Saudável, Rápido e Delicioso</span>
              </h2>
              <p className="text-lg text-muted-foreground md:text-xl">
                Junte-se à lista de espera e seja um dos primeiros a experimentar nossos{" "}
                <span className="font-semibold text-foreground">Cotoletas de Frango em Formato de Animais</span> feitas com ingredientes 100% naturais.
              </p>
            </div>

            {/* Email Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row sm:gap-4">
              <Input
                type="email"
                placeholder="seu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="h-14 flex-1 border-2 border-border bg-card text-lg shadow-soft transition-all focus:border-primary focus:shadow-card"
              />
              <Button 
                type="submit" 
                size="lg"
                className="h-14 bg-gradient-hero font-display text-lg font-bold shadow-soft hover:shadow-card hover:scale-105 transition-all"
              >
                🎁 Quero Amostras Grátis!
              </Button>
            </form>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <span className="text-xl">✓</span>
                <span>100% Natural</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xl">✓</span>
                <span>Livre de Alergias</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xl">✓</span>
                <span>Aprovado por Nutricionistas</span>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative animate-in fade-in slide-in-from-right-4 duration-1000 delay-300">
            <div className="relative overflow-hidden rounded-3xl shadow-card">
              <img
                src={heroImage}
                alt="Cotoletas de frango em formato de animais com vegetais"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 rounded-2xl bg-secondary px-6 py-4 shadow-card animate-in zoom-in duration-500 delay-700">
              <p className="font-display text-2xl font-bold text-secondary-foreground">Pronto em 10min!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
