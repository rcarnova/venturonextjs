import { SEO } from "@/components/SEO";

import ArticleLayoutEN from "@/components/ArticleLayoutEN";

const content = `There's a number that often comes up in conversations about company culture: 72% of employees say they don't understand the strategy of the organization they work for. Not because the strategy doesn't exist. But because the message that carries it doesn't survive the test of the corridor, the informal meeting, the coffee break. It's declared in a document, then it disappears.

We work every day with companies that invest in external communication — websites, campaigns, brand identity — and at the same time neglect the most important coherence: the one between what they declare to be and what their people actually live. It's a silent short circuit. Expensive. Often invisible until it produces damage.

The point is not aesthetic. It's not about aligning fonts or choosing a coherent color palette. It's about something deeper: the distance between the proclaimed identity and the lived identity.

## The pattern that repeats

The pattern we see repeating itself is this: an organization defines its values — often in a workshop, often with a consultant, often with good intentions — translates them into slides and publishes them on the website. Then it goes back to normal. The values stay there, framed in the HR portal, while inside the company people speak another language. A language made of unsaid things, informal hierarchies, meetings where the real decisions happen after the official meeting.

This isn't cynicism. It's organizational anatomy. Every human system produces a culture, whether it wants to or not. The question isn't "do we have a culture?" but "does the culture we produce every day resemble the one we say we have?"

When the answer is no — and it often is — a new employer branding campaign isn't enough. Updating the careers page isn't enough. The problem isn't in the communication: it's in the coherence between intention and behavior. And that's where you have to intervene.

## A story, to stay out of the abstract

A few months ago we worked with a manufacturing company in north-east Italy. Five hundred people, good market reputation, growing difficulty in retaining talent. The CEO welcomed us with a certainty: "The problem is salary. We can't compete with the multinationals."

We did what we always do before any formal analysis: we listened. Not to the managers. To the people. In short, informal conversations, without recording. What emerged wasn't about salary. It was about the distance between the values written on the entrance wall — innovation, respect, transparency — and what was happening every day: missing feedback, decisions handed down from above without explanation, good ideas vanishing into the void.

The turning point didn't come from a communication plan. It came when the CEO stopped asking "how do we communicate our values better?" and started asking "where do we betray them?" It's an uncomfortable question. It's also the only one that produces real change.

## In short, for those who decide

- The coherence that counts isn't visual, it's behavioral: it concerns the alignment between what an organization declares and what its people experience every day.
- Employer branding built on an identity not lived internally doesn't attract talent: it disappoints them, and accelerates turnover.
- Organizational unsaid has a real cost: it slows decisions, lowers engagement, erodes trust.
- Listening to people before communicating outwards isn't an HR activity: it's a strategic choice.
- The most solid cultures aren't those with the most beautiful values, but those in which daily behaviors tell the same story as the declared values.

## What to do: practical questions to start

- If you asked ten people from your organization to describe its internal culture, would the answers resemble what's written on the website?
- In the last six months, has a relevant decision betrayed one of the values you publicly declare? Who knows it, inside the company?
- Which important conversations never happen in official settings, and why?
- What would happen if you stopped communicating who you are and started asking yourselves who you really are?

---

Organizational identity isn't designed in a workshop. It reveals itself, every day, in a thousand small gestures. Serious work begins when you have the courage to look at them.`;

const DeclaredVsLivedIdentity = () => {
  return (
    <>
      <SEO
        title="Declared identity vs lived identity: the silent short circuit of organizations"
        description="72% of employees don't understand their company's strategy. It's not a communication problem: it's the distance between what an organization declares to be and what people live every day."
        canonical="https://venturoconsulting.it/en/magazine/declared-vs-lived-identity"
        lang="en"
        alternateUrls={{
          it: "https://venturoconsulting.it/magazine/identita-dichiarata-vissuta",
          en: "https://venturoconsulting.it/en/magazine/declared-vs-lived-identity",
        }}
      />
      <ArticleLayoutEN
        category="Organizational culture"
        title="Declared identity vs lived identity: the silent short circuit of organizations"
        subtitle="The point isn't aesthetic. It's the distance between what a company says it is and what its people live every day."
        date="Apr 27, 2026"
        readTime="6 min"
        content={content}
      />
    </>
  );
};

export default DeclaredVsLivedIdentity;
