import { Link } from "react-router-dom";
import { NavItem } from "@/data/navigation";

interface DesktopDropdownProps {
  items: NavItem[];
}

/** SRP: Renders only the dropdown panel for desktop nav */
export const DesktopDropdown = ({ items }: DesktopDropdownProps) => (
  <div className="absolute top-full left-1/2 -translate-x-1/2 bg-surface border border-border shadow-lg min-w-[220px] animate-slide-down">
    <div className="py-3">
      {items.map((child) => (
        <Link
          key={child.href}
          to={child.href}
          className="block px-6 py-2.5 font-body text-sm text-foreground/70 hover:text-foreground hover:bg-muted transition-colors"
        >
          {child.label}
        </Link>
      ))}
    </div>
  </div>
);
