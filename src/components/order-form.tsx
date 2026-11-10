import { useState, type FormEvent } from "react";
import { ArrowRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import premiumMakhanaFront from "@/assets/products/premium-makhana-250g-front.webp";
import { FARMKY_PHONE_NUMBER } from "@/lib/contact";

export function HomeOrderCard() {
  const [isOpen, setIsOpen] = useState(false);
  const [whatsAppLink, setWhatsAppLink] = useState("");
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

  return <>
    <section className="home-order-section section-space" aria-labelledby="home-order-title">
      <div className="page-width home-order-card">
        <div className="home-order-image"><img src={premiumMakhanaFront} alt="FARMKY Premium Makhana pouch, Foxnut | Gorgon Nut, 250g" loading="lazy" /></div>
        <div className="home-order-copy"><span className="eyebrow">FARMKY Premium Makhana</span><h2 id="home-order-title" className="section-title">A good snack, ready for your day.</h2><p className="section-copy">Premium Makhana · Foxnut | Gorgon Nut · 250g</p><p className="section-copy order-description">Share your delivery details and preferred quantity. Your order request will open in WhatsApp for you to review and send.</p><Button className="hero-button" onClick={() => { setWhatsAppLink(""); setIsOpen(true); }}>Order Now <ArrowRight aria-hidden="true" /></Button></div>
      </div>
    </section>
    {isOpen && <div className="order-modal-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setIsOpen(false); }}>
      <section className="order-modal" role="dialog" aria-modal="true" aria-labelledby="order-form-title">
        <Button className="order-modal-close" variant="outline" size="icon" onClick={() => setIsOpen(false)} aria-label="Close order form"><X /></Button>
        <span className="eyebrow">FARMKY order request</span><h2 id="order-form-title" className="section-title">Where should we send it?</h2><p className="order-modal-intro">Fill in your details and we’ll prepare your request in WhatsApp.</p>
        <form className="order-form" onSubmit={submitOrder}>
          <label className="form-field"><span className="form-label">Full name</span><input className="form-control" name="name" autoComplete="name" required /></label>
          <label className="form-field"><span className="form-label">Mobile number</span><input className="form-control" name="phone" type="tel" autoComplete="tel" pattern="[+0-9() .-]{7,20}" required /></label>
          <label className="form-field form-field-wide"><span className="form-label">Email address</span><input className="form-control" name="email" type="email" autoComplete="email" required /></label>
          <label className="form-field"><span className="form-label">Product</span><select className="form-control" name="product" defaultValue="Premium Makhana · Foxnut | Gorgon Nut · 250g"><option>Premium Makhana · Foxnut | Gorgon Nut · 250g</option><option>Premium Roasted Makhanas · Tomato Flavour · ₹10 pack</option><option>Premium Roasted Makhanas · Achari Flavour · ₹10 pack</option><option>Premium Roasted Makhanas · Tomato Flavour · ₹20 pack</option><option>Premium Roasted Makhanas · Achari Flavour · ₹20 pack</option></select></label>
          <label className="form-field"><span className="form-label">Quantity (packs)</span><select className="form-control" name="quantity" defaultValue="1" required>{Array.from({ length: 20 }, (_, index) => <option key={index + 1} value={index + 1}>{index + 1}</option>)}</select></label>
          <label className="form-field form-field-wide"><span className="form-label">Delivery address</span><textarea className="form-control" name="address" autoComplete="street-address" required /></label>
          <label className="form-field form-field-wide"><span className="form-label">Additional notes (optional)</span><input className="form-control" name="notes" placeholder="Landmark or delivery instructions" /></label>
          <Button className="form-submit" type="submit">Continue on WhatsApp <ArrowRight aria-hidden="true" /></Button>
          {whatsAppLink && <p className="form-status" aria-live="polite">WhatsApp draft prepared. Review the details and tap Send to place your request. <a href={whatsAppLink} target="_blank" rel="noreferrer">Open WhatsApp</a></p>}
        </form>
      </section>
    </div>}
  </>;
}
