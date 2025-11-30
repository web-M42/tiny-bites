import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

export const Products = () => {
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      name: "Cotoletas de Frango - Formato Leão",
      description: "Cotoletas de frango 100% natural em formato de leão, livres de glúten, laticínios e nozes.",
      price: "12.99",
      servings: "6 unidades",
      image: "🦁"
    },
    {
      id: 2,
      name: "Cotoletas de Frango - Formato Raposa",
      description: "Deliciosas cotoletas em formato de raposa, perfeitas para pequenos aventureiros.",
      price: "12.99",
      servings: "6 unidades",
      image: "🦊"
    },
    {
      id: 3,
      name: "Mix de Vegetais Divertidos",
      description: "Brócolis e cenouras selecionadas, fáceis de preparar e super nutritivas.",
      price: "8.99",
      servings: "8 porções",
      image: "🥦"
    },
    {
      id: 4,
      name: "Combo Família Aventureira",
      description: "Pacote completo com 12 cotoletas variadas e vegetais para toda a semana.",
      price: "29.99",
      servings: "12 refeições",
      image: "🎁"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 space-y-4">
          <h2 className="font-display text-4xl font-bold text-foreground md:text-5xl">
            Nossos Produtos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Refeições nutritivas e divertidas que as crianças adoram e os pais confiam
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-12">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden hover:shadow-card transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="text-6xl mb-4">{product.image}</div>
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
                  Comprar Agora
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="bg-card rounded-3xl p-8 md:p-12 shadow-card">
          <div className="text-center space-y-6">
            <h3 className="font-display text-3xl font-bold text-foreground">
              Por Que Escolher Kids Plate Pals?
            </h3>
            <div className="grid gap-6 md:grid-cols-3 mt-8">
              <div className="space-y-3">
                <div className="text-4xl">🌱</div>
                <h4 className="font-semibold text-lg">100% Natural</h4>
                <p className="text-sm text-muted-foreground">
                  Ingredientes limpos e naturais, sem aditivos ou conservantes artificiais
                </p>
              </div>
              <div className="space-y-3">
                <div className="text-4xl">🛡️</div>
                <h4 className="font-semibold text-lg">Livre de Alergias</h4>
                <p className="text-sm text-muted-foreground">
                  Sem glúten, laticínios, nozes e soja - seguro para todos
                </p>
              </div>
              <div className="space-y-3">
                <div className="text-4xl">⚡</div>
                <h4 className="font-semibold text-lg">Rápido e Fácil</h4>
                <p className="text-sm text-muted-foreground">
                  Pronto em minutos - perfeito para o dia a dia corrido
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
