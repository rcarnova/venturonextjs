"use client";

import { useState, useEffect } from "react";

interface PrincipiHeroProps {
  lang?: "it" | "en";
}

const copy = {
  it: {
    label: "I nostri principi",
    headline: ["Non ci siamo", "inventati"],
    highlightWord: "niente",
    body: "Applichiamo principi consolidati in modo originale. Venturo nasce dall'incontro di brand strategy, organizational culture e design thinking — tre mondi che raramente dialogano tra loro.",
    
  },
  en: {
    label: "Our principles",
    headline: ["We didn't", "invent"],
    highlightWord: "anything",
    body: "We apply established principles in an original way. Venturo was born at the intersection of brand strategy, organizational culture and design thinking — three worlds that rarely talk to each other.",
    
  },
};

const books = [
  {
    id: "sinek",
    author: "Simon Sinek",
    title: "Start With Why",
    src: "https://m.media-amazon.com/images/I/71NBZIExBCL._SY522_.jpg",
    sectionId: "cultura-sistema",
    width: 108,
    rotate: -6,
    top: "18%",
    left: "8%",
    zIndex: 2,
    opacity: 0.75,
    bg: "hsl(50 60% 92%)",
  },
  {
    id: "schein",
    author: "Edgar Schein",
    title: "Organizational Culture",
    src: "https://m.media-amazon.com/images/I/71EXtac7o5L._SY522_.jpg",
    sectionId: "cultura-sistema",
    width: 128,
    rotate: -11,
    top: "36%",
    left: "2%",
    zIndex: 3,
    opacity: 1,
    bg: "hsl(210 30% 90%)",
  },
  {
    id: "brown",
    author: "Tim Brown",
    title: "Change by Design",
    src: "https://m.media-amazon.com/images/I/71slKvaGlAL._SY522_.jpg",
    sectionId: "innovazione-cambiamento",
    width: 148,
    rotate: -3,
    top: "24%",
    left: "30%",
    zIndex: 5,
    opacity: 1,
    bg: "hsl(0 30% 90%)",
  },
  {
    id: "kahneman",
    author: "Daniel Kahneman",
    title: "Thinking, Fast and Slow",
    src: "https://covers.openlibrary.org/b/isbn/0374533555-L.jpg",
    sectionId: "pensiero-decisione",
    width: 128,
    rotate: 8,
    top: "30%",
    left: "58%",
    zIndex: 4,
    opacity: 1,
    bg: "hsl(30 30% 90%)",
  },
  {
    id: "collins",
    author: "Jim Collins",
    title: "Good to Great",
    src: "https://covers.openlibrary.org/b/isbn/0066620996-L.jpg",
    sectionId: "business-strategia",
    width: 108,
    rotate: 5,
    top: "20%",
    left: "72%",
    zIndex: 2,
    opacity: 0.75,
    bg: "hsl(140 20% 90%)",
  },
];

const PrincipiHero = ({ lang = "it" }: PrincipiHeroProps) => {
  const t = copy[lang];
  const [hoveredBook, setHoveredBook] = useState<string | null>(null);
  const [imgErrors, setImgErrors] = useState<Set<string>>(new Set());
  const [visibleBooks, setVisibleBooks] = useState<Set<string>>(new Set());

  useEffect(() => {
    books.forEach((book, i) => {
      setTimeout(() => {
        setVisibleBooks((prev) => new Set(prev).add(book.id));
      }, 300 + i * 120);
    });
  }, []);


  return (
    <section className="pt-24 md:pt-0 bg-white">
      <div
        className="principi-hero-inner mx-auto flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-[72px]"
        style={{ maxWidth: 1200 }}
      >
      <style>{`.principi-hero-inner { padding: 40px 24px 60px; } @media (min-width: 768px) { .principi-hero-inner { padding: 140px 48px 88px; } }`}</style>
        {/* Left column — text */}
        <div className="flex-1 min-w-0 max-w-xl">
          {/* Eyebrow */}
          <p
            className="font-mono uppercase mb-3"
            style={{
              fontSize: 11,
              letterSpacing: "0.18em",
              color: "#888",
            }}
          >
            {t.label}
          </p>

          {/* Yellow bar */}

          {/* Headline */}
          <h1
            className="font-display font-semibold mb-6"
            style={{
              fontSize: "clamp(38px, 5vw, 56px)",
              lineHeight: 1.06,
              letterSpacing: "-0.02em",
              color: "#111",
            }}
          >
            {t.headline.map((line, i) => (
              <span key={i}>
                {line}
                <br />
              </span>
            ))}
            <span className="relative inline-block">
              {t.highlightWord}
              <span
                className="absolute left-0 right-0 -z-10"
                style={{
                  bottom: 2,
                  height: 6,
                  background: "#E1FF00",
                }}
                aria-hidden="true"
              />
            </span>
          </h1>

          {/* Body */}
          <p
            className="mb-8"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 300,
              fontSize: 15,
              lineHeight: 1.8,
              color: "#555",
              maxWidth: 440,
            }}
          >
            {t.body}
          </p>

        </div>

        {/* Right column — books */}
        <div
          className="relative flex-1 w-full min-h-[340px] md:min-h-[460px]"
          style={{ maxWidth: 480 }}
        >
          {books.map((book) => {
            const isHovered = hoveredBook === book.id;
            const hasError = imgErrors.has(book.id);
            const isVisible = visibleBooks.has(book.id);

            return (
              <div
                key={book.id}
                className="absolute transition-all duration-500 ease-out cursor-pointer"
                style={{
                  width: book.width,
                  top: book.top,
                  left: book.left,
                  zIndex: isHovered ? 20 : book.zIndex,
                  opacity: isVisible ? (isHovered ? 1 : book.opacity) : 0,
                  transform: isVisible
                    ? `rotate(${book.rotate}deg) ${isHovered ? "translateY(-10px) scale(1.05)" : ""}`
                    : `rotate(0deg) translateY(30px) scale(0.9)`,
                }}
                onMouseEnter={() => setHoveredBook(book.id)}
                onMouseLeave={() => setHoveredBook(null)}
                onClick={() => {
                  const target = document.getElementById(book.sectionId);
                  if (target) target.scrollIntoView({ behavior: "smooth" });
                }}
              >
                {hasError ? (
                  <div
                    className="flex items-center justify-center text-center p-3"
                    style={{
                      width: book.width,
                      height: book.width * 1.5,
                      background: book.bg,
                      borderRadius: 3,
                      boxShadow: "4px 8px 28px rgba(0,0,0,0.13)",
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: 11,
                      color: "#666",
                      lineHeight: 1.3,
                    }}
                  >
                    {book.title}
                  </div>
                ) : (
                  <img
                    src={book.src}
                    alt={`${book.title} — ${book.author}`}
                    loading="lazy"
                    className="block w-full h-auto"
                    style={{
                      borderRadius: 3,
                      boxShadow: "4px 8px 28px rgba(0,0,0,0.13)",
                    }}
                    onError={() =>
                      setImgErrors((prev) => new Set(prev).add(book.id))
                    }
                  />
                )}

                {/* Author label on hover */}
                <span
                  className="block text-center mt-2 transition-opacity duration-200"
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: 10,
                    color: "#999",
                    opacity: isHovered ? 1 : 0,
                  }}
                >
                  {book.author}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PrincipiHero;
