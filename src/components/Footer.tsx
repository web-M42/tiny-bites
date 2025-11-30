import logoIcon from "@/assets/logo-icon.png";

export const Footer = () => {
  return (
    <footer className="bg-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src={logoIcon} alt="HappyCub Meals" className="h-10 w-10" />
            <div>
              <h3 className="font-display text-xl font-bold text-background">HappyCub Meals</h3>
              <p className="text-xs text-background/70">Refeições que fazem sorrir</p>
            </div>
          </div>

          {/* Tagline */}
          <p className="text-background/80 max-w-md">
            Trazendo alegria e nutrição para famílias canadenses, uma refeição de cada vez.
          </p>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-background/70">
            <a href="#" className="hover:text-background transition-colors">Sobre Nós</a>
            <a href="#" className="hover:text-background transition-colors">Ingredientes</a>
            <a href="#" className="hover:text-background transition-colors">Nutrição</a>
            <a href="#" className="hover:text-background transition-colors">Contato</a>
            <a href="#" className="hover:text-background transition-colors">Política de Privacidade</a>
          </div>

          {/* Copyright */}
          <div className="border-t border-background/20 pt-6 w-full">
            <p className="text-xs text-background/60">
              © 2025 HappyCub Meals. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
