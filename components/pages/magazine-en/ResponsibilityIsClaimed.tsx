import { SEO } from "@/components/SEO";

import ArticleLayoutEN from "@/components/ArticleLayoutEN";

const content = `In healthy organizations people don't wait for someone to assign them responsibility. They demand it.

It's a subtle but precise indicator of how a culture is doing. When people want to be responsible for something — for a project, for a decision, for a result — it means they feel safe enough to expose themselves. That they know what happens if they make a mistake, and they go for it anyway.

When instead no one raises their hand, the problem isn't the org chart.

The most common symptom is vagueness. Undefined roles, blurred boundaries, decisions that wait for weeks without anyone moving. Everyone contributes, no one decides. It's called collaboration — but often it's something else.

**It's fear.**

Or worse: it's convenience.

There's a dynamic in organizations that exists but is rarely named. The boss wants to do it himself? Better that way — I don't take responsibility, I don't risk being wrong, I don't expose myself. It's a form of silent collusion that doesn't produce visible conflicts but slowly empties the organization of energy and initiative.

No one declares it. Everyone practices it.

The result is an organization where people learn that staying in the shadows is safer than exposing themselves. And when this becomes the unwritten rule — when everyone knows that's how it's done — it has become culture.

**And culture is never wrong. It's just culture.**

Getting out of it isn't a matter of clearer job descriptions or a better-filled-out RACI matrix. It's a matter of creating the conditions for someone to be able to demand responsibility again without feeling in danger.

> That's the question worth asking.`;

const ResponsibilityIsClaimed = () => {
  return (
    <>
      <SEO
        title="Responsibility isn't delegated. It's claimed."
        description="In healthy organizations people don't wait for someone to assign them responsibility. They demand it."
        canonical="https://venturoconsulting.it/en/magazine/responsibility-is-claimed"
        lang="en"
        alternateUrls={{
          it: "https://venturoconsulting.it/magazine/la-responsabilita-non-si-delega",
          en: "https://venturoconsulting.it/en/magazine/responsibility-is-claimed",
        }}
      />
      <ArticleLayoutEN
        category="Organization"
        title="Responsibility isn't delegated. It's claimed."
        subtitle="In healthy organizations people don't wait for someone to assign them responsibility. They demand it."
        date="Mar 8, 2026"
        readTime="4 min"
        content={content}
      />
    </>
  );
};

export default ResponsibilityIsClaimed;
