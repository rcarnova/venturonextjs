"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Tiene allineata la lingua del documento quando si passa da una pagina
 * italiana a una inglese senza ricaricare (link interni di Next).
 */
export default function HtmlLang() {
  const pathname = usePathname();
  useEffect(() => {
    document.documentElement.lang = /^\/en(\/|$)/.test(pathname) ? "en" : "it";
  }, [pathname]);
  return null;
}
