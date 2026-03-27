import { Product } from "@/components/product/ProductCard";
import { Review } from "@/components/product/ReviewCard";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";

// ── Produtos ──────────────────────────────────────────────
export const allProducts: Product[] = [
  // Blazer
  { id: "blazer-alfaiataria", name: "Blazer Alfaiataria Slim", price: 289.90, originalPrice: 349.90, image: product1, sizes: ["PP", "32", "34"], isNew: true, category: "casacos-jaquetas" },
  // Vestido
  { id: "vestido-midi", name: "Vestido Midi Alças Finas", price: 199.90, image: product2, sizes: ["PP", "32", "34"], isNew: true, category: "vestidos" },
  // Calça
  { id: "calca-ecto-fit", name: "Calça Jeans Ecto Fit Skinny", price: 229.90, image: product3, sizes: ["32", "34"], category: "calcas-jeans" },
  // Camisa
  { id: "camisa-seda", name: "Camisa de Seda com Cinto", price: 259.90, originalPrice: 319.90, image: product4, sizes: ["PP", "32", "34"], category: "blusas-camisas" },
  // Vestido curto
  { id: "vestido-curto-linho", name: "Vestido Curto em Linho", price: 179.90, image: product2, sizes: ["PP", "32"], isNew: true, category: "vestidos" },
  // Blusa
  { id: "blusa-cropped-canelada", name: "Blusa Cropped Canelada", price: 89.90, image: product4, sizes: ["PP", "32", "34"], category: "blusas-camisas" },
  // Saia
  { id: "saia-midi-plissada", name: "Saia Midi Plissada", price: 159.90, image: product2, sizes: ["PP", "32", "34"], category: "saias-shorts" },
  // Short
  { id: "short-alfaiataria", name: "Short Alfaiataria Cintura Alta", price: 139.90, originalPrice: 169.90, image: product3, sizes: ["PP", "32"], category: "saias-shorts" },
  // Casaco
  { id: "jaqueta-couro-eco", name: "Jaqueta de Couro Ecológico", price: 349.90, image: product1, sizes: ["PP", "32", "34"], isNew: true, category: "casacos-jaquetas" },
  // Conjunto
  { id: "conjunto-tricot", name: "Conjunto Tricot Calça e Blusa", price: 279.90, originalPrice: 329.90, image: product4, sizes: ["PP", "32"], category: "conjuntos" },
  // Calça wide
  { id: "calca-wide-leg", name: "Calça Wide Leg Alfaiataria", price: 219.90, image: product3, sizes: ["PP", "32", "34"], category: "calcas-jeans" },
  // Vestido longo
  { id: "vestido-longo-cetim", name: "Vestido Longo Cetim", price: 329.90, image: product2, sizes: ["32", "34"], isNew: true, category: "vestidos" },
  // Blusa manga longa
  { id: "blusa-manga-bufante", name: "Blusa Manga Bufante", price: 119.90, image: product4, sizes: ["PP", "32", "34"], category: "blusas-camisas" },
  // Conjunto saia
  { id: "conjunto-saia-top", name: "Conjunto Saia e Top Linho", price: 249.90, image: product2, sizes: ["PP", "32"], category: "conjuntos" },
  // Trench coat
  { id: "trench-coat-classico", name: "Trench Coat Clássico", price: 399.90, originalPrice: 459.90, image: product1, sizes: ["PP", "32", "34"], category: "casacos-jaquetas" },
  // Saia mini
  { id: "saia-mini-jeans", name: "Saia Mini Jeans", price: 129.90, image: product3, sizes: ["PP", "32", "34"], category: "saias-shorts" },
];

// Backwards-compatible export
export const mockProducts = allProducts.slice(0, 4);

// Helper to get products by category
export const getProductsByCategory = (category: string): Product[] =>
  allProducts.filter((p) => p.category === category);

// Curated lists for Novidades sub-pages
export const lancamentos = allProducts.filter((p) => p.isNew);
export const outonoinverno = [allProducts[0], allProducts[8], allProducts[14], allProducts[9]];
export const maisVendidos = [allProducts[2], allProducts[3], allProducts[6], allProducts[10]];

// ── Reviews (condizentes com cada produto) ────────────────
export const reviewsByProduct: Record<string, Review[]> = {
  "blazer-alfaiataria": [
    { id: "r1", name: "Fernanda M.", rating: 5, height: "1,65m", weight: "48kg", sizeOrdered: "PP", comment: "O blazer caiu perfeitamente nos ombros, sem precisar ajustar nada. Tecido de ótima qualidade.", date: "15/03/2026" },
    { id: "r2", name: "Juliana P.", rating: 4, height: "1,70m", weight: "52kg", sizeOrdered: "32", comment: "Amei o caimento! Ficou levemente folgado na cintura mas nada que incomode. Muito elegante.", date: "10/03/2026" },
  ],
  "vestido-midi": [
    { id: "r3", name: "Carolina L.", rating: 5, height: "1,72m", weight: "54kg", sizeOrdered: "34", comment: "O vestido ficou lindo, comprimento perfeito para minha altura. As alças finas são delicadas e femininas.", date: "08/03/2026" },
    { id: "r4", name: "Beatriz R.", rating: 5, height: "1,60m", weight: "45kg", sizeOrdered: "PP", comment: "Finalmente um vestido midi que não fica arrastando no chão! Caimento impecável.", date: "01/03/2026" },
  ],
  "calca-ecto-fit": [
    { id: "r5", name: "Mariana S.", rating: 5, height: "1,68m", weight: "50kg", sizeOrdered: "32", comment: "Finalmente uma calça que não precisa de ajuste! O caimento ficou perfeito na cintura e no comprimento.", date: "12/03/2026" },
    { id: "r6", name: "Ana Clara T.", rating: 4, height: "1,58m", weight: "44kg", sizeOrdered: "32", comment: "A calça jeans é incrível, o tecido tem elasticidade na medida certa. Só precisei dobrar um pouco a barra.", date: "05/03/2026" },
  ],
  "camisa-seda": [
    { id: "r7", name: "Luísa F.", rating: 5, height: "1,63m", weight: "47kg", sizeOrdered: "PP", comment: "A seda é maravilhosa e o cinto dá um toque sofisticado. Perfeita para o escritório.", date: "09/03/2026" },
    { id: "r8", name: "Isabela G.", rating: 4, height: "1,75m", weight: "55kg", sizeOrdered: "34", comment: "Material excelente e acabamento impecável. O comprimento ficou ótimo.", date: "03/03/2026" },
  ],
  "vestido-curto-linho": [
    { id: "r9", name: "Beatriz R.", rating: 5, height: "1,60m", weight: "45kg", sizeOrdered: "PP", comment: "O linho é fresquinho e o corte é perfeito. Ideal para dias quentes!", date: "14/03/2026" },
  ],
  "blusa-cropped-canelada": [
    { id: "r10", name: "Mariana S.", rating: 5, height: "1,68m", weight: "50kg", sizeOrdered: "32", comment: "A blusa cropped tem o comprimento ideal, não fica curta demais. Tecido confortável.", date: "11/03/2026" },
  ],
  "saia-midi-plissada": [
    { id: "r11", name: "Carolina L.", rating: 5, height: "1,72m", weight: "54kg", sizeOrdered: "34", comment: "A saia plissada é elegantíssima! O caimento é leve e feminino.", date: "07/03/2026" },
  ],
  "calca-wide-leg": [
    { id: "r12", name: "Ana Clara T.", rating: 4, height: "1,58m", weight: "44kg", sizeOrdered: "32", comment: "A calça wide leg ficou linda, mas precisei usar salto por causa da minha altura. Tecido excelente!", date: "06/03/2026" },
  ],
  "jaqueta-couro-eco": [
    { id: "r13", name: "Juliana P.", rating: 5, height: "1,70m", weight: "52kg", sizeOrdered: "32", comment: "A jaqueta é perfeita! Não fica sobrando nos ombros como costuma acontecer. Amei!", date: "13/03/2026" },
  ],
  "conjunto-tricot": [
    { id: "r14", name: "Luísa F.", rating: 4, height: "1,63m", weight: "47kg", sizeOrdered: "PP", comment: "O conjunto é lindo e quentinho. Perfeito para os dias mais frios.", date: "02/03/2026" },
  ],
};

// Fallback for products without specific reviews
export const getReviewsForProduct = (productId: string): Review[] =>
  reviewsByProduct[productId] || [];

// Legacy export
export const mockReviews = reviewsByProduct["calca-ecto-fit"] || [];
