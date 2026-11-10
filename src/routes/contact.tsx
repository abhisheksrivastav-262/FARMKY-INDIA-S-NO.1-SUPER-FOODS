import { createFileRoute } from "@tanstack/react-router";
import { ContactPage, metaFor } from "@/components/brand-pages";
export const Route = createFileRoute("/contact")({ head: () => metaFor("Contact Us", "Contact FARMKY for product, bulk purchase, distribution, or business partnership enquiries."), component: ContactPage });
