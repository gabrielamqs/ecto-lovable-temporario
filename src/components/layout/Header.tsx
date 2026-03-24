import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Heart, ShoppingBag, Menu, X, User, ChevronDown } from "lucide-react";
import { navigationData, NavItem } from "@/data/navigation";
import { MobileMenu } from "./MobileMenu";
import { DesktopDropdown } from "./DesktopDropdown";

/**
 * Header component — SRP: handles only top-level layout and state orchestration.
 * Navigation data is injected from a separate module (OCP: open for extension).
 */
const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Only show first 4 nav items in header (Minha Conta goes to icon)
  const mainNav = navigationData.slice(0, 4);

  return (
    <header className="sticky top-0 z-50 bg-surface border-b border-border">
      {/* Top bar */}
      <div className="bg-foreground text-primary-foreground text-center py-1.5 px-4">
        <p className="font-body text-[10px] tracking-[0.25em] uppercase">
          Frete grátis para compras acima de R$ 299
        </p>
      </div>

      {/* Main header */}
      <div className="container flex items-center justify-between h-14 md:h-16">
        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 -ml-2"
          aria-label="Menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

        {/* Logo */}
        <Link to="/" className="font-display text-2xl md:text-3xl font-semibold tracking-tight">
          ECTO
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8" onMouseLeave={() => setActiveDropdown(null)}>
          {mainNav.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => setActiveDropdown(item.label)}
            >
              <Link
                to={item.href}
                className="nav-link flex items-center gap-1 py-5"
              >
                {item.label}
                {item.children && <ChevronDown className="w-3 h-3" />}
              </Link>
              {item.children && activeDropdown === item.label && (
                <DesktopDropdown items={item.children} />
              )}
            </div>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3 md:gap-4">
          <button aria-label="Buscar" className="p-1.5 hover:opacity-70 transition-opacity">
            <Search className="w-[18px] h-[18px]" />
          </button>
          <Link to="/conta" aria-label="Minha Conta" className="hidden md:block p-1.5 hover:opacity-70 transition-opacity">
            <User className="w-[18px] h-[18px]" />
          </Link>
          <Link to="/conta/desejos" aria-label="Lista de Desejos" className="p-1.5 hover:opacity-70 transition-opacity">
            <Heart className="w-[18px] h-[18px]" />
          </Link>
          <button aria-label="Sacola" className="p-1.5 hover:opacity-70 transition-opacity relative">
            <ShoppingBag className="w-[18px] h-[18px]" />
            <span className="absolute -top-0.5 -right-0.5 bg-rose-dark text-primary-foreground text-[9px] font-body font-semibold rounded-full w-4 h-4 flex items-center justify-center">
              0
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && <MobileMenu items={navigationData} onClose={() => setMobileOpen(false)} />}
    </header>
  );
};

export default Header;
