import { SEO } from "@/components/SEO";

import ArticleLayoutEN from "@/components/ArticleLayoutEN";

const content = `By June 7, 2026, every Italian company will have to make visible something they've kept in the shadows for decades.

EU Directive 2023/970 on pay transparency isn't just a matter of compliance.

It's a mirror.

The new rules impose objective pay criteria, prohibit asking candidates about salary history, and require publishing pay ranges before hiring. Companies above a certain threshold will have to report the gap between men and women.

In Italy, in some contexts, that gap reaches 40%.

A number that makes noise.

## What numbers don't say

But that number also tells something more subtle.

Because part of that difference doesn't come from the paycheck. It comes earlier.

It comes from how power is distributed inside organizations, who occupies leadership positions, which paths are considered leadership paths, which competencies are recognized as strategic and which remain in the background.

Numbers don't lie. But on their own, they're not enough to understand.

They're the surface of a culture.

## Two roads in front of the mirror

When a company discovers its pay gap, it faces a choice.

It can treat it as a technical problem to fix quickly — realign paychecks, sort out the numbers, archive the case.

Or it can use it as a starting point to understand how its organization really thinks: who gets promoted and why, which behaviors are rewarded, which silences are tolerated.

We work with those who choose the second road.

Because fixing the numbers without touching the culture produces compliance, not change. And compliance, on its own, has never retained anyone.

## In short

- EU Directive 2023/970 obliges Italian companies to make pay criteria and ranges public by June 2026.
- The pay gap isn't only a salary issue: it's the visible symptom of a distribution of power and recognition.
- Correcting numbers without questioning the culture produces compliance, not real change.
- Transparency becomes an opportunity only for those willing to look at what's behind the numbers.

## What to do

1. Are you treating the new regulation as an administrative obligation or as an opportunity to re-read your organization?
2. Can you explain — not justify — why certain positions are paid in a certain way?
3. When you look at who has reached the top, can you recognize the patterns of those who haven't?
4. Would the people who work with you understand your pay choices if they saw them published tomorrow?

---

Pay transparency is coming. For everyone, in the same way.

The question we ask ourselves — and that we ask the companies we work with — is this:

> Are you ready to look at what's behind those numbers?`;

const PayTransparency = () => {
  return (
    <>
      <SEO
        title="Pay transparency: the mirror companies can no longer avoid"
        description="EU Directive 2023/970 obliges Italian companies to make pay criteria public by June 2026. But the real issue isn't the numbers: it's the culture that generated them."
        canonical="https://venturoconsulting.it/en/magazine/pay-transparency"
        lang="en"
        alternateUrls={{
          it: "https://venturoconsulting.it/magazine/trasparenza-salariale",
          en: "https://venturoconsulting.it/en/magazine/pay-transparency",
        }}
      />
      <ArticleLayoutEN
        category="Organizational culture"
        title="Pay transparency: the mirror companies can no longer avoid"
        subtitle="EU Directive 2023/970 isn't just compliance. It's an opportunity to understand how your organization really thinks."
        date="Apr 17, 2026"
        readTime="5 min"
        content={content}
      />
    </>
  );
};

export default PayTransparency;
