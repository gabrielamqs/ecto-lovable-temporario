import { Star } from "lucide-react";

export interface Review {
  id: string;
  name: string;
  rating: number;
  height: string;
  weight: string;
  sizeOrdered: string;
  comment: string;
  date: string;
}

interface ReviewCardProps {
  review: Review;
}

/**
 * ReviewCard — SRP: Renders a single review.
 * DRY: Reusable list item, star rating extracted inline.
 * Includes height/weight as per requirement for social proof.
 */
const ReviewCard = ({ review }: ReviewCardProps) => (
  <div className="border-b border-border py-5 last:border-0">
    <div className="flex items-start justify-between mb-2">
      <div>
        <p className="font-body text-sm font-medium">{review.name}</p>
        <div className="flex gap-0.5 mt-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`w-3.5 h-3.5 ${i < review.rating ? "fill-gold text-gold" : "text-border"}`}
            />
          ))}
        </div>
      </div>
      <span className="font-body text-[11px] text-muted-foreground">{review.date}</span>
    </div>

    {/* Dados biométricos — referência real para outras clientes */}
    <div className="flex gap-4 mt-2 mb-3">
      {[
        { label: "Altura", value: review.height },
        { label: "Peso", value: review.weight },
        { label: "Tam.", value: review.sizeOrdered },
      ].map((stat) => (
        <div key={stat.label} className="flex items-center gap-1">
          <span className="font-body text-[10px] text-muted-foreground uppercase tracking-wider">{stat.label}:</span>
          <span className="font-body text-xs font-medium">{stat.value}</span>
        </div>
      ))}
    </div>

    <p className="font-body text-sm text-foreground/80 leading-relaxed">{review.comment}</p>
  </div>
);

export default ReviewCard;
