import { Zap, Leaf, Shield } from "lucide-react";

export const Solution = () => {
  const solutions = [
    {
      icon: Zap,
      title: "Rápido",
      description: "Pronto em minutos no forno ou air fryer. Perfeito para o almoço da escola ou creche sem o estresse matinal.",
      color: "secondary",
    },
    {
      icon: Leaf,
      title: "Saudável",
      description: "Ingredientes limpos e naturais, baixo teor de sódio, sem aditivos. Proteínas ricas que nutrem de verdade.",
      color: "primary",
    },
    {
      icon: Shield,
      title: "Seguro & Divertido",
      description: "Livre de Glúten, Laticínios, Nozes e Soja. Em formatos divertidos de animais que as crianças adoram!",
      color: "soft-orange",
    },
  ];

  return (
    <section className="bg-gradient-warm py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <div className="inline-block rounded-full bg-primary/10 px-4 py-2 mb-4">
            <span className="text-sm font-semibold text-primary">Nossa Proposta de Valor</span>
          </div>
          <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl mb-4">
            A Solução Completa em Uma Refeição
          </h2>
          <p className="text-lg text-muted-foreground">
            Desenvolvido especialmente para pais ocupados e creches que não querem comprometer a qualidade.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl bg-card border-2 border-border p-8 shadow-soft transition-all hover:shadow-card hover:border-primary/50"
              style={{
                animationDelay: `${index * 150}ms`,
              }}
            >
              {/* Gradient Background Effect */}
              <div className={`absolute inset-0 bg-${solution.color}/5 opacity-0 transition-opacity group-hover:opacity-100`} />
              
              <div className="relative">
                <div className={`mb-6 inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-${solution.color}/10 text-${solution.color} transition-all group-hover:scale-110 group-hover:bg-${solution.color} group-hover:text-white`}>
                  <solution.icon className="h-10 w-10" />
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                  {solution.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {solution.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Value Points */}
        <div className="mt-16 mx-auto max-w-4xl">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="flex items-start gap-4 rounded-2xl bg-card p-6 shadow-soft">
              <span className="text-3xl">🦖</span>
              <div>
                <h4 className="font-display font-bold text-foreground mb-2">Formatos Divertidos</h4>
                <p className="text-sm text-muted-foreground">Ursinhos, dinossauros e coelhinhos tornam cada refeição uma aventura!</p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-2xl bg-card p-6 shadow-soft">
              <span className="text-3xl">👨‍🍳</span>
              <div>
                <h4 className="font-display font-bold text-foreground mb-2">Aprovado por Especialistas</h4>
                <p className="text-sm text-muted-foreground">Desenvolvido com nutricionistas pediátricos e testado em creches reais.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
