import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";


import dish1 from "@/assets/dish1.jpeg";
import dish2 from "@/assets/dish2.jpeg";
import dish3 from "@/assets/dish3.jpeg";
import dish4 from "@/assets/dish4.jpeg";

export const Products = () => {
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      name: "Chicken Cutlets - Lion Shape",
      description: "100% natural chicken cutlets in lion shape, gluten-free, dairy-free, and nut-free.",
      price: "12.99",
      servings: "6 units",
      image: dish1
    },
    {
      id: 2,
      name: "Chicken Cutlets - Fox Shape",
      description: "Delicious cutlets in fox shape, perfect for little adventurers.",
      price: "12.99",
      servings: "6 units",
      image: dish2
    },
    {
      id: 3,
      name: "Fun Veggie Mix",
      description: "Selected broccoli and carrots, easy to prepare and super nutritious.",
      price: "8.99",
      servings: "8 servings",
      image: dish3
    },
    {
      id: 4,
      name: "Family Adventure Combo",
      description: "Complete package with 12 assorted cutlets and veggies for the whole week.",
      price: "29.99",
      servings: "12 meals",
      image: dish4
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 space-y-4">
          <h2 className="font-display text-4xl font-bold text-foreground md:text-5xl">
            Our Products
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Nutritious and fun meals that kids love and parents trust
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-12">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden hover:shadow-card transition-shadow">
                <CardHeader className="text-center pb-4">
                <img src={product.image} alt={product.name} className="w-full h-40 object-cover mb-4 rounded-lg" />
                <CardTitle className="text-xl font-display">{product.name}</CardTitle>
                <CardDescription>{product.servings}</CardDescription>
                </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">{product.description}</p>
                <div className="text-center">
                  <span className="text-3xl font-bold text-primary">CA${product.price}</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button 
                  onClick={() => navigate('/checkout')} 
                  className="w-full bg-gradient-hero font-semibold"
                >
                  Buy Now
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="bg-card rounded-3xl p-8 md:p-12 shadow-card">
          <div className="text-center space-y-6">
            <h3 className="font-display text-3xl font-bold text-foreground">
              Why Choose Kids Plate Pals?
            </h3>
            <div className="grid gap-6 md:grid-cols-3 mt-8">
              <div className="space-y-3">
                <div className="text-4xl">🌱</div>
                <h4 className="font-semibold text-lg">100% Natural</h4>
                <p className="text-sm text-muted-foreground">
                  Clean and natural ingredients, no artificial additives or preservatives
                </p>
              </div>
              <div className="space-y-3">
                <div className="text-4xl">🛡️</div>
                <h4 className="font-semibold text-lg">Allergy-Free</h4>
                <p className="text-sm text-muted-foreground">
                  Free from gluten, dairy, nuts, and soy - safe for everyone
                </p>
              </div>
              <div className="space-y-3">
                <div className="text-4xl">⚡</div>
                <h4 className="font-semibold text-lg">Quick and Easy</h4>
                <p className="text-sm text-muted-foreground">
                  Ready in minutes - perfect for busy days
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
