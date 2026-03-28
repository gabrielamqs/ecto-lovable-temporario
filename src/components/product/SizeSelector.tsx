import { Link } from "react-router-dom";

interface Size {
  label: string;
  available: boolean;
}

interface SizeSelectorProps {
  sizes: Size[];
  selected: string | null;
  onSelect: (size: string) => void;
}

const SizeSelector = ({ sizes, selected, onSelect }: SizeSelectorProps) => (
  <div>
    <div className="flex items-center justify-between mb-3">
      <span className="font-body text-xs tracking-[0.15em] uppercase font-medium">
        Tamanho {selected && `— ${selected}`}
      </span>
      <Link
        to="/atendimento/guia-tamanhos"
        className="font-body text-xs text-rose-dark underline underline-offset-2 hover:opacity-70 transition-opacity"
      >
        Guia de medidas
      </Link>
    </div>
    <div className="flex flex-wrap gap-2">
      {sizes.map((size) => (
        <button
          key={size.label}
          disabled={!size.available}
          onClick={() => onSelect(size.label)}
          className={`
            min-w-[48px] h-12 px-4 font-body text-sm border transition-all duration-200
            ${selected === size.label
              ? "bg-foreground text-primary-foreground border-foreground"
              : size.available
                ? "bg-surface border-border hover:border-foreground"
                : "bg-muted border-border text-muted-foreground/40 cursor-not-allowed line-through"
            }
          `}
        >
          {size.label}
        </button>
      ))}
    </div>
  </div>
);

export default SizeSelector;
