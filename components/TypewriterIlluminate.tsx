"use client";

import { useEffect, useState } from 'react';

interface TypewriterIlluminateProps {
  words: string[];
}

const TypewriterIlluminate = ({ words }: TypewriterIlluminateProps) => {
  const [states, setStates] = useState<Array<'hidden' | 'typing' | 'illuminated'>>(
    words.map(() => 'hidden')
  );

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      setStates(words.map(() => 'illuminated'));
      return;
    }

    const setState = (index: number, state: 'typing' | 'illuminated') => {
      setStates(prev => {
        const next = [...prev];
        next[index] = state;
        return next;
      });
    };

    const timeline = [
      { time: 500, action: () => setState(0, 'typing') },
      { time: 2000, action: () => setState(0, 'illuminated') },
      { time: 2800, action: () => setState(1, 'typing') },
      { time: 3800, action: () => setState(1, 'illuminated') },
      { time: 4600, action: () => setState(2, 'typing') },
      { time: 5800, action: () => setState(2, 'illuminated') },
    ];

    const timers = timeline.map(({ time, action }) => setTimeout(action, time));
    return () => timers.forEach(clearTimeout);
  }, [words]);

  return (
    <div className="relative">
      {words.map((word, i) => (
        <div key={word} className="block overflow-hidden">
          <span
            className={`twi-word twi-word--${states[i]}`}
            style={{
              animationDuration: i === 0 ? '1.2s' : i === 1 ? '0.8s' : '1s',
            }}
          >
            {word}
          </span>
        </div>
      ))}

      <style>{`
        .twi-word {
          display: inline-block;
          position: relative;
          overflow: hidden;
          white-space: nowrap;
          width: 0;
          color: hsl(var(--foreground));
          vertical-align: bottom;
        }

        /* Hidden */
        .twi-word--hidden {
          width: 0;
          border-right: none;
        }

        /* Typing */
        .twi-word--typing {
          animation: twi-type var(--duration, 1s) steps(20, end) forwards;
          border-right: 3px solid #E1FF00;
          animation-name: twi-type, twi-blink;
          animation-duration: var(--duration, 1s), 0.6s;
          animation-timing-function: steps(20, end), step-end;
          animation-fill-mode: forwards, none;
          animation-iteration-count: 1, infinite;
        }

        /* Illuminated */
        .twi-word--illuminated {
          width: 100%;
          border-right: none;
          animation: twi-illuminate 0.8s ease-out forwards;
        }

        .twi-word--illuminated::before {
          content: '';
          position: absolute;
          inset: -40px;
          background: radial-gradient(
            ellipse at center,
            rgba(225, 255, 0, 0.08) 0%,
            rgba(225, 255, 0, 0.04) 30%,
            transparent 70%
          );
          z-index: -1;
          animation: twi-glow-expand 0.8s ease-out;
          pointer-events: none;
        }

        @keyframes twi-type {
          from { width: 0; }
          to { width: 100%; }
        }

        @keyframes twi-blink {
          0%, 100% { border-right-color: #E1FF00; }
          50% { border-right-color: transparent; }
        }

        @keyframes twi-illuminate {
          0% {
            filter: blur(1px) drop-shadow(0 0 0 transparent);
            transform: scale(0.98);
          }
          50% {
            filter: blur(0) drop-shadow(0 0 24px rgba(225, 255, 0, 0.6));
            transform: scale(1.02);
          }
          100% {
            filter: blur(0) drop-shadow(0 0 16px rgba(225, 255, 0, 0.35));
            transform: scale(1);
          }
        }

        @keyframes twi-glow-expand {
          0% { opacity: 0; transform: scale(0.5); }
          50% { opacity: 1; }
          100% { opacity: 1; transform: scale(1); }
        }

        @media (max-width: 768px) {
          .twi-word--illuminated::before {
            inset: -20px;
          }
        }
      `}</style>
    </div>
  );
};

export default TypewriterIlluminate;
