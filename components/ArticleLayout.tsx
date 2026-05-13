"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ReactMarkdown from "react-markdown";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { gradientForSlug } from "@/lib/article-covers";

interface ArticleLayoutProps {
  category: string;
  title: string;
  subtitle: string;
  date: string;
  readTime: string;
  heroImage?: string;
  content: string;
}

const ArticleLayout = ({
  category,
  title,
  subtitle,
  date,
  readTime,
  heroImage,
  content,
}: ArticleLayoutProps) => {
  const pathname = usePathname();
  const heroGradient = gradientForSlug(pathname);
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <article className="py-12 md:py-16">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8">
            {/* Breadcrumb */}
            <Link
              href="/magazine"
              className="inline-flex items-center gap-2 text-[0.9rem] mb-8 transition-opacity hover:opacity-80"
              style={{ color: "#FF006E" }}
            >
              <ArrowLeft className="w-4 h-4" />
              Torna al Magazine
            </Link>

            {/* Editorial gradient band — echoes the index card cover */}
            {!heroImage && (
              <div
                className="mb-10 rounded-xl"
                style={{
                  height: "8px",
                  background: heroGradient,
                }}
                aria-hidden
              />
            )}

            {/* Hero Image */}
            {heroImage && (
              <div className="mb-12 relative">
                <img
                  src={heroImage}
                  alt={title}
                  className="w-full object-cover rounded-xl"
                  style={{
                    aspectRatio: "21/9",
                    maxHeight: "400px",
                  }}
                  width={1200}
                  height={514}
                />
              </div>
            )}
          </div>

          {/* Header Content */}
          <div className="max-w-[720px] mx-auto px-5 md:px-8">
            {/* Category Tag */}
            <span
              className="inline-block text-xs font-semibold text-white uppercase tracking-wide mb-4 px-3 py-1 rounded"
              style={{
                backgroundColor: "#FF006E",
                letterSpacing: "0.05em",
              }}
            >
              {category}
            </span>

            {/* Title */}
            <h1
              className="text-3xl md:text-4xl lg:text-[3.5rem] font-extrabold leading-tight mb-4"
              style={{
                color: "#1a1a1a",
                lineHeight: 1.2,
              }}
            >
              {title}
            </h1>

            {/* Subtitle */}
            <p
              className="text-lg md:text-xl mb-6"
              style={{
                color: "#444",
                lineHeight: 1.4,
              }}
            >
              {subtitle}
            </p>

            {/* Metadata */}
            <div
              className="text-[0.9rem] mb-12"
              style={{ color: "#666" }}
            >
              {date} • {readTime}
            </div>

            {/* Body Content */}
            <div className="article-content">
              <ReactMarkdown
                components={{
                  h2: ({ children }) => (
                    <h2
                      className="text-2xl md:text-[2rem] font-bold mt-12 mb-4"
                      style={{ color: "#1a1a1a" }}
                    >
                      {children}
                    </h2>
                  ),
                  h3: ({ children }) => (
                    <h3
                      className="text-xl md:text-2xl font-semibold mt-8 mb-3"
                      style={{ color: "#1a1a1a" }}
                    >
                      {children}
                    </h3>
                  ),
                  p: ({ children }) => (
                    <p
                      className="text-base md:text-lg mb-6"
                      style={{
                        color: "#1a1a1a",
                        lineHeight: 1.8,
                      }}
                    >
                      {children}
                    </p>
                  ),
                  ul: ({ children }) => (
                    <ul
                      className="list-disc ml-8 mb-6"
                      style={{ lineHeight: 1.8 }}
                    >
                      {children}
                    </ul>
                  ),
                  ol: ({ children }) => (
                    <ol
                      className="list-decimal ml-8 mb-6"
                      style={{ lineHeight: 1.8 }}
                    >
                      {children}
                    </ol>
                  ),
                  li: ({ children }) => (
                    <li className="text-base md:text-lg mb-2" style={{ color: "#1a1a1a" }}>
                      {children}
                    </li>
                  ),
                  strong: ({ children }) => (
                    <strong className="font-bold" style={{ color: "#1a1a1a" }}>
                      {children}
                    </strong>
                  ),
                  blockquote: ({ children }) => (
                    <blockquote
                      className="my-8 p-6 italic rounded-r-lg"
                      style={{
                        backgroundColor: "#f8f8f8",
                        borderLeft: "4px solid #FF006E",
                      }}
                    >
                      {children}
                    </blockquote>
                  ),
                }}
              >
                {content}
              </ReactMarkdown>
            </div>

            {/* CTA Section */}
            <div
              className="mt-16 p-8 md:p-12 rounded-xl text-center"
              style={{ backgroundColor: "#f8f8f8" }}
            >
              <p
                className="text-lg md:text-xl mb-6"
                style={{ color: "#1a1a1a" }}
              >
                Vuoi trasformare questi insight in azioni concrete nella tua organizzazione?
              </p>
              <Button
                asChild
                className="px-8 py-6 h-auto text-base font-semibold text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: "#FF006E" }}
              >
                <Link href="/#contact">Parliamone</Link>
              </Button>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default ArticleLayout;
