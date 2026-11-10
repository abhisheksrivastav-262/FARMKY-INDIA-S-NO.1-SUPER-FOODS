import { useState, type FormEvent, type ReactNode } from "react";
import { ArrowRight, Check, Leaf, Sparkles, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import makhanaImage from "@/assets/farmky-makhana.jpg";
import makhanaPackImage from "@/assets/farmky-makhana-pack.png";
import { createWhatsAppEnquiryUrl, FARMKY_PHONE_LINK } from "@/lib/contact";
import tomatoRs10Artwork from "@/assets/products/tomato-rs10-artwork.webp";
import achariRs10Artwork from "@/assets/products/achari-rs10-artwork.webp";
import tomatoRs20Artwork from "@/assets/products/tomato-rs20-artwork.webp";
import achariRs20Artwork from "@/assets/products/achari-rs20-artwork.webp";
import tomatoRs10ArtworkAlt from "@/assets/products/tomato-rs10-artwork-alt.webp";
import tomatoRs20ArtworkAlt from "@/assets/products/tomato-rs20-artwork-alt.webp";
import achariRs20ArtworkAlt from "@/assets/products/achari-rs20-artwork-alt.webp";
import premiumMakhanaFront from "@/assets/products/premium-makhana-250g-front.webp";
import premiumMakhanaDetail from "@/assets/products/premium-makhana-250g-detail.webp";

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
    <ProductVariantGallery />
    <CardGrid items={[{ title: "A simple snack", text: "Enjoy a handful as it is for a light, easygoing pause." }, { title: "Make a bowl", text: "Pair makhana with your preferred nuts, seeds, or dried fruit." }, { title: "Find your flavour", text: "Season it at home to suit the moment and your own taste." }]} />
  </ContentPage>;
}

const productVariants = [
  {
    title: "Premium Roasted Makhanas",
    details: "Tomato Flavour · ₹10",
    images: [
      { src: tomatoRs10Artwork, alt: "FARMKY Premium Roasted Makhanas, Tomato Flavour, ₹10 pouch artwork" },
      { src: tomatoRs10ArtworkAlt, alt: "FARMKY Tomato Flavour ₹10 packaging artwork, alternate supplied view" },
    ],
  },
  {
    title: "Premium Roasted Makhanas",
    details: "Achari Flavour · ₹10",
    images: [{ src: achariRs10Artwork, alt: "FARMKY Premium Roasted Makhanas, Achari Flavour, ₹10 pouch artwork" }],
  },
  {
    title: "Premium Roasted Makhanas",
    details: "Tomato Flavour · ₹20",
    images: [
      { src: tomatoRs20Artwork, alt: "FARMKY Premium Roasted Makhanas, Tomato Flavour, ₹20 pouch artwork" },
      { src: tomatoRs20ArtworkAlt, alt: "FARMKY Tomato Flavour ₹20 packaging artwork, alternate supplied view" },
    ],
  },
  {
    title: "Premium Roasted Makhanas",
    details: "Achari Flavour · ₹20",
    images: [
      { src: achariRs20Artwork, alt: "FARMKY Premium Roasted Makhanas, Achari Flavour, ₹20 pouch artwork" },
      { src: achariRs20ArtworkAlt, alt: "FARMKY Achari Flavour ₹20 packaging artwork, alternate supplied view" },
    ],
  },
  {
    title: "Premium Makhana",
    details: "Foxnut | Gorgon Nut · 250g",
    images: [
      { src: premiumMakhanaFront, alt: "FARMKY Premium Makhana bag, Foxnut | Gorgon Nut, 250g" },
      { src: premiumMakhanaDetail, alt: "FARMKY Premium Makhana bag, second supplied photo" },
    ],
  },
];

export function ProductVariantGallery() {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);
  return <section className="section-space gallery-section product-variants-section" id="product-gallery">
    <div className="page-width">
      <div className="section-heading center-heading"><span className="eyebrow">FARMKY product range</span><h2 className="section-title">Flavours and packs.</h2><p className="section-copy">Names, flavours, pack prices, and pack size are shown as printed on the supplied packaging.</p></div>
      <div className="product-variant-grid">
        {productVariants.map((variant) => <article className="product-variant-card" key={variant.details}>
          <div className={`product-variant-images ${variant.images.length === 1 ? "single-variant-image" : ""}`}>
            {variant.images.map((image) => <button className="product-variant-image" key={image.alt} type="button" onClick={() => setSelectedImage(image)} aria-label={`View ${variant.title}, ${variant.details}`}><img src={image.src} alt={image.alt} loading="lazy" /></button>)}
          </div>
          <div className="product-variant-copy"><h3>{variant.title}</h3><p>{variant.details}</p></div>
        </article>)}
      </div>
    </div>
    {selectedImage && <div className="lightbox" role="dialog" aria-modal="true" aria-label={selectedImage.alt} onClick={() => setSelectedImage(null)}><Button className="lightbox-close" variant="outline" size="icon" aria-label="Close image preview" onClick={() => setSelectedImage(null)}><X /></Button><img src={selectedImage.src} alt={selectedImage.alt} onClick={(event) => event.stopPropagation()} /><span className="image-caption">{selectedImage.alt}</span></div>}
  </section>;
}

export function GalleryPage() {
  return <ContentPage eyebrow="FARMKY in focus" title="A closer look at nature’s goodness." intro="Explore every supplied FARMKY product image, with the name, flavour, price, and pack size shown on the pack." cta="Enquire about FARMKY">
    <ProductVariantGallery />
  </ContentPage>;
}

export function ContactPage() {
  const [message, setMessage] = useState("");
  const [whatsAppLink, setWhatsAppLink] = useState("");
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const customerPhone = String(formData.get("phone") ?? "");
    const digitCount = customerPhone.replace(/\D/g, "").length;
    if (digitCount < 7 || digitCount > 15) { setMessage("Enter a mobile number containing 7–15 digits."); return; }
    const url = createWhatsAppEnquiryUrl(formData);
    setWhatsAppLink(url);
    setMessage("WhatsApp opened with your enquiry details. Review the message and tap Send to deliver it to FARMKY.");
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return <ContentPage eyebrow="We’d love to hear from you" title="Let’s connect with FARMKY." intro="For product, bulk purchase, distribution, or business partnership enquiries, share a few details and prepare a message." cta="Explore the product" ctaHref="/product">
    <section className="contact-section section-space"><div className="page-width contact-layout"><div className="contact-copy"><span className="eyebrow">Business enquiries</span><h2 className="section-title">Tell us what you’re looking for.</h2><p className="section-copy">Submit your details to open a WhatsApp enquiry draft. Review it and tap Send to share it with FARMKY.</p><a className="contact-number" href={FARMKY_PHONE_LINK}>Call +91 83601 31158</a><div className="contact-types"><span>Product</span><span>Bulk purchase</span><span>Distribution</span><span>Partnership</span></div></div><form className="enquiry-form" onSubmit={submit}><label className="form-field"><span className="form-label">Full name</span><input className="form-control" name="name" autoComplete="name" required /></label><label className="form-field"><span className="form-label">Mobile number</span><input className="form-control" name="phone" autoComplete="tel" inputMode="tel" pattern="[+0-9() .-]{7,20}" title="Enter a valid phone number." required /></label><label className="form-field"><span className="form-label">Email address</span><input className="form-control" name="email" type="email" autoComplete="email" required /></label><label className="form-field"><span className="form-label">Enquiry type</span><select className="form-control" name="type" defaultValue="product" required><option value="product">Product enquiry</option><option value="bulk">Bulk purchase</option><option value="distribution">Distribution</option><option value="business">Business partnership</option></select></label><label className="form-field form-field-wide"><span className="form-label">Subject</span><input className="form-control" name="subject" required /></label><label className="form-field form-field-wide"><span className="form-label">Message</span><textarea className="form-control" name="message" required /></label><Button className="form-submit" type="submit">Continue on WhatsApp<ArrowRight /></Button><p className="form-status" aria-live="polite" data-state={message ? "ready" : "idle"}>{message}</p>{whatsAppLink && <a className="form-whatsapp-fallback" href={whatsAppLink} target="_blank" rel="noreferrer">Open the prepared WhatsApp message</a>}</form></div></section>
    <CardGrid items={[{ title: "Product enquiry", text: "Ask us about FARMKY Premium Makhana and its presentation." }, { title: "Bulk purchase", text: "Share your requirements for a bulk purchase enquiry." }, { title: "Distribution", text: "Tell us about your market and distribution interest." }]} />
  </ContentPage>;
}

export function PromiseHighlights() { return <div className="promise-highlights"><span><Check size={16} /> Thoughtful product presentation</span><span><Leaf size={16} /> Nature-inspired approach</span><span><Sparkles size={16} /> Made for everyday moments</span></div>; }
