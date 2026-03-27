import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const sizes = [
  { label: "PP", busto: "76–80", cintura: "58–62", quadril: "82–86" },
  { label: "32", busto: "78–82", cintura: "60–64", quadril: "84–88" },
  { label: "34", busto: "82–86", cintura: "64–68", quadril: "88–92" },
];

const GuiaTamanhosPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <section className="container py-12 md:py-20 max-w-3xl mx-auto">
        <h1 className="font-display text-3xl md:text-4xl font-medium mb-2">Guia de Tamanhos</h1>
        <p className="font-body text-sm text-muted-foreground mb-10">
          Nossas peças são desenhadas com modelagem exclusiva para corpos magros. Confira as medidas abaixo para encontrar o seu tamanho ideal.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full font-body text-sm border border-border">
            <thead>
              <tr className="bg-surface-elevated">
                <th className="text-left px-5 py-3 font-medium border-b border-border">Tamanho</th>
                <th className="text-left px-5 py-3 font-medium border-b border-border">Busto (cm)</th>
                <th className="text-left px-5 py-3 font-medium border-b border-border">Cintura (cm)</th>
                <th className="text-left px-5 py-3 font-medium border-b border-border">Quadril (cm)</th>
              </tr>
            </thead>
            <tbody>
              {sizes.map((s) => (
                <tr key={s.label} className="border-b border-border last:border-b-0">
                  <td className="px-5 py-3 font-medium">{s.label}</td>
                  <td className="px-5 py-3 text-muted-foreground">{s.busto}</td>
                  <td className="px-5 py-3 text-muted-foreground">{s.cintura}</td>
                  <td className="px-5 py-3 text-muted-foreground">{s.quadril}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-10 space-y-4">
          <h2 className="font-display text-xl font-medium">Como medir</h2>
          <div className="font-body text-sm text-muted-foreground space-y-2">
            <p><strong className="text-foreground">Busto:</strong> Meça a circunferência na parte mais larga do busto, mantendo a fita reta nas costas.</p>
            <p><strong className="text-foreground">Cintura:</strong> Meça na parte mais fina do tronco, geralmente acima do umbigo.</p>
            <p><strong className="text-foreground">Quadril:</strong> Meça na parte mais larga do quadril, mantendo a fita reta.</p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default GuiaTamanhosPage;
