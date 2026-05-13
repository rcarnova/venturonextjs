import Link from "next/link";
import { Linkedin, Mail } from "lucide-react";


const Footer = () => {
  return (
    <footer className="pt-12 pb-8 border-t border-border bg-background">
      <div className="container-wide">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center">
            <img src="/logo-venturo.webp" alt="Venturo" className="h-5 w-auto object-contain" />
          </div>

          <div className="flex items-center gap-6">
            <a 
              href="mailto:info@venturoconsulting.it" 
              className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 font-mono"
            >
              <Mail className="w-4 h-4" />
              <span className="text-sm">info@venturoconsulting.it</span>
            </a>
            <a 
              href="https://www.linkedin.com/company/venturo-consulting/" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Venturo su LinkedIn"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-border/50 text-center">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mb-4">
            <Link href="/le-sfide" className="text-[0.85rem] font-mono text-muted-foreground hover:text-foreground transition-colors">Le sfide</Link>
            <Link href="/lumen" className="text-[0.85rem] font-mono text-muted-foreground hover:text-foreground transition-colors">Lumen</Link>
            <Link href="/principi" className="text-[0.85rem] font-mono text-muted-foreground hover:text-foreground transition-colors">Principi</Link>
            <Link href="/casi-studio" className="text-[0.85rem] font-mono text-muted-foreground hover:text-foreground transition-colors">Casi studio</Link>
            <Link href="/chi-siamo" className="text-[0.85rem] font-mono text-muted-foreground hover:text-foreground transition-colors">Chi siamo</Link>
            <Link href="/analisi-evp" className="text-[0.85rem] font-mono text-muted-foreground hover:text-foreground transition-colors">Analisi EVP</Link>
            <Link href="/magazine" className="text-[0.85rem] font-mono text-muted-foreground hover:text-foreground transition-colors">Articoli</Link>
            <Link href="/privacy" className="text-[0.85rem] font-mono text-muted-foreground hover:text-foreground transition-colors">Privacy</Link>
          </div>
          <p className="text-[0.85rem] font-mono text-muted-foreground mt-2">
            © {new Date().getFullYear()} Venturo - P.IVA 02662900022
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
