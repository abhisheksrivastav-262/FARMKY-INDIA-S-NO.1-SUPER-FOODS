import { useEffect, useState, type FormEvent } from "react";
import { ArrowRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FARMKY_PHONE_NUMBER } from "@/lib/contact";

export const ORDER_PRODUCTS = [
  "Premium Makhana · Foxnut | Gorgon Nut · 250g",
  "Premium Roasted Makhanas · Tomato Flavour · ₹10 pack",
  "Premium Roasted Makhanas · Achari Flavour · ₹10 pack",
  "Premium Roasted Makhanas · Tomato Flavour · ₹20 pack",
  "Premium Roasted Makhanas · Achari Flavour · ₹20 pack",
];

const ORDER_EVENT = "farmky:open-order";

export function OrderNowButton({ product }: { product: string }) {
  return <Button className="catalog-order-button" onClick={() => window.dispatchEvent(new CustomEvent(ORDER_EVENT, { detail: product }))}>Order Now <ArrowRight aria-hidden="true" /></Button>;
}

export function ProductOrderDialog() {
  const [product, setProduct] = useState(ORDER_PRODUCTS[0]);
  const [isOpen, setIsOpen] = useState(false);
  const [whatsAppLink, setWhatsAppLink] = useState("");

  useEffect(() => {
    const openOrder = (event: Event) => {
      const chosenProduct = (event as CustomEvent<string>).detail;
      if (ORDER_PRODUCTS.includes(chosenProduct)) setProduct(chosenProduct);
      setWhatsAppLink("");
      setIsOpen(true);
    };
    window.addEventListener(ORDER_EVENT, openOrder);
    return () => window.removeEventListener(ORDER_EVENT, openOrder);
  }, []);

  const submitOrder = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const fields = [
      "New FARMKY website order request", "",
      `Full name: ${String(data.get("name") ?? "").trim()}`,
      `Mobile number: ${String(data.get("phone") ?? "").trim()}`,
      `Email address: ${String(data.get("email") ?? "").trim()}`,
      `Product: ${String(data.get("product") ?? "")}`,
      `Quantity: ${String(data.get("quantity") ?? "")}`,
      `Delivery address: ${String(data.get("address") ?? "").trim()}`,
      `Additional notes: ${String(data.get("notes") ?? "").trim() || "None"}`,
    ].join("\n");
    const url = `https://wa.me/${FARMKY_PHONE_NUMBER}?text=${encodeURIComponent(fields)}`;
    setWhatsAppLink(url);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  if (!isOpen) return null;
  return <div className="order-modal-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setIsOpen(false); }}>
    <section className="order-modal" role="dialog" aria-modal="true" aria-labelledby="order-form-title">
      <Button className="order-modal-close" variant="outline" size="icon" onClick={() => setIsOpen(false)} aria-label="Close order form"><X /></Button>
      <span className="eyebrow">FARMKY order request</span><h2 id="order-form-title" className="section-title">Where should we send it?</h2><p className="order-modal-intro">Confirm your product and quantity, then share your delivery details.</p>
      <form className="order-form" onSubmit={submitOrder}>
        <label className="form-field"><span className="form-label">Full name</span><input className="form-control" name="name" autoComplete="name" required /></label>
        <label className="form-field"><span className="form-label">Mobile number</span><input className="form-control" name="phone" type="tel" autoComplete="tel" pattern="[+0-9() .-]{7,20}" required /></label>
        <label className="form-field form-field-wide"><span className="form-label">Email address</span><input className="form-control" name="email" type="email" autoComplete="email" required /></label>
        <label className="form-field form-field-wide"><span className="form-label">Product</span><select className="form-control" name="product" value={product} onChange={(event) => setProduct(event.target.value)} required>{ORDER_PRODUCTS.map((item) => <option key={item} value={item}>{item}</option>)}</select></label>
        <label className="form-field"><span className="form-label">Quantity (packs)</span><select className="form-control" name="quantity" defaultValue="1" required>{Array.from({ length: 20 }, (_, index) => <option key={index + 1} value={index + 1}>{index + 1}</option>)}</select></label>
        <label className="form-field form-field-wide"><span className="form-label">Delivery address</span><textarea className="form-control" name="address" autoComplete="street-address" required /></label>
        <label className="form-field form-field-wide"><span className="form-label">Additional notes (optional)</span><input className="form-control" name="notes" placeholder="Landmark or delivery instructions" /></label>
        <Button className="form-submit" type="submit">Continue on WhatsApp <ArrowRight aria-hidden="true" /></Button>
        {whatsAppLink && <p className="form-status" aria-live="polite">WhatsApp draft prepared. Review the details and tap Send to place your request. <a href={whatsAppLink} target="_blank" rel="noreferrer">Open WhatsApp</a></p>}
      </form>
    </section>
  </div>;
}
