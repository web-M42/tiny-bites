import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import logoImage from "@/assets/logo.png";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-warm">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <a href="/" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            <div className="flex items-center gap-3">
              <img src={logoImage} alt="Kids Plate Pals" className="h-24 w-24 rounded-full" />
              <div>
                <h1 className="font-display text-2xl font-bold text-primary">Tiny Bites</h1>
                <p className="text-xs text-muted-foreground uppercase tracking-wide">Healthy Meals for Adventurous Eaters</p>
              </div>
            </div>
          </a>

          {/* Navigation Links */}
          <nav className="flex items-center gap-6">
        <a href="/about" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
          About
        </a>
        <a href="/auth" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
          Auth
        </a>
        <a href="/contact" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
          Contact
        </a>
          </nav>
        </div>
      </header>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Hero Section */}
          <div className="text-center space-y-4">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
              Our Story
            </h2>
            <p className="text-xl text-muted-foreground">
              Turning meals into delicious and healthy adventures
            </p>
          </div>

          {/* Mission Section */}
          <div className="bg-card rounded-3xl p-8 md:p-12 shadow-card">
            <h3 className="font-display text-3xl font-bold text-primary mb-6">Our Mission</h3>
            <p className="text-lg text-foreground leading-relaxed">
              At Kids Plate Pals, we believe mealtime should be a moment of joy and discovery. 
              We create nutritious and fun meals that help busy parents offer the best for their kids 
              without compromising on quality or food safety.
            </p>
          </div>

          {/* Values Section */}
          <div className="space-y-8">
            <h3 className="font-display text-3xl font-bold text-foreground text-center">Our Values</h3>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="bg-card rounded-2xl p-6 shadow-soft">
                <div className="text-4xl mb-4">🌱</div>
                <h4 className="font-semibold text-xl mb-3">Natural Quality</h4>
                <p className="text-muted-foreground">
                  Only 100% natural ingredients, no artificial additives or preservatives.
                </p>
              </div>
              <div className="bg-card rounded-2xl p-6 shadow-soft">
                <div className="text-4xl mb-4">🛡️</div>
                <h4 className="font-semibold text-xl mb-3">Food Safety</h4>
                <p className="text-muted-foreground">
                  Free from common allergens - no gluten, dairy, nuts, or soy.
                </p>
              </div>
              <div className="bg-card rounded-2xl p-6 shadow-soft">
                <div className="text-4xl mb-4">❤️</div>
                <h4 className="font-semibold text-xl mb-3">Made with Love</h4>
                <p className="text-muted-foreground">
                  Every product is created with the health and happiness of children in mind.
                </p>
              </div>
            </div>
          </div>

          {/* Story Section */}
          <div className="bg-card rounded-3xl p-8 md:p-12 shadow-card space-y-6">
            <h3 className="font-display text-3xl font-bold text-primary">How We Started</h3>
            <p className="text-lg text-foreground leading-relaxed">
              Kids Plate Pals was born out of the real need of parents who wanted to offer healthy 
              and practical meals for their children. We realized there was a gap in the Canadian market 
              for frozen products that were both nutritious, allergy-free, and fun for kids.
            </p>
            <p className="text-lg text-foreground leading-relaxed">
              Today, our products are the favorite choice of families and daycare centers across Canada, 
              helping make mealtime easier, healthier, and more fun.
            </p>
          </div>

          {/* CTA Section */}
          <div className="text-center space-y-6 pt-8">
            <h3 className="font-display text-3xl font-bold text-foreground">
              Join Our Family
            </h3>
            <p className="text-lg text-muted-foreground">
              Be part of the healthy meals revolution for kids
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button 
                onClick={() => navigate("/#signup")} 
                className="h-14 px-8 text-lg font-bold bg-gradient-hero"
              >
                Join the Waitlist
              </Button>
              <Button 
                onClick={() => navigate("/contact")} 
                variant="outline"
                className="h-14 px-8 text-lg font-semibold"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
