import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export const FinalCTA = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "You're on the list! 🎉",
        description: "We'll send you information about the free samples soon.",
      });
      setEmail("");
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-hero py-20 md:py-32">
      {/* Decorative Elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30" />
      
      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-block rounded-full bg-white/20 px-6 py-3 backdrop-blur-sm">
            <span className="text-sm font-semibold text-white">✨ Limited Offer for Early Adopters</span>
          </div>
          
          <h2 className="font-display text-4xl font-bold text-white md:text-5xl mb-6">
            Sign Up Now and Get Free Samples!
          </h2>
          
          <p className="text-lg text-white/90 mb-10 leading-relaxed">
            Be one of the first 500 to try HappyCub Meals. 
            Receive free samples + an exclusive discount on your first order.
          </p>

          {/* Email Form */}
          <form onSubmit={handleSubmit} className="mx-auto max-w-md">
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
              <Input
                type="email"
                placeholder="Enter your best email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="h-14 flex-1 border-2 border-white/30 bg-white/95 text-lg text-foreground placeholder:text-muted-foreground shadow-card backdrop-blur-sm focus:border-white focus:bg-white"
              />
              <Button 
                type="submit" 
                size="lg"
                className="h-14 bg-secondary text-secondary-foreground font-display text-lg font-bold shadow-card hover:bg-golden hover:scale-105 transition-all"
              >
                Claim Your Spot →
              </Button>
            </div>
          </form>

          {/* Trust Indicators */}
          <div className="mt-10 flex flex-wrap justify-center gap-8 text-sm text-white/80">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🔒</span>
              <span>100% Secure</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">📧</span>
              <span>No Spam</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🎁</span>
              <span>Free Samples</span>
            </div>
          </div>

          {/* Social Proof */}
          <div className="mt-12 rounded-2xl bg-white/10 backdrop-blur-sm p-6">
            <p className="text-white/90 font-medium mb-2">
              <span className="font-display text-2xl font-bold text-white">987</span> parents have signed up this week!
            </p>
            <p className="text-sm text-white/70">Limited spots available for the first batch of samples</p>
          </div>
        </div>
      </div>
    </section>
  );
};
