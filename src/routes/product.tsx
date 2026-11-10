import { createFileRoute } from "@tanstack/react-router";
import { ProductPage, metaFor } from "@/components/brand-pages";
export const Route = createFileRoute("/product")({ head: () => metaFor("Our Product", "Discover FARMKY Premium Roasted Makhanas in Tomato and Achari flavours, plus Premium Makhana (Foxnut | Gorgon Nut) in a 250g pack."), component: ProductPage });
