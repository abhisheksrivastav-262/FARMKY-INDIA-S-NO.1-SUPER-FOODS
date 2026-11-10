import { createFileRoute } from "@tanstack/react-router";
import { CardGrid, ContentPage, StorySection, metaFor } from "@/components/brand-pages";
import makhanaPackImage from "@/assets/products/premium-makhana-250g-front.webp";

export const Route = createFileRoute("/about")({ head: () => metaFor("About Us", "Get to know FARMKY, a nature-inspired food brand bringing Premium Makhana to everyday moments."), component: AboutPage });
function AboutPage() {
 return <ContentPage eyebrow="A little closer to nature" title="Bringing nature’s goodness closer to you." intro="FARMKY is focused on bringing the goodness of nature to everyday snacking through Premium Makhana, thoughtful presentation, and a simple approach to enjoying a familiar favourite." image={makhanaPackImage} imageAlt="FARMKY Premium Makhana 250g package" imageFit="contain" cta="Explore our product" ctaHref="/product">
  <StorySection eyebrow="Our vision" title="Make everyday snacking feel special." text="We envision a world where a simple snack can bring a little delight to the day, inspired by the natural character of makhana." />
  <CardGrid items={[{ title: "Our mission", text: "Bring FARMKY Premium Makhana to more everyday moments through clear product information and inviting presentation." }, { title: "Our philosophy", text: "Keep the experience simple, nature-inspired, and easy to make your own." }, { title: "Our approach to quality", text: "Present product details clearly and let customers make an informed choice." }]} />
  <section className="section-space business-credentials-section"><div className="page-width"><span className="eyebrow">DHIRAJ TRADERS</span><h2 className="section-title">Business registration.</h2><div className="about-credentials"><article><span>GSTIN</span><strong>10ALWPY6747R1ZS</strong></article><article><span>FSSAI licence</span><strong>10424310000092</strong></article></div></div></section>
  <StorySection eyebrow="Our commitment" title="A brand story still being written with you." text="FARMKY is committed to a considered customer experience, honest product details, and a versatile snack people can enjoy in their own way." dark />
 </ContentPage>;
}
