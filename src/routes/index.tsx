import { useEffect, useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDownRight,
  ArrowRight,
  Check,
  CircleDot,
  Leaf,
  MoveUpRight,
  PackageCheck,
  Sparkles,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import makhanaImage from "@/assets/farmky-makhana.jpg";
import makhanaPackImage from "@/assets/farmky-makhana-pack.png";
import { createWhatsAppEnquiryUrl } from "@/lib/contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "FARMKY | India's No.1 Super Foods" },
      {
        name: "description",
        content:
          "Meet FARMKY Premium Makhana: light, delightful foxnut for everyday moments. A gift of nature, a promise of purity.",
      },
      { property: "og:title", content: "FARMKY | Premium Makhana" },
      {
        property: "og:description",
        content: "A light, delightful, nature-inspired snack for everyday moments.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: FarmkyHome,
});

const brandFeatures = [
  {
    title: "Nature inspired",
    text: "A naturally inspired snack made for the little pauses in every day.",
    icon: Leaf,
  },
  {
    title: "Thoughtfully presented",
    text: "Premium Makhana, presented with the care a good snack deserves.",
    icon: PackageCheck,
  },
  {
    title: "Made for the moment",
    text: "A light and delightful choice to bring to your everyday routine.",
    icon: Sparkles,
  },
];

const benefits = [
  { title: "Light & delightful", text: "An easygoing snack for little pauses, big days, and everything in between." },
  { title: "Protein rich", text: "Protein rich, as highlighted on the FARMKY product packaging." },
  { title: "Low in calories", text: "A light snack choice, as stated on the FARMKY product packaging." },
  { title: "Premium presentation", text: "A considered presentation for something naturally special." },
  { title: "Nature inspired", text: "Rooted in the goodness of foxnut, also known as gorgon nut." },
  { title: "Everyday snacking", text: "A simple, versatile snack for home, work, and slower moments." },
];

const galleryItems = [
  { title: "FARMKY Premium Makhana", src: makhanaPackImage, className: "gallery-pack" },
  { title: "A bowl of makhana", src: makhanaImage, className: "" },
];

function FarmkyHome() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [formMessage, setFormMessage] = useState("");
  const [whatsAppLink, setWhatsAppLink] = useState("");

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setLightboxIndex(null);
      if (event.key === "ArrowRight") {
        setLightboxIndex((index) => (index === null ? null : (index + 1) % galleryItems.length));
      }
      if (event.key === "ArrowLeft") {
        setLightboxIndex((index) =>
          index === null ? null : (index - 1 + galleryItems.length) % galleryItems.length,
        );
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [lightboxIndex]);

  const submitEnquiry = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const url = createWhatsAppEnquiryUrl(new FormData(event.currentTarget));
    setWhatsAppLink(url);
    setFormMessage("WhatsApp opened with your enquiry details. Review the message and tap Send to deliver it to FARMKY.");
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <main className="home-page">
      <section className="hero-section" id="home">
        <div className="page-width hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">Premium quality makhana</span>
            <h1 className="display-title">Nature’s goodness, in every bite.</h1>
            <p className="section-copy">
              Discover FARMKY Premium Makhana — a light, delightful, nature-inspired snack made for
              your everyday lifestyle.
            </p>
            <div className="hero-actions">
              <Button asChild className="hero-button">
                <a href="#about">
                  Discover FARMKY <ArrowRight aria-hidden="true" />
                </a>
              </Button>
              <Button asChild className="hero-secondary" variant="outline">
                <a href="#product">Explore makhana</a>
              </Button>
            </div>
            <div className="hero-proof" aria-label="Product highlights">
              <span><Check aria-hidden="true" size={15} /> Light & delightful</span>
              <span><Check aria-hidden="true" size={15} /> Protein rich</span>
              <span><Check aria-hidden="true" size={15} /> Premium makhana</span>
            </div>
          </div>
          <div className="hero-image-wrap">
            <img
              className="hero-image"
              src={makhanaImage}
              alt="A bowl of golden makhana on natural green linen"
              width={1024}
              height={1280}
              fetchPriority="high"
            />
            <div className="image-caption">
              <CircleDot aria-hidden="true" size={15} />
              FARMKY Premium Makhana · 250g
            </div>
          </div>
        </div>
      </section>

      <div className="marquee-band" aria-label="FARMKY product highlights">
        <div className="page-width marquee-inner">
          <span><Leaf aria-hidden="true" size={15} /> Nature inspired</span>
          <span><Sparkles aria-hidden="true" size={15} /> Light & delightful</span>
          <span><CircleDot aria-hidden="true" size={15} /> Foxnut / Gorgon nut</span>
          <span><PackageCheck aria-hidden="true" size={15} /> Premium 250g</span>
        </div>
      </div>

      <section className="about-section section-space" id="about">
        <div className="page-width">
          <div className="about-intro">
            <div>
              <span className="eyebrow">A little closer to nature</span>
              <h2 className="section-title">Bringing nature’s goodness closer to you.</h2>
            </div>
            <p className="section-copy">
              FARMKY is a premium food brand focused on bringing the goodness of nature to everyday
              snacking. Our Premium Makhana brings together natural inspiration, quality and
              convenience.
            </p>
          </div>
          <div className="feature-grid">
            {brandFeatures.map(({ title, text, icon: Icon }) => (
              <article className="feature-item" key={title}>
                <span className="feature-icon"><Icon aria-hidden="true" size={19} /></span>
                <h3 className="feature-title">{title}</h3>
                <p className="feature-text">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="product-section section-space" id="product">
        <div className="page-width product-layout">
          <div className="product-visual">
            <img
              src={makhanaImage}
              alt="FARMKY Premium Makhana served in a ceramic bowl"
              width={1024}
              height={1280}
              loading="lazy"
            />
          </div>
          <div className="product-copy">
            <span className="eyebrow">Our signature product</span>
            <h2 className="section-title">Meet FARMKY Premium Makhana.</h2>
            <p className="section-copy">
              Enjoy the light and delightful experience of FARMKY Premium Makhana. A
              nature-inspired snack that makes everyday moments more enjoyable.
            </p>
            <div className="product-facts" aria-label="Product details">
              <div className="product-fact">
                <div className="product-fact-label">Product</div>
                <div className="product-fact-value">Premium Makhana</div>
              </div>
              <div className="product-fact">
                <div className="product-fact-label">Also known as</div>
                <div className="product-fact-value">Foxnut / Gorgon Nut</div>
              </div>
              <div className="product-fact">
                <div className="product-fact-label">Net weight</div>
                <div className="product-fact-value">250g</div>
              </div>
              <div className="product-fact">
                <div className="product-fact-label">Category</div>
                <div className="product-fact-value">Premium food product</div>
              </div>
            </div>
            <Button asChild className="hero-button">
              <a href="#contact">
                Enquire about this product <ArrowRight aria-hidden="true" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section className="benefits-section section-space" id="benefits">
        <div className="page-width">
          <div className="section-heading center-heading">
            <span className="eyebrow">The FARMKY way</span>
            <h2 className="section-title">Why choose FARMKY?</h2>
            <p className="section-copy">
              Thoughtful everyday snacking, inspired by nature and made delightful.
            </p>
          </div>
          <div className="benefit-grid" id="why-farmky">
            {benefits.map((benefit, index) => (
              <article className="benefit-item" key={benefit.title}>
                <span className="benefit-number">0{index + 1}</span>
                <h3>{benefit.title}</h3>
                <p>{benefit.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="goodness-section section-space">
        <div className="page-width goodness-layout">
          <div>
            <span className="eyebrow">A little about makhana</span>
            <h2 className="section-title">Small bites, natural goodness.</h2>
            <p className="section-copy">
              Foxnuts, also known as makhana or gorgon nuts, are a much-loved snack with a light,
              versatile character. Enjoy a bowl at home, keep a snack close at work, or savour a
              slower moment whenever the day calls for it.
            </p>
            <div className="goodness-note">
              <Leaf aria-hidden="true" size={18} />
              <span>A nature-inspired snack, ready for your own favourite way to enjoy it.</span>
            </div>
          </div>
          <div className="goodness-image">
            <img
              src={makhanaImage}
              alt="Close view of lightly golden makhana ready to serve"
              width={1024}
              height={1280}
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="gallery-section section-space" id="gallery">
        <div className="page-width">
          <div className="section-heading center-heading">
            <span className="eyebrow">A closer look</span>
            <h2 className="section-title">The goodness, up close.</h2>
          </div>
          <div className="gallery-grid">
            {galleryItems.map((item, index) => (
              <Button
                aria-label={`View image: ${item.title}`}
                className={`gallery-tile h-full w-full ${item.className}`}
                key={item.title}
                onClick={() => setLightboxIndex(index)}
                variant="ghost"
              >
                <img
                  src={item.src}
                  alt={item.title}
                  width={1024}
                  height={1280}
                  loading="lazy"
                />
                <span className="gallery-caption">{item.title}</span>
              </Button>
            ))}
          </div>
        </div>
      </section>

      <section className="promise-section section-space" id="promise">
        <div className="page-width">
          <span className="eyebrow">The FARMKY promise</span>
          <h2 className="section-title">A gift of nature, a promise of purity.</h2>
          <p>
            FARMKY brings a nature-inspired approach to everyday snacking with its Premium Makhana.
          </p>
          <div className="promise-rule" />
        </div>
      </section>

      <section className="contact-section section-space" id="contact">
        <div className="page-width contact-layout">
          <div className="contact-copy">
            <span className="eyebrow">We’d love to hear from you</span>
            <h2 className="section-title">Let’s connect with FARMKY.</h2>
            <p className="section-copy">
              For product, business, bulk purchase, or distribution enquiries, leave a note below.
            </p>
            <div className="contact-types" aria-label="Enquiry types">
              <span>Product</span><span>Business</span><span>Bulk purchase</span><span>Distribution</span>
            </div>
          </div>
          <form className="enquiry-form" onSubmit={submitEnquiry}>
            <label className="form-field">
              <span className="form-label">Full name</span>
              <input className="form-control" name="name" autoComplete="name" placeholder="Your name" required />
            </label>
            <label className="form-field">
              <span className="form-label">Mobile number</span>
              <input
                className="form-control"
                name="phone"
                autoComplete="tel"
                inputMode="tel"
                pattern="[+0-9() .-]{7,20}"
                placeholder="Your mobile number"
                required
                title="Enter a valid phone number."
              />
            </label>
            <label className="form-field">
              <span className="form-label">Email address</span>
              <input className="form-control" name="email" autoComplete="email" type="email" placeholder="you@example.com" required />
            </label>
            <label className="form-field">
              <span className="form-label">Enquiry type</span>
              <select className="form-control" name="enquiryType" defaultValue="product" required>
                <option value="product">Product enquiry</option>
                <option value="business">Business enquiry</option>
                <option value="bulk">Bulk purchase</option>
                <option value="distribution">Distribution</option>
              </select>
            </label>
            <label className="form-field form-field-wide">
              <span className="form-label">Subject</span>
              <input className="form-control" name="subject" placeholder="What is your enquiry about?" required />
            </label>
            <label className="form-field form-field-wide">
              <span className="form-label">Message</span>
              <textarea className="form-control" name="message" placeholder="How can we help?" required />
            </label>
            <Button className="form-submit" type="submit">
              Continue on WhatsApp <ArrowRight aria-hidden="true" />
            </Button>
            <p aria-live="polite" className="form-status" data-state={formMessage ? "ready" : "idle"}>
              {formMessage}
            </p>
            {whatsAppLink && <a className="form-whatsapp-fallback" href={whatsAppLink} target="_blank" rel="noreferrer">Open the prepared WhatsApp message</a>}
          </form>
        </div>
      </section>

      {lightboxIndex !== null && (
        <div
          aria-label={`Image preview: ${galleryItems[lightboxIndex]?.title ?? "Makhana"}`}
          aria-modal="true"
          className="lightbox"
          onClick={() => setLightboxIndex(null)}
          role="dialog"
        >
          <Button
            aria-label="Close image preview"
            className="lightbox-close"
            onClick={() => setLightboxIndex(null)}
            size="icon"
            variant="outline"
          >
            <X />
          </Button>
          <img
            src={galleryItems[lightboxIndex]?.src ?? makhanaImage}
            alt={galleryItems[lightboxIndex]?.title ?? "FARMKY Premium Makhana"}
            width={1024}
            height={1280}
            onClick={(event) => event.stopPropagation()}
          />
          <span className="image-caption">
            {galleryItems[lightboxIndex]?.title ?? "FARMKY Premium Makhana"}
            <Button
              aria-label="Next image"
              onClick={(event) => {
                event.stopPropagation();
                setLightboxIndex((index) =>
                  index === null ? null : (index + 1) % galleryItems.length,
                );
              }}
              size="icon"
              variant="ghost"
            >
              <MoveUpRight />
            </Button>
          </span>
        </div>
      )}

      <a className="sr-only focus:not-sr-only" href="#home">
        <ArrowDownRight aria-hidden="true" /> Back to top
      </a>
    </main>
  );
}
