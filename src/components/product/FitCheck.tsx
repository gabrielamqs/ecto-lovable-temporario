import { useState } from "react";
import { Ruler, X } from "lucide-react";

interface FitResult {
  recommendedSize: string;
  waistFit: string;
  hipFit: string;
  legFit?: string;
}

/**
 * FitCheck — Feature principal do Ecto.
 * SRP: Gerencia apenas a lógica de recomendação de tamanho.
 * OCP: O algoritmo de recomendação pode ser substituído via service/API sem alterar o componente.
 */
const FitCheck = () => {
  const [open, setOpen] = useState(false);
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bust, setBust] = useState("");
  const [waist, setWaist] = useState("");
  const [hip, setHip] = useState("");
  const [result, setResult] = useState<FitResult | null>(null);

  const handleCheck = () => {
    // Lógica simplificada — em produção, chamaria um service/API
    const waistNum = parseFloat(waist);
    let size = "PP";
    if (waistNum >= 68) size = "34";
    else if (waistNum >= 64) size = "32";
    else size = "PP";

    setResult({
      recommendedSize: size,
      waistFit: waistNum <= 62 ? "Ajustado" : "Confortável",
      hipFit: parseFloat(hip) <= 88 ? "Ajustado" : "Confortável",
      legFit: "Regular",
    });
  };

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        className="w-full flex items-center justify-center gap-2 py-3.5 border-2 border-dashed border-rose-dark/40 text-rose-dark font-body text-sm tracking-wider hover:border-rose-dark hover:bg-accent/30 transition-all duration-200"
      >
        <Ruler className="w-4 h-4" />
        FitCheck — Descubra seu tamanho ideal
      </button>
    );
  }

  return (
    <div className="border border-border bg-surface-elevated p-5 animate-fade-in">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-display text-lg font-semibold">FitCheck</h3>
        <button onClick={() => { setOpen(false); setResult(null); }} className="p-1 hover:opacity-70">
          <X className="w-4 h-4" />
        </button>
      </div>
      <p className="font-body text-xs text-muted-foreground mb-4">
        Insira suas medidas para uma recomendação precisa de tamanho.
      </p>

      <div className="grid grid-cols-2 gap-3 mb-4">
        {[
          { label: "Altura (cm)", value: height, set: setHeight, placeholder: "165" },
          { label: "Peso (kg)", value: weight, set: setWeight, placeholder: "52" },
          { label: "Busto (cm)", value: bust, set: setBust, placeholder: "80" },
          { label: "Cintura (cm)", value: waist, set: setWaist, placeholder: "62" },
          { label: "Quadril (cm)", value: hip, set: setHip, placeholder: "88" },
        ].map((field) => (
          <div key={field.label}>
            <label className="font-body text-[11px] text-muted-foreground block mb-1">{field.label}</label>
            <input
              type="number"
              value={field.value}
              onChange={(e) => field.set(e.target.value)}
              placeholder={field.placeholder}
              className="w-full h-10 px-3 bg-surface border border-input font-body text-sm focus:outline-none focus:border-foreground transition-colors"
            />
          </div>
        ))}
      </div>

      <button
        onClick={handleCheck}
        disabled={!waist || !hip}
        className="btn-cta w-full disabled:opacity-40 disabled:cursor-not-allowed"
      >
        Ver meu tamanho
      </button>

      {result && (
        <div className="mt-4 p-4 bg-accent/40 border border-accent animate-fade-in">
          <p className="font-display text-xl font-semibold mb-2">
            Tamanho recomendado: <span className="text-rose-dark">{result.recommendedSize}</span>
          </p>
          <div className="grid grid-cols-3 gap-2">
            {[
              { label: "Cintura", value: result.waistFit },
              { label: "Quadril", value: result.hipFit },
              { label: "Perna", value: result.legFit },
            ].map((fit) => (
              <div key={fit.label} className="text-center">
                <p className="font-body text-[10px] text-muted-foreground uppercase tracking-wider">{fit.label}</p>
                <p className="font-body text-sm font-medium">{fit.value}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FitCheck;
