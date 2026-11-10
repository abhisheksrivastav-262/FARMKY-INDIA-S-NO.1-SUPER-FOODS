import { createFileRoute } from "@tanstack/react-router";
import { CardGrid, ContentPage, PromiseHighlights, StorySection, metaFor } from "@/components/brand-pages";
export const Route = createFileRoute("/why-farmky")({ head: () => metaFor("Why Choose FARMKY", "Explore FARMKY's nature-inspired approach to Premium Makhana and everyday snacking."), component: WhyFarmkyPage });
function WhyFarmkyPage() {
 return <ContentPage eyebrow="The FARMKY way" title="A better way to enjoy every bite." intro="FARMKY brings together a familiar snack, a considered presentation, and the freedom to enjoy makhana in your own way." cta="See our product" ctaHref="/product">
  <section className="section-space card-section"><div className="page-width"><PromiseHighlights /></div></section>
  <CardGrid items={[{ title: "Light and delightful", text: "A simple snack for little pauses, busy days, and everything between." }, { title: "Clear product details", text: "The pack presents FARMKY Premium Makhana as protein rich and low in calories; consult the package for product-specific information." }, { title: "Everyday convenience", text: "A 250g pack of makhana that can be enjoyed at home, at work, or whenever the moment calls." }]} />
  <StorySection eyebrow="A thoughtful choice" title="Premium presentation, with nature in mind." text="The FARMKY approach starts with makhana and a simple promise: make it easy to discover, understand, and enjoy this versatile snack." dark />
 </ContentPage>;
}
