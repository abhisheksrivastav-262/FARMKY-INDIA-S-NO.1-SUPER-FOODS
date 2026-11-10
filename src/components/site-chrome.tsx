import { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FARMKY_PHONE_LINK, FARMKY_PHONE_NUMBER } from "@/lib/contact";
import farmkyEmblem from "@/assets/farmky-logo-emblem.png";
import farmkyWordmark from "@/assets/farmky-logo-wordmark.png";

export const pageLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Our Product", to: "/product" },
  { label: "Makhana Benefits", to: "/benefits" },
  { label: "Why FARMKY", to: "/why-farmky" },
  { label: "Gallery", to: "/gallery" },
  { label: "Brand Promise", to: "/brand-promise" },
  { label: "Contact", to: "/contact" },
] as const;

function BrandMark() {
  return <Link className="brand-lockup" to="/" aria-label="FARMKY home">
    <span className="brand-emblem"><img src={farmkyEmblem} alt="" /></span>
    <span className="brand-type"><img className="brand-wordmark" src={farmkyWordmark} alt="" /><span className="brand-subline">INDIA'S NO.1 SUPER FOODS</span></span>
  </Link>;
}

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  return <header className="site-header">
    <div className="page-width header-inner">
      <BrandMark />
      <nav className="desktop-nav" aria-label="Main navigation">
        {pageLinks.map((item) => <Link key={item.to} to={item.to} className={`nav-link ${pathname === item.to ? "active" : ""}`} aria-current={pathname === item.to ? "page" : undefined}>{item.label}</Link>)}
      </nav>
      <Button aria-expanded={menuOpen} aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"} className="menu-toggle" onClick={() => setMenuOpen((open) => !open)} size="icon" variant="outline">{menuOpen ? <X /> : <Menu />}</Button>
    </div>
    {menuOpen && <nav className="mobile-menu" aria-label="Mobile navigation">{pageLinks.map((item) => <Link key={item.to} to={item.to} aria-current={pathname === item.to ? "page" : undefined} onClick={() => setMenuOpen(false)}>{item.label}</Link>)}</nav>}
  </header>;
}

export function FloatingWhatsApp() {
  const message = encodeURIComponent("Hi FARMKY, I’d like to know more about Premium Makhana.");
  return <div className="floating-contact-actions">
    <a className="call-float" href={FARMKY_PHONE_LINK} aria-label="Call FARMKY at +91 83601 31158" title="Call FARMKY · +91 83601 31158"><Phone aria-hidden="true" /></a>
    <a className="whatsapp-float" href={`https://wa.me/${FARMKY_PHONE_NUMBER}?text=${message}`} target="_blank" rel="noreferrer" aria-label="WhatsApp FARMKY at +91 83601 31158" title="Chat with FARMKY on WhatsApp">
      <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.297-.496.1-.198.05-.372-.025-.52-.074-.149-.669-1.612-.916-2.207-.241-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479s1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.71.307 1.264.49 1.695.627.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.999-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.002-5.45 4.437-9.884 9.893-9.884 2.64.001 5.122 1.03 6.987 2.898a9.825 9.825 0 0 1 2.893 6.99c-.003 5.45-4.437 9.887-9.89 9.888m8.413-18.3A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.307-1.654a11.87 11.87 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 0 0-3.48-8.42z" /></svg>
    </a>
  </div>;
}

export function SiteFooter() {
  return <footer className="site-footer">
    <div className="page-width footer-top">
      <div className="footer-brand"><div className="footer-logo-frame"><BrandMark /></div><p className="footer-description">FARMKY Premium Makhana — a nature-inspired snack for everyday moments.</p></div>
      <div><h2 className="footer-heading">Explore FARMKY</h2><div className="footer-links">{pageLinks.slice(0, 5).map((item) => <Link key={item.to} to={item.to}>{item.label}</Link>)}</div></div>
      <div><h2 className="footer-heading">Get in touch</h2><div className="footer-links"><Link to="/gallery">Gallery</Link><Link to="/brand-promise">Our brand promise</Link><Link to="/contact">Business enquiries</Link><span>Privacy Policy</span><span>Terms &amp; Conditions</span></div><div className="footer-contact-details"><a href="tel:+918360131158">+91 83601 31158</a><a href="tel:+918757919914">+91 87579 19914</a><a href="mailto:Farmky21@gmail.com">Farmky21@gmail.com</a><span>Santi Place, near Central Bank, Harda Bazar, Purnea, Bihar - 854303</span></div><div className="footer-credentials"><span>GSTIN: 10ALWPY6747R1ZS</span><span>FSSAI Licence: 10424310000092</span></div></div>
    </div>
    <div className="page-width footer-bottom"><span>© 2026 FARMKY. All Rights Reserved.</span><span>India's No.1 Super Foods</span></div>
  </footer>;
}
