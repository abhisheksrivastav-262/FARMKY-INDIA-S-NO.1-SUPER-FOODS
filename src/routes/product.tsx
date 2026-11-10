import { createFileRoute } from "@tanstack/react-router";
import { ProductPage, metaFor } from "@/components/brand-pages";
export const Route = createFileRoute("/product")({ head: () => metaFor("Our Product", "Discover FARMKY Premium Makhana, foxnut also known as gorgon nut, in a 250g pack."), component: ProductPage });
