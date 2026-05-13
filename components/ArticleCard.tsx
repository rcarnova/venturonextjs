"use client";

import Link from "next/link";
import { gradientForSlug } from "@/lib/article-covers";

interface ArticleCardProps {
  category: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  link: string;
  imageUrl?: string;
  author?: string;
  tags?: string[];
  index?: number;
}

const ArticleCard = ({
  category,
  title,
  excerpt,
  date,
  readTime,
  link,
  tags,
}: ArticleCardProps) => {
  const background = gradientForSlug(link);
  return (
    <Link href={link} className="group block">
      <article
        className="bg-white rounded-xl overflow-hidden cursor-pointer transition-all duration-300 ease-out hover:-translate-y-1"
        style={{
          border: "1px solid rgba(0,0,0,0.08)",
          boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.12)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.06)";
        }}
      >
        {/* Typographic Cover */}
        <div
          className="relative w-full overflow-hidden flex items-end p-6"
          style={{
            aspectRatio: "16/9",
            background,
            backgroundColor: "#141414",
          }}
        >
          {/* Subtle dark veil bottom-left for text legibility */}
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(180deg, rgba(0,0,0,0) 35%, rgba(0,0,0,0.45) 100%)",
            }}
          />
          <span
            className="relative text-white font-bold text-2xl md:text-3xl leading-tight"
            style={{
              fontFamily: "'Space Grotesk', system-ui, sans-serif",
              lineHeight: 1.1,
              display: "-webkit-box",
              WebkitLineClamp: 4,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {title}
          </span>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Category Tag */}
          <span
            className="inline-block text-xs font-semibold text-white uppercase tracking-wide mb-3 px-3 py-1 rounded"
            style={{
              backgroundColor: "#FF006E",
              letterSpacing: "0.05em",
            }}
          >
            {category}
          </span>

          <p
            className="text-sm text-muted-foreground mb-4 line-clamp-3"
            style={{ lineHeight: 1.6, color: "#444" }}
          >
            {excerpt}
          </p>

          {/* Metadata */}
          <div
            className="flex items-center gap-4 text-sm mb-4"
            style={{ color: "#666" }}
          >
            <span>{date}</span>
            <span>•</span>
            <span>{readTime}</span>
          </div>

          {/* Tags */}
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2.5 py-1 rounded-full border"
                  style={{
                    borderColor: "#FF006E",
                    color: "#FF006E",
                    fontFamily: "'IBM Plex Mono', monospace",
                    letterSpacing: "0.03em",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </article>
    </Link>
  );
};

export default ArticleCard;
