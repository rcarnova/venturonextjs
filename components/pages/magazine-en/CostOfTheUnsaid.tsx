import { SEO } from "@/components/SEO";

import ArticleLayoutEN from "@/components/ArticleLayoutEN";

const content = `There's a Gallup study that often comes up in our conversations with clients: 70% of employees aren't fully engaged in their work. They aren't dissatisfied, they aren't looking for another job. They are simply present without really being there. It's a number we all know, yet it keeps surprising us every time we encounter it inside a concrete organization.

What Gallup doesn't say — and what we see daily — is that this disengagement doesn't come from nowhere. It comes from conversations that never happened, from expectations never made explicit, from values declared in the corporate values and then contradicted in a Monday morning meeting. It comes from the unsaid that piles up, layer after layer, until it becomes culture.

Organizational culture isn't what we write on institutional websites. It's what happens when no one is watching. It's the sum of all the strategic silences, all the avoided conversations, all the questions no one ever dared to ask out loud.

## The repeating pattern

Entering an organization and listening is our first move. Not to collect data, but to understand what isn't being said. And the pattern is almost always the same: there's an official version of reality — that of the press releases, town halls, strategy slides — and then there's an unofficial version, the one circulating in hallways, WhatsApp messages, coffee breaks.

The problem isn't that the two versions exist. The problem is when the distance between them becomes so great that any form of trust becomes impossible. When people stop believing that leadership is saying what it really thinks, they also stop saying what they think. And at that point, the organization stops learning.

We've worked with companies that had invested significant amounts in climate surveys, wellbeing programs, engagement initiatives. The data improved. People kept leaving, or staying without being there.

## The turning point

A few months ago, in a workshop with the leadership team of a manufacturing company in northern Italy, we asked each of those present to complete this sentence: «The thing we never say openly in this organization is…»

The silence that followed lasted almost a full minute. Then an operations director, with twenty years in the company, said: «That we are all afraid of making mistakes, and that this makes us much slower than we should be.»

No one objected. Everyone nodded. It was the first time that sentence had been spoken out loud, in a room with the people who could do something about it.

From that conversation a process began that redesigned some fundamental decision-making mechanisms. Not because we discovered something new — that fear had been there for years — but because it had finally become nameable. And nameable things can be changed.

## In short (for those who have to decide)

- The cost of the unsaid doesn't appear on balance sheets, but is measured in turnover, decision-making slowness and missed innovation.
- Culture forms in the gaps between what the organization declares and what it actually rewards or punishes.
- Climate surveys measure symptoms. The conversations that matter explore causes.
- Making the unnameable nameable is an act of leadership, not vulnerability.
- Organizations that learn to say difficult things out loud become structurally faster and more solid.

## What to do

- What sentence, in your organization, does no one ever pronounce in a room with the right people?
- If you had to describe the real culture of your company — not the declared one, but the lived one — what would you say?
- When was the last time a difficult conversation changed something concrete in the way you work?
- Who, in your organization, has explicit permission to say what they really think?

> The invisible doesn't disappear because we don't look at it. It just takes more expensive forms. The first step is always the same: learning to see it.`;

const CostOfTheUnsaid = () => {
  return (
    <>
      <SEO
        title="The cost of the unsaid. Why 70% of employees aren't really there."
        description="Employee disengagement doesn't come from nowhere: it comes from the unsaid that piles up until it becomes culture. How to make the unnameable nameable inside an organization."
        canonical="https://venturoconsulting.it/en/magazine/cost-of-the-unsaid"
        lang="en"
        alternateUrls={{
          it: "https://venturoconsulting.it/magazine/il-costo-del-non-detto",
          en: "https://venturoconsulting.it/en/magazine/cost-of-the-unsaid",
        }}
      />
      <ArticleLayoutEN
        category="Organizational culture"
        title="The cost of the unsaid. Why 70% of employees aren't really there."
        subtitle="Employee disengagement doesn't come from nowhere: it comes from the unsaid that piles up, layer after layer, until it becomes culture."
        date="Mar 29, 2026"
        readTime="6 min"
        content={content}
      />
    </>
  );
};

export default CostOfTheUnsaid;
