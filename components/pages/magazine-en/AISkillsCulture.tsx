import { SEO } from "@/components/SEO";

import ArticleLayoutEN from "@/components/ArticleLayoutEN";

const content = `According to Il Sole 24 Ore, Italian companies struggling to scale AI almost always complain about the same thing: lack of skills, hard-to-find hybrid roles, training gaps. It's a correct analysis. But incomplete.

The data is clear: the AI-related job market is growing in double digits, universities are racing to update curricula, large companies are investing in reskilling. Yet most artificial intelligence projects stall. Not in datacenters. Not in models. They stall in meetings, in decision-making processes, in conversations that never happen.

We work with organizations that have budget, talent and intention. What is often missing isn't found on LinkedIn.

## The repeating pattern

There's a scene we see almost every time, with small variants. A company launches an AI pilot project with great enthusiasm. Tools arrive, consultants arrive, slides arrive. After six months, the project is technically working but organizationally stuck. Nobody really uses it. Or rather: the usual ones use it, those who would have adopted any novelty.

The standard diagnosis is: resistance to change. The standard cure is: more training, more change management, more internal communication.

These answers aren't wrong. They're insufficient. Because they treat the symptom, not the cause.

The real problem is that AI touches something much deeper than technical skills: it touches people's professional identity. Who am I if a machine does what I used to do? What is my experience worth if a model replicates it in seconds? These questions are never said out loud. But they drive every behavior.

## The turning point: a concrete scene

A few months ago, in a workshop with the marketing team of a medium-sized manufacturing company, we asked something simple: tell us about a moment when you used AI and felt uncomfortable.

Silence. Then, slowly, someone said: «I felt like an impostor. As if I were cheating.»

She was a content manager with twelve years of experience. Excellent. She already used AI every day. But she did it secretly, almost ashamed, because in that company's culture — never declared, never written anywhere — professional value was measured by visible effort. By dedicated time. By artisanal sweat.

AI wasn't a skills problem. It was a problem of unprocessed organizational identity.

From that conversation emerged a project to redefine professional values that unlocked adoption far more than any prompt engineering course.

## In short (for those who have to decide)

- AI skills can be acquired. The culture that allows them to be used is built, and requires more time and more intention.
- The most dangerous gap isn't between those who know how to use AI and those who don't. It's between those who can say so openly and those who have to hide it.
- Every organization has an implicit narrative about what it means to "work well." AI puts it in crisis. Ignoring it doesn't solve it.
- AI projects that scale almost always have one thing in common: a leader who has made the conversation about professional identity explicit and legitimate.
- Investing only in technical training without working on culture is like changing a car's engine without touching the steering wheel. It accelerates, but it doesn't know where to go.

## What to do: questions for the reader

1. In your organization, is there a safe space where people can say "I don't know how to use it" or "it scares me" without losing credibility?
2. How is professional value measured today? Is that measure compatible with a way of working augmented by AI?
3. Who are your "silent early adopters," those who already use AI but don't declare it? What does their silence tell you about your culture?
4. If you had to describe the professional identity your company rewards, does that identity have room for artificial intelligence, or does it exclude it by definition?

> Skills can be trained. Culture has to be worked on. And as long as organizations treat AI as a technical problem, they will continue to find technical answers to questions that are deeply human.`;

const AISkillsCulture = () => {
  return (
    <>
      <SEO
        title="It's not (only) a skills problem. AI and organizational culture."
        description="AI projects don't get stuck in datacenters, but in meetings and conversations that never happen. Why AI adoption is, first of all, a question of organizational identity."
        canonical="https://venturoconsulting.it/en/magazine/ai-skills-culture"
        lang="en"
        alternateUrls={{
          it: "https://venturoconsulting.it/magazine/competenze-ai-cultura",
          en: "https://venturoconsulting.it/en/magazine/ai-skills-culture",
        }}
      />
      <ArticleLayoutEN
        category="Organizational culture"
        title="It's not (only) a skills problem. AI and organizational culture."
        subtitle="AI projects don't get stuck in datacenters, but in meetings and conversations that never happen. Adoption is, first of all, a question of identity."
        date="Apr 5, 2026"
        readTime="6 min"
        content={content}
      />
    </>
  );
};

export default AISkillsCulture;
