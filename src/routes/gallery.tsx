import { createFileRoute } from "@tanstack/react-router";
import { GalleryPage, metaFor } from "@/components/brand-pages";
export const Route = createFileRoute("/gallery")({ head: () => metaFor("Gallery", "Explore FARMKY Premium Makhana and the everyday food moments around it."), component: GalleryPage });
