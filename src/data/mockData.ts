import { Product } from "@/components/product/ProductCard";
import { Review } from "@/components/product/ReviewCard";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";

export const mockProducts: Product[] = [
  {
    id: "blazer-alfaiataria",
    name: "Blazer Alfaiataria Slim",
    price: 289.90,
    originalPrice: 349.90,
    image: product1,
    sizes: ["PP", "32", "34"],
    isNew: true,
  },
  {
    id: "vestido-midi",
    name: "Vestido Midi Alças Finas",
    price: 199.90,
    image: product2,
    sizes: ["PP", "32", "34"],
    isNew: true,
  },
  {
    id: "calca-ecto-fit",
    name: "Calça Jeans Ecto Fit Skinny",
    price: 229.90,
    image: product3,
    sizes: ["32", "34"],
  },
  {
    id: "camisa-seda",
    name: "Camisa de Seda com Cinto",
    price: 259.90,
    originalPrice: 319.90,
    image: product4,
    sizes: ["PP", "32", "34"],
  },
];

export const mockReviews: Review[] = [
  {
    id: "1",
    name: "Mariana S.",
    rating: 5,
    height: "1,68m",
    weight: "50kg",
    sizeOrdered: "PP",
    comment: "Finalmente uma calça que não precisa de ajuste! O caimento ficou perfeito na cintura e no comprimento. Super recomendo.",
    date: "12/03/2026",
  },
  {
    id: "2",
    name: "Carolina L.",
    rating: 4,
    height: "1,72m",
    weight: "54kg",
    sizeOrdered: "34",
    comment: "Material excelente e acabamento impecável. Ficou levemente folgado no quadril, mas nada que incomode.",
    date: "08/03/2026",
  },
  {
    id: "3",
    name: "Beatriz R.",
    rating: 5,
    height: "1,60m",
    weight: "45kg",
    sizeOrdered: "PP",
    comment: "A melhor loja para quem veste PP! Todas as peças que comprei ficaram perfeitas. Vou comprar mais!",
    date: "01/03/2026",
  },
];
