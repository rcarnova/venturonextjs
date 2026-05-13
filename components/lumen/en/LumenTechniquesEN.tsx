"use client";

import { useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import { MessageCircle, FileText, Users } from "lucide-react";

const questions = [
  {
    title: "The friend at the bar",
    question: "Imagine running into a friend you haven't seen in months. They ask you what it's like working here. What do you tell them, in two minutes?",
    note: "Reveals perceived culture vs. declared culture. The informality of the scene dissolves the defensive filter.",
  },
  {
    title: "The permitted mistake",
    question: "Think about the last time something went wrong - a bad decision, a project that didn't work out. How did it end?",
    note: "Illuminates tolerance for failure and the real relationship with accountability.",
  },
  {
    title: "The new colleague",
    question: "If you had to explain to a new colleague the 'unwritten' things - the ones they'll never find in the manual - what would you tell them?",
    note: "Surfaces basic assumptions, Schein's third layer, the hardest to reach.",
  },
  {
    title: "The move",
    question: "If your company were to relocate, what would you bring with you and what would you leave behind - both physical and abstract?",
    note: "Reveals valued artifacts, real values, and what is tolerated but not loved.",
  },
  {
    title: "The last decision",
    question: "Think about the last important decision made in the company - how did you find out about it?",
    note: "Reveals real power systems, communication channels, perceived inclusion.",
  },
  {
    title: "Future challenges",
    question: "If you had to describe the company's big future challenges, which ones would you talk about?",
    note: "Reveals strategic alignment between board and management.",
  },
  {
    title: "The celebration",
    question: "The last time you or your team achieved something important, how did you celebrate?",
    note: "Reveals real recognition systems and emotional coherence.",
  },
  {
    title: "The meeting",
    question: "Think of a meeting you attend regularly - what's the feeling it leaves you with right after it ends?",
    note: "Reveals quality of organizational rituals and cultural vitality.",
  },
];

const techniques = [
  {
    id: "interviews",
    icon: MessageCircle,
    label: "Narrative interviews",
    when: "When depth matters more than breadth. When themes are sensitive.",
    reveals: "Concrete episodes, authentic emotions, contradictions that wouldn't emerge in a group. Particularly effective at surfacing basic assumptions - beliefs so deep that people don't know they hold them until they tell a story.",
  },
  {
    id: "questionnaire",
    icon: FileText,
    label: "Narrative questionnaire",
    when: "When scale matters more than depth. When the organization is large and responses need to be compared across hierarchical levels.",
    reveals: "Less depth than interviews but greater breadth. Above all, it produces comparative tensions - the same questions to board and management reveal gaps that are already a powerful cultural insight.",
  },
  {
    id: "workshop",
    icon: Users,
    label: "Team coaching & storytelling workshop",
    when: "When shared awareness and co-construction of meaning are needed.",
    reveals: "Real-time awareness. People listen to each other, recognize patterns, name tensions, discover shared assumptions. The diversity of voices at the same moment reveals multiple cultures coexisting without knowing it.",
  },
];

const LumenTechniquesEN = ({ embedded }: { embedded?: boolean }) => {
  const [activeTab, setActiveTab] = useState("interviews");
  const active = techniques.find((t) => t.id === activeTab)!;
  const ActiveIcon = active.icon;

  const Wrapper = embedded ? "div" : "section";

  return (
    <Wrapper className={embedded ? "pb-8" : "py-24 bg-background"}>
      <div className={embedded ? "" : "container-wide max-w-5xl"}>
        {!embedded && (
          <AnimatedSection>
            <p className="text-eyebrow font-mono text-primary mb-4">The instrument</p>
            <h2 className="text-section mb-4">The techniques that make up Lumen</h2>
          </AnimatedSection>
        )}
        <AnimatedSection>
          <p className="text-muted-foreground max-w-2xl mb-12 text-lg">
            Lumen is not a fixed procedure - it's a set of techniques combined based on the project.
            Each technique has a specific role in the process of cultural revelation.
          </p>
        </AnimatedSection>

        {/* Tabs */}
        <AnimatedSection delay={100}>
          <div className="flex flex-wrap gap-2 mb-8">
            {techniques.map((t) => {
              const Icon = t.icon;
              return (
                <button
                  key={t.id}
                  onClick={() => setActiveTab(t.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                    activeTab === t.id
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted/60 text-muted-foreground hover:bg-muted"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {t.label}
                </button>
              );
            })}
          </div>
        </AnimatedSection>

        {/* Active technique detail */}
        <AnimatedSection delay={150}>
          <div className="border border-border rounded-xl p-8 mb-12">
            <div className="flex items-center gap-3 mb-6">
              <ActiveIcon className="w-5 h-5 text-primary" />
              <h3 className="font-bold text-lg">{active.label}</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-primary mb-2">When</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{active.when}</p>
              </div>
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-primary mb-2">What it reveals</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{active.reveals}</p>
              </div>
            </div>

            {activeTab === "workshop" && (
              <div className="mt-6 pt-6 border-t border-border/50">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Facilitated sessions where groups collectively respond to generative questions and work
                  together to make sense of their experiences. We use team coaching and storytelling techniques
                  to surface collective narratives.
                </p>
              </div>
            )}
          </div>
        </AnimatedSection>

        {/* The 8 questions */}
        {(activeTab === "interviews" || activeTab === "questionnaire") && (
          <>
            <AnimatedSection delay={200}>
              <p className="font-mono text-xs uppercase tracking-widest text-primary mb-4">The 8 questions</p>
              <p className="text-muted-foreground max-w-2xl mb-8 text-lg">
                The 8 questions that cut across Schein's three levels.
              </p>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {questions.map((q, i) => (
                <AnimatedSection key={q.title} delay={200 + i * 50}>
                  <div className="border border-border rounded-xl p-6 h-full flex flex-col gap-3 hover:border-primary/30 transition-colors">
                    <h4 className="font-bold text-sm">{q.title}</h4>
                    <p className="italic text-muted-foreground text-xs leading-relaxed flex-1">"{q.question}"</p>
                    <p className="text-xs text-muted-foreground border-t border-border/50 pt-3 leading-relaxed">{q.note}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </>
        )}
      </div>
    </Wrapper>
  );
};

export default LumenTechniquesEN;
