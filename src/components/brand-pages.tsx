import { useState, type FormEvent, type ReactNode } from "react";
import { ArrowRight, Check, Leaf, Sparkles, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import makhanaImage from "@/assets/farmky-makhana.jpg";
import makhanaPackImage from "@/assets/farmky-makhana-pack.png";

export function metaFor(title: string, description: string) {
  return { meta: [
    { title: `${title} | FARMKY` }, { name: "description", content: description },
    { property: "og:title", content: `${title} | FARMKY` }, { property: "og:description", content: description },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] };
}

export function ContentPage({ eyebrow, title, intro, image = makhanaImage, imageAlt = "FARMKY Premium Makhana", imageFit = "cover", children, cta = "Explore FARMKY", ctaHref = "/contact" }: { eyebrow: string; title: string; intro: string; image?: string; imageAlt?: string; imageFit?: "cover" | "contain"; children: ReactNode; cta?: string; ctaHref?: string }) {
  return <main className="brand-page">
    <section className="page-hero"><div className="page-width page-hero-grid"><div><span className="eyebrow">{eyebrow}</span><h1 className="display-title">{title}</h1><p className="section-copy">{intro}</p><Button asChild className="hero-button"><a href={ctaHref}>{cta}<ArrowRight aria-hidden="true" /></a></Button></div><div className={`page-hero-image ${imageFit === "contain" ? "image-contain" : ""}`}><img src={image} alt={imageAlt} /></div></div></section>
    {children}
  </main>;
}

export function StorySection({ eyebrow, title, text, dark = false }: { eyebrow: string; title: string; text: string; dark?: boolean }) {
  return <section className={`section-space story-section ${dark ? "story-dark" : ""}`}><div className="page-width story-inner"><span className="eyebrow">{eyebrow}</span><h2 className="section-title">{title}</h2><p className="section-copy">{text}</p></div></section>;
}

export function CardGrid({ items }: { items: { title: string; text: string }[] }) {
  return <section className="section-space card-section"><div className="page-width editorial-grid">{items.map((item, index) => <article className="editorial-card" key={item.title}><span className="benefit-number">0{index + 1}</span><h2>{item.title}</h2><p>{item.text}</p></article>)}</div></section>;
}

export function ProductPage() {
  return <ContentPage eyebrow="Our signature product · 250g" title="A little goodness, beautifully packed." intro="Meet FARMKY Premium Makhana: foxnuts, also known as gorgon nuts, presented for the everyday snack moments you make your own." image={makhanaPackImage} imageAlt="FARMKY Premium Makhana 250g package" imageFit="contain" cta="Ask about our product">
    <section className="section-space product-detail-section"><div className="page-width product-detail-grid"><div className="product-detail-photo"><img src={makhanaImage} alt="A bowl of makhana ready to enjoy" loading="lazy" /></div><div><span className="eyebrow">FARMKY Premium Makhana</span><h2 className="section-title">Simple, versatile, ready for your day.</h2><p className="section-copy">A premium food product with a light, delightful character. Enjoy it on its own, add it to a snack bowl, or pair it with your favourite flavours.</p><div className="product-facts"><div className="product-fact"><div className="product-fact-label">Product</div><div className="product-fact-value">Premium Makhana</div></div><div className="product-fact"><div className="product-fact-label">Also known as</div><div className="product-fact-value">Foxnut / Gorgon Nut</div></div><div className="product-fact"><div className="product-fact-label">Net weight</div><div className="product-fact-value">250g</div></div><div className="product-fact"><div className="product-fact-label">Enjoy</div><div className="product-fact-value">Anytime snacking</div></div></div><Button asChild className="hero-button"><a href="/contact">Product enquiry<ArrowRight /></a></Button></div></div></section>
    <CardGrid items={[{ title: "A simple snack", text: "Enjoy a handful as it is for a light, easygoing pause." }, { title: "Make a bowl", text: "Pair makhana with your preferred nuts, seeds, or dried fruit." }, { title: "Find your flavour", text: "Season it at home to suit the moment and your own taste." }]} />
  </ContentPage>;
}

const gallery = [
  { src: makhanaPackImage, alt: "FARMKY Premium Makhana 250g package", label: "The FARMKY pack" },
  { src: makhanaImage, alt: "Bowl of golden makhana on natural green linen", label: "Ready to enjoy" },
];

export function GalleryPage() {
  const [active, setActive] = useState<number | null>(null);
  const selected = active === null ? undefined : gallery[active];
  return <ContentPage eyebrow="FARMKY in focus" title="A closer look at nature’s goodness." intro="Explore FARMKY Premium Makhana and the everyday moments that make a good snack feel special." cta="Enquire about FARMKY">
    <section className="section-space gallery-section"><div className="page-width gallery-grid gallery-page-grid">{gallery.map((item, index) => <button className="gallery-tile" key={item.label} onClick={() => setActive(index)} aria-label={`View ${item.label}`}><img src={item.src} alt={item.alt} loading="lazy"/><span className="gallery-caption">{item.label}</span></button>)}</div></section>
    {selected && <div className="lightbox" role="dialog" aria-modal="true" aria-label={selected.label} onClick={() => setActive(null)}><Button className="lightbox-close" variant="outline" size="icon" aria-label="Close image" onClick={() => setActive(null)}><X /></Button><img src={selected.src} alt={selected.alt} onClick={(event) => event.stopPropagation()} /><span className="image-caption">{selected.label}</span></div>}
  </ContentPage>;
}

export function ContactPage() {
  const [message, setMessage] = useState("");
  const submit = (event: FormEvent<HTMLFormElement>) => { event.preventDefault(); const phone = String(new FormData(event.currentTarget).get("phone") ?? ""); const digitCount = phone.replace(/\D/g, "").length; if (digitCount < 7 || digitCount > 15) { setMessage("Enter a mobile number containing 7–15 digits."); return; } setMessage("Your enquiry is ready, but hasn’t been sent. FARMKY’s verified contact details are needed to receive it."); };
  return <ContentPage eyebrow="We’d love to hear from you" title="Let’s connect with FARMKY." intro="For product, bulk purchase, distribution, or business partnership enquiries, share a few details and prepare a message." cta="Explore the product" ctaHref="/product">
    <section className="contact-section section-space"><div className="page-width contact-layout"><div className="contact-copy"><span className="eyebrow">Business enquiries</span><h2 className="section-title">Tell us what you’re looking for.</h2><p className="section-copy">Your message will be prepared in this form. A receiving email or phone number can be configured when FARMKY provides verified contact details.</p><div className="contact-types"><span>Product</span><span>Bulk purchase</span><span>Distribution</span><span>Partnership</span></div></div><form className="enquiry-form" onSubmit={submit}><label className="form-field"><span className="form-label">Full name</span><input className="form-control" name="name" autoComplete="name" required /></label><label className="form-field"><span className="form-label">Mobile number</span><input className="form-control" name="phone" autoComplete="tel" inputMode="tel" pattern="[+0-9() .-]{7,20}" title="Enter a valid phone number." required /></label><label className="form-field"><span className="form-label">Email address</span><input className="form-control" name="email" type="email" autoComplete="email" required /></label><label className="form-field"><span className="form-label">Enquiry type</span><select className="form-control" name="type" defaultValue="product" required><option value="product">Product enquiry</option><option value="bulk">Bulk purchase</option><option value="distribution">Distribution</option><option value="business">Business partnership</option></select></label><label className="form-field form-field-wide"><span className="form-label">Subject</span><input className="form-control" name="subject" required /></label><label className="form-field form-field-wide"><span className="form-label">Message</span><textarea className="form-control" name="message" required /></label><Button className="form-submit" type="submit">Prepare enquiry<ArrowRight /></Button><p className="form-status" aria-live="polite" data-state={message ? "ready" : "idle"}>{message}</p></form></div></section>
    <CardGrid items={[{ title: "Product enquiry", text: "Ask us about FARMKY Premium Makhana and its presentation." }, { title: "Bulk purchase", text: "Share your requirements for a bulk purchase enquiry." }, { title: "Distribution", text: "Tell us about your market and distribution interest." }]} />
  </ContentPage>;
}

export function PromiseHighlights() { return <div className="promise-highlights"><span><Check size={16} /> Thoughtful product presentation</span><span><Leaf size={16} /> Nature-inspired approach</span><span><Sparkles size={16} /> Made for everyday moments</span></div>; }
