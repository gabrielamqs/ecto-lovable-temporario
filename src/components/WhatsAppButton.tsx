import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <a
    href="https://wa.me/5511999999999?text=Olá! Gostaria de mais informações sobre a Ecto."
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Fale conosco pelo WhatsApp"
    className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-[hsl(142,70%,40%)] hover:bg-[hsl(142,70%,35%)] text-white rounded-full flex items-center justify-center shadow-lg transition-colors duration-200"
  >
    <MessageCircle className="w-6 h-6" />
  </a>
);

export default WhatsAppButton;
