import type { Metadata } from "next";
import ToolkitPage from "@/components/pages/Toolkit";

export const metadata: Metadata = {
  title: "EVP Toolkit — Strumenti per la cultura organizzativa — Venturo",
  description:
    "Accedi al toolkit di Venturo con strumenti pratici per lavorare sulla cultura organizzativa e l'employer branding.",
  alternates: {
    canonical: "https://venturoconsulting.it/toolkit",
  },
};

export default function Toolkit() {
  return <ToolkitPage />;
}
