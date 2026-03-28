import { useState } from "react";
import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

export interface Product {
  id: string;
  name: string;
  description?: string;
  price: number;
  originalPrice?: number;
  image: string;
  hoverImage?: string;
  sizes: string[];
  isNew?: boolean;
  category?: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [liked, setLiked] = useState(false);
  const [hovered, setHovered] = useState(false);

  const displayImage = hovered && product.hoverImage ? product.hoverImage : product.image;

  return (
    <div className="group">
      <Link
        to={`/produto/${product.id}`}
        className="block relative overflow-hidden bg-surface-elevated aspect-[3/4]"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <img
          src={displayImage}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        {product.isNew && (
          <span className="absolute top-3 left-3 bg-foreground text-primary-foreground font-body text-[9px] tracking-[0.2em] uppercase px-2.5 py-1">
            Novo
          </span>
        )}
        <button
          onClick={(e) => { e.preventDefault(); setLiked(!liked); }}
          className="absolute top-3 right-3 p-2 bg-surface/80 backdrop-blur-sm hover:bg-surface transition-colors"
          aria-label="Adicionar aos favoritos"
        >
          <Heart className={`w-4 h-4 ${liked ? "fill-rose-dark text-rose-dark" : "text-foreground/60"}`} />
        </button>
        <div className="absolute bottom-0 left-0 right-0 bg-surface/90 backdrop-blur-sm py-2 px-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <div className="flex justify-center gap-2">
            {product.sizes.map((s) => (
              <span key={s} className="font-body text-[10px] tracking-wider uppercase">{s}</span>
            ))}
          </div>
        </div>
      </Link>
      <div className="mt-3">
        <Link to={`/produto/${product.id}`}>
          <h3 className="font-body text-sm font-normal leading-tight">{product.name}</h3>
        </Link>
        {product.description && (
          <p className="font-body text-xs text-muted-foreground mt-0.5 line-clamp-1">{product.description}</p>
        )}
        <div className="flex items-center gap-2 mt-1">
          {product.originalPrice && (
            <span className="font-body text-xs text-muted-foreground line-through">
              R$ {product.originalPrice.toFixed(2)}
            </span>
          )}
          <span className="font-body text-sm font-medium">
            R$ {product.price.toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
