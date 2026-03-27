import { X, Minus, Plus, ShoppingBag } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { Link } from "react-router-dom";

const CartDrawer = () => {
  const { items, removeItem, addItem, totalItems, totalPrice, isOpen, setIsOpen } = useCart();

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-foreground/30 z-50" onClick={() => setIsOpen(false)} />

      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-surface z-50 shadow-xl flex flex-col animate-fade-in">
        <div className="flex items-center justify-between p-5 border-b border-border">
          <h2 className="font-display text-lg font-semibold">Sacola ({totalItems})</h2>
          <button onClick={() => setIsOpen(false)} className="p-1 hover:opacity-70">
            <X className="w-5 h-5" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center gap-4 p-8">
            <ShoppingBag className="w-12 h-12 text-muted-foreground" />
            <p className="font-body text-sm text-muted-foreground">Sua sacola está vazia</p>
            <button onClick={() => setIsOpen(false)} className="btn-outline-elegant text-sm">
              Continuar comprando
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto p-5 space-y-4">
              {items.map((item) => (
                <div key={`${item.product.id}-${item.size}`} className="flex gap-4 border-b border-border pb-4">
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-20 h-24 object-cover bg-surface-elevated"
                  />
                  <div className="flex-1">
                    <p className="font-body text-sm font-medium">{item.product.name}</p>
                    <p className="font-body text-xs text-muted-foreground mt-0.5">Tam: {item.size}</p>
                    <p className="font-body text-sm font-medium mt-1">R$ {item.product.price.toFixed(2)}</p>
                    <div className="flex items-center gap-3 mt-2">
                      <span className="font-body text-xs text-muted-foreground">Qtd: {item.quantity}</span>
                      <button
                        onClick={() => removeItem(item.product.id, item.size)}
                        className="font-body text-[10px] text-muted-foreground underline hover:text-foreground"
                      >
                        Remover
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-border p-5 space-y-3">
              <div className="flex justify-between">
                <span className="font-body text-sm">Total</span>
                <span className="font-display text-lg font-semibold">R$ {totalPrice.toFixed(2)}</span>
              </div>
              <button className="btn-cta w-full">Finalizar compra</button>
              <button onClick={() => setIsOpen(false)} className="w-full text-center font-body text-xs text-muted-foreground underline hover:text-foreground">
                Continuar comprando
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
