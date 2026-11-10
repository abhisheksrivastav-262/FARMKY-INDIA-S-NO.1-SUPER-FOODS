import { createFileRoute } from "@tanstack/react-router";
import { CardGrid, ContentPage, StorySection, metaFor } from "@/components/brand-pages";
import makhanaPackImage from "@/assets/farmky-makhana-pack.png";
export const Route = createFileRoute("/benefits")({ head: () => metaFor("Makhana Benefits", "Learn about makhana, a versatile foxnut snack, and simple ways to enjoy it."), component: BenefitsPage });
function BenefitsPage() {
 return <ContentPage eyebrow="A little about makhana" title="Discover the goodness of makhana." intro="Makhana, also called foxnut or gorgon nut, is enjoyed in many ways. Its light texture and versatility make it easy to bring into everyday snack moments." image={makhanaPackImage} imageAlt="FARMKY Premium Makhana 250g package" imageFit="contain" cta="Explore FARMKY Makhana" ctaHref="/product">
  <StorySection eyebrow="What is makhana?" title="A familiar snack with many ways to enjoy it." text="Makhana comes from the seeds of the Euryale ferox aquatic plant. It is often enjoyed roasted or seasoned and is a versatile ingredient in snacks and recipes." />
  <CardGrid items={[{ title: "A simple handful", text: "Enjoy a portion on its own for a light snack break." }, { title: "Build a snack bowl", text: "Pair makhana with ingredients you enjoy, such as nuts, seeds, or dried fruit." }, { title: "Add a little flavour", text: "Season or mix it into recipes to suit your own taste." }]} />
  <StorySection eyebrow="Enjoy mindfully" title="Nutrition depends on the product and portion." text="Nutritional values vary by product and preparation. Check the product label for verified nutrition information. This page shares serving inspiration and does not make medical or therapeutic claims." dark />
 </ContentPage>;
}
