import { Star } from "lucide-react";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah M.",
      role: "Mother of 2",
      text: "My child finally ate broccoli! The dinosaur cutlets are a total hit at home. I love knowing they're gluten-free!",
      rating: 5,
    },
    {
      name: "Maple Leaf Daycare",
      role: "Daycare Director",
      text: "Easy to reheat, perfect for our weekly menu. Parents love knowing we're serving something so nutritious and safe.",
      rating: 5,
    },
    {
      name: "Michael P.",
      role: "Busy Dad",
      text: "Saves so much time! Now I don't feel guilty for not cooking from scratch. My daughter asks for the 'chicken bears' every day!",
      rating: 5,
    },
  ];

  return (
    <section className="bg-card py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl mb-4">
            Families and Daycares Love It! ❤️
          </h2>
          <p className="text-lg text-muted-foreground">
            See what our early adopters have to say about HappyCub Meals.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group rounded-2xl border-2 border-border bg-background p-8 shadow-soft transition-all hover:shadow-card hover:border-primary/50 hover:-translate-y-1"
            >
              {/* Stars */}
              <div className="mb-4 flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-golden text-golden" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="mb-6 text-foreground leading-relaxed">
                "{testimonial.text}"
              </blockquote>

              {/* Author */}
              <div className="border-t border-border pt-4">
                <p className="font-display font-bold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
