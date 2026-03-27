import { Product } from "@/components/product/ProductCard";
import { Review } from "@/components/product/ReviewCard";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";
import sapato1 from "@/assets/sapato-1.jpg";
import sapato2 from "@/assets/sapato-2.jpg";
import sapato3 from "@/assets/sapato-3.jpg";
import bolsa1 from "@/assets/bolsa-1.jpg";
import bolsa2 from "@/assets/bolsa-2.jpg";
import bolsa3 from "@/assets/bolsa-3.jpg";
import cinto1 from "@/assets/cinto-1.jpg";
import cinto2 from "@/assets/cinto-2.jpg";
import cinto3 from "@/assets/cinto-3.jpg";
import biju1 from "@/assets/biju-1.jpg";
import biju2 from "@/assets/biju-2.jpg";
import biju3 from "@/assets/biju-3.jpg";
import biju4 from "@/assets/biju-4.jpg";

// ── Produtos ──────────────────────────────────────────────
export const allProducts: Product[] = [
  // Roupas
  { id: "blazer-alfaiataria", name: "Blazer Alfaiataria Slim", price: 289.90, originalPrice: 349.90, image: product1, sizes: ["PP", "32", "34"], isNew: true, category: "casacos-jaquetas" },
  { id: "vestido-midi", name: "Vestido Midi Alças Finas", price: 199.90, image: product2, sizes: ["PP", "32", "34"], isNew: true, category: "vestidos" },
  { id: "calca-ecto-fit", name: "Calça Jeans Ecto Fit Skinny", price: 229.90, image: product3, sizes: ["32", "34"], category: "calcas-jeans" },
  { id: "camisa-seda", name: "Camisa de Seda com Cinto", price: 259.90, originalPrice: 319.90, image: product4, sizes: ["PP", "32", "34"], category: "blusas-camisas" },
  { id: "vestido-curto-linho", name: "Vestido Curto em Linho", price: 179.90, image: product2, sizes: ["PP", "32"], isNew: true, category: "vestidos" },
  { id: "blusa-cropped-canelada", name: "Blusa Cropped Canelada", price: 89.90, image: product4, sizes: ["PP", "32", "34"], category: "blusas-camisas" },
  { id: "saia-midi-plissada", name: "Saia Midi Plissada", price: 159.90, image: product2, sizes: ["PP", "32", "34"], category: "saias-shorts" },
  { id: "short-alfaiataria", name: "Short Alfaiataria Cintura Alta", price: 139.90, originalPrice: 169.90, image: product3, sizes: ["PP", "32"], category: "saias-shorts" },
  { id: "jaqueta-couro-eco", name: "Jaqueta de Couro Ecológico", price: 349.90, image: product1, sizes: ["PP", "32", "34"], isNew: true, category: "casacos-jaquetas" },
  { id: "conjunto-tricot", name: "Conjunto Tricot Calça e Blusa", price: 279.90, originalPrice: 329.90, image: product4, sizes: ["PP", "32"], category: "conjuntos" },
  { id: "calca-wide-leg", name: "Calça Wide Leg Alfaiataria", price: 219.90, image: product3, sizes: ["PP", "32", "34"], category: "calcas-jeans" },
  { id: "vestido-longo-cetim", name: "Vestido Longo Cetim", price: 329.90, image: product2, sizes: ["32", "34"], isNew: true, category: "vestidos" },
  { id: "blusa-manga-bufante", name: "Blusa Manga Bufante", price: 119.90, image: product4, sizes: ["PP", "32", "34"], category: "blusas-camisas" },
  { id: "conjunto-saia-top", name: "Conjunto Saia e Top Linho", price: 249.90, image: product2, sizes: ["PP", "32"], category: "conjuntos" },
  { id: "trench-coat-classico", name: "Trench Coat Clássico", price: 399.90, originalPrice: 459.90, image: product1, sizes: ["PP", "32", "34"], category: "casacos-jaquetas" },
  { id: "saia-mini-jeans", name: "Saia Mini Jeans", price: 129.90, image: product3, sizes: ["PP", "32", "34"], category: "saias-shorts" },

  // Sapatos
  { id: "sapatilha-bico-fino", name: "Sapatilha Bico Fino Nude", price: 179.90, image: sapato1, sizes: ["33", "34", "35"], category: "sapatos" },
  { id: "sandalia-salto-bloco", name: "Sandália Salto Bloco Preta", price: 219.90, originalPrice: 269.90, image: sapato2, sizes: ["33", "34", "35"], isNew: true, category: "sapatos" },
  { id: "tenis-couro-branco", name: "Tênis Couro Branco Minimal", price: 199.90, image: sapato3, sizes: ["33", "34", "35"], category: "sapatos" },

  // Bolsas
  { id: "bolsa-estruturada-camel", name: "Bolsa Estruturada Camel", price: 289.90, image: bolsa1, sizes: ["Único"], category: "bolsas" },
  { id: "bolsa-crossbody-preta", name: "Bolsa Crossbody Corrente Dourada", price: 239.90, originalPrice: 289.90, image: bolsa2, sizes: ["Único"], isNew: true, category: "bolsas" },
  { id: "clutch-palha-natural", name: "Clutch Palha Natural", price: 149.90, image: bolsa3, sizes: ["Único"], category: "bolsas" },

  // Cintos
  { id: "cinto-couro-marrom", name: "Cinto Couro Fino Marrom", price: 89.90, image: cinto1, sizes: ["PP", "P"], category: "cintos" },
  { id: "cinto-trancado-preto", name: "Cinto Trançado Preto Ajustável", price: 99.90, image: cinto2, sizes: ["PP", "P"], category: "cintos" },
  { id: "cinto-camurca-camel", name: "Cinto Camurça Fivela Dourada", price: 109.90, originalPrice: 129.90, image: cinto3, sizes: ["PP", "P"], isNew: true, category: "cintos" },

  // Bijuterias
  { id: "brinco-argola-dourada", name: "Brinco Argola Dourada Clássica", price: 49.90, image: biju1, sizes: ["Único"], category: "bijuterias" },
  { id: "colar-correntes-camadas", name: "Colar Correntes em Camadas", price: 69.90, image: biju2, sizes: ["Único"], isNew: true, category: "bijuterias" },
  { id: "brinco-perola-classico", name: "Brinco Pérola Clássico", price: 39.90, image: biju3, sizes: ["Único"], category: "bijuterias" },
  { id: "conjunto-aneis-dourados", name: "Conjunto Anéis Dourados", price: 59.90, originalPrice: 79.90, image: biju4, sizes: ["Único"], category: "bijuterias" },
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

// ── Reviews ────────────────────────────────────────────────
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
  "sapatilha-bico-fino": [
    { id: "r15", name: "Fernanda M.", rating: 5, height: "1,65m", weight: "48kg", sizeOrdered: "34", comment: "Finalmente uma sapatilha que não escapa do pé! O 34 ficou perfeito.", date: "16/03/2026" },
  ],
  "sandalia-salto-bloco": [
    { id: "r16", name: "Carolina L.", rating: 4, height: "1,72m", weight: "54kg", sizeOrdered: "35", comment: "A sandália é linda e confortável, o salto bloco dá segurança. Material excelente.", date: "17/03/2026" },
  ],
  "bolsa-crossbody-preta": [
    { id: "r17", name: "Beatriz R.", rating: 5, height: "1,60m", weight: "45kg", sizeOrdered: "Único", comment: "A bolsa é o tamanho ideal, cabe tudo sem ficar desproporcional no corpo. A corrente dourada é linda!", date: "18/03/2026" },
  ],
  "cinto-camurca-camel": [
    { id: "r18", name: "Mariana S.", rating: 5, height: "1,68m", weight: "50kg", sizeOrdered: "PP", comment: "O cinto é lindo e finalmente encontrei um que não fica sobrando! A fivela dourada é um charme.", date: "19/03/2026" },
  ],
  "colar-correntes-camadas": [
    { id: "r19", name: "Isabela G.", rating: 5, height: "1,75m", weight: "55kg", sizeOrdered: "Único", comment: "O colar é delicado e elegante, perfeito para usar no dia a dia. Qualidade surpreendente!", date: "20/03/2026" },
  ],
};

export const getReviewsForProduct = (productId: string): Review[] =>
  reviewsByProduct[productId] || [];

export const mockReviews = reviewsByProduct["calca-ecto-fit"] || [];
