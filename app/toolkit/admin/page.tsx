import type { Metadata } from "next";
import ToolkitAdminPage from "@/components/pages/ToolkitAdmin";

export const metadata: Metadata = {
  title: "Toolkit Admin — Venturo",
  description: "Area amministrativa del toolkit Venturo.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ToolkitAdmin() {
  return <ToolkitAdminPage />;
}
