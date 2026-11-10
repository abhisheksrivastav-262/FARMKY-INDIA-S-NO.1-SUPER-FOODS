import { createFileRoute } from "@tanstack/react-router";
import { CardGrid, ContentPage, PromiseHighlights, StorySection, metaFor } from "@/components/brand-pages";
import makhanaPackImage from "@/assets/products/premium-makhana-250g-front.webp";
export const Route = createFileRoute("/brand-promise")({ head: () => metaFor("Our Brand Promise", "Read FARMKY's nature-inspired promise for a thoughtful everyday makhana experience."), component: PromisePage });
function PromisePage() {
 return <ContentPage eyebrow="The FARMKY promise" title="A gift of nature, a promise of purity." intro="A nature-inspired approach to everyday snacking, grounded in clear product information and a product presentation designed to feel special." image={makhanaPackImage} imageAlt="FARMKY Premium Makhana product package" cta="Connect with FARMKY">
  <section className="section-space story-section"><div className="page-width story-inner"><span className="eyebrow">Our promise to you</span><h2 className="section-title">Care in the way we present every bite.</h2><p className="section-copy">FARMKY aims to make discovering and enjoying Premium Makhana feel simple, inviting, and clear. We share product details as they are represented on the pack, without overstating what the product can do.</p><PromiseHighlights /></div></section>
  <CardGrid items={[{ title: "Nature inspired", text: "A brand rooted in the familiar goodness of makhana." }, { title: "Clear and considered", text: "Product information and packaging details are kept front and centre." }, { title: "Made for your moment", text: "A versatile snack for the way you choose to enjoy it." }]} />
  <StorySection eyebrow="Everyday snacking" title="A simple pleasure, made your own." text="Open a pack, choose your favourite way to enjoy it, and make a little room for a good snack in your day." dark />
 </ContentPage>;
}
