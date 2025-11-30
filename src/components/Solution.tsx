import { Zap, Leaf, Shield } from "lucide-react";

export const Solution = () => {
  const solutions = [
    {
      icon: Zap,
      title: "Fast",
      description: "Ready in minutes in the oven or air fryer. Perfect for school or daycare lunch without the morning stress.",
      color: "secondary",
    },
    {
      icon: Leaf,
      title: "Healthy",
      description: "Clean and natural ingredients, low sodium, no additives. Protein-rich meals that truly nourish.",
      color: "primary",
    },
    {
      icon: Shield,
      title: "Safe & Fun",
      description: "Gluten, Dairy, Nut, and Soy-Free. Fun animal shapes that kids love!",
      color: "soft-orange",
    },
  ];

  return (
    <section className="bg-gradient-warm py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <div className="inline-block rounded-full bg-primary/10 px-4 py-2 mb-4">
            <span className="text-sm font-semibold text-primary">Our Value Proposition</span>
          </div>
          <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl mb-4">
            The Complete Solution in One Meal
          </h2>
          <p className="text-lg text-muted-foreground">
            Designed especially for busy parents and daycares that don't want to compromise on quality.
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
                <h4 className="font-display font-bold text-foreground mb-2">Fun Shapes</h4>
                <p className="text-sm text-muted-foreground">Bears, dinosaurs, and bunnies make every meal an adventure!</p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-2xl bg-card p-6 shadow-soft">
              <span className="text-3xl">👨‍🍳</span>
              <div>
                <h4 className="font-display font-bold text-foreground mb-2">Expert Approved</h4>
                <p className="text-sm text-muted-foreground">Developed with pediatric nutritionists and tested in real daycares.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
