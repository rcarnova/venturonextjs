import { ReactNode } from "react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { cn } from "@/lib/utils";

interface GlowTitleProps {
  children: ReactNode;
  className?: string;
  variant?: "dark" | "light";
  as?: "h1" | "h2" | "h3" | "p";
}

const GlowTitle = ({ children, className, variant = "dark", as: Tag = "h2" }: GlowTitleProps) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.3 });

  return (
    <Tag
      ref={ref as React.RefObject<HTMLHeadingElement>}
      className={cn(
        isVisible && (variant === "dark" ? "glow-title-emerge" : "glow-title-emerge-light"),
        className
      )}
    >
      {children}
    </Tag>
  );
};

export default GlowTitle;
