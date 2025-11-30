import { Clock, Heart, AlertCircle } from "lucide-react";

export const Problem = () => {
  const problems = [
    {
      icon: Clock,
      title: "Lack of Time",
      description: "Busy parents struggle to prepare healthy meals every day between work and school.",
    },
    {
      icon: AlertCircle,
      title: "Allergy Concerns",
      description: "It's hard to find safe options that are free of gluten, dairy, nuts, and soy.",
    },
    {
      icon: Heart,
      title: "Parental Guilt",
      description: "The guilt of not offering homemade, nutritious meals every day weighs heavily.",
    },
  ];

  return (
    <section className="bg-card py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl mb-4">
            We Understand Your Challenges
          </h2>
          <p className="text-lg text-muted-foreground">
            Preparing healthy, safe meals that kids will actually eat is a daily challenge.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="group rounded-2xl border-2 border-border bg-background p-8 shadow-soft transition-all hover:shadow-card hover:border-primary/50 hover:-translate-y-1"
            >
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <problem.icon className="h-8 w-8" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">
                {problem.title}
              </h3>
              <p className="text-muted-foreground">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
