import type { Metadata } from "next";
import PosterValoriPage from "@/components/pages/PosterValori";

export const metadata: Metadata = {
  title: "Generatore Poster Valori — Venturo",
  robots: {
    index: false,
    follow: false,
  },
};

export default function PosterValori() {
  return <PosterValoriPage />;
}
