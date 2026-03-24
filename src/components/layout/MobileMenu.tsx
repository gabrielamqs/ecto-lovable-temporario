import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { NavItem } from "@/data/navigation";

interface MobileMenuProps {
  items: NavItem[];
  onClose: () => void;
}

/** SRP: Mobile navigation accordion — responsive-only concern */
export const MobileMenu = ({ items, onClose }: MobileMenuProps) => {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <div className="md:hidden absolute top-full left-0 right-0 bg-surface border-b border-border shadow-lg max-h-[80vh] overflow-y-auto animate-slide-down">
      <nav className="py-4">
        {items.map((item) => (
          <div key={item.label}>
            <button
              onClick={() => setExpanded(expanded === item.label ? null : item.label)}
              className="w-full flex items-center justify-between px-6 py-3 font-body text-sm tracking-wider uppercase text-foreground/80"
            >
              {item.label}
              {item.children && (
                <ChevronRight
                  className={`w-4 h-4 transition-transform ${
                    expanded === item.label ? "rotate-90" : ""
                  }`}
                />
              )}
            </button>
            {item.children && expanded === item.label && (
              <div className="bg-muted">
                {item.children.map((child) => (
                  <Link
                    key={child.href}
                    to={child.href}
                    onClick={onClose}
                    className="block px-10 py-2.5 font-body text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
};
