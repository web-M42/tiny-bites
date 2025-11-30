import logoImage from "@/assets/logo.png";
import { NavLink } from "./NavLink";

export const Footer = () => {
  return (
    <footer className="bg-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src={logoImage} alt="Kids Plate Pals" className="h-12 w-12 rounded-full" />
            <div>
              <h3 className="font-display text-xl font-bold text-background">Kids Plate Pals</h3>
              <p className="text-xs text-background/70 uppercase tracking-wide">Healthy Meals for Adventurous Eaters</p>
            </div>
          </div>

          {/* Tagline */}
          <p className="text-background/80 max-w-md">
            Trazendo alegria e nutrição para famílias canadenses, uma refeição de cada vez.
          </p>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-background/70">
            <NavLink to="/about">Sobre Nós</NavLink>
            <NavLink to="/contact">Contato</NavLink>
            <NavLink to="/auth">Login</NavLink>
            <a href="#produtos" className="hover:text-background transition-colors">Produtos</a>
            <a href="#" className="hover:text-background transition-colors">Política de Privacidade</a>
          </div>

          {/* Copyright */}
          <div className="border-t border-background/20 pt-6 w-full">
            <p className="text-xs text-background/60">
              © 2025 Kids Plate Pals. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
