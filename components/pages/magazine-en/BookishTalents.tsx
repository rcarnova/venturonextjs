import { SEO } from "@/components/SEO";

import ArticleLayoutEN from "@/components/ArticleLayoutEN";

const content = `There's a precise moment when a cultural trend stops being an exception and becomes a signal. In the last two years, the most followed social profiles among Millennials and Gen Z don't belong to those showing vacations or outfits, but to those who read. "Bookish influencers" — ordinary people sharing reading notes, full shelves, slow conversations about books — gather millions of followers on TikTok and Instagram. Vogue called them the face of a new aesthetic: less internet, more intellect.

It's not nostalgia. It's a physiological response to overload. People look for depth because they're hungry for it. They look for contexts in which to think, not just to react. They look for identities built on what they know, not only on what they show. This isn't only about individual cultural consumption: it's about how people choose where to work, who to work for, and why to stay.

The signal organizations are missing is this: the most interesting talent today isn't only after benefits or flexibility. They want environments where complexity is welcome. Environments where people actually think.

## The silent gap

The problem we see repeated in organizations is subtle but expensive. Companies invest in employer branding built on declared values — innovation, growth, inclusion — without ever asking whether those same values have a recognizable shape in people's daily life. The result is a silent gap between what is communicated outside and what is lived inside.

This gap doesn't explode. It settles. It shows up in meetings where no one asks hard questions, in onboarding that conveys no real story, in conversations between managers and collaborators that always stay on the surface. The organization speaks, but says nothing worth listening to.

The paradox is that many of these companies have a real culture — rich, complex, sometimes contradictory. But they don't know it. They've never made it visible to themselves. And so they can't transmit it, nor use it as a lever to attract those who are looking for exactly that.

## A story from the North-East

A few months ago we worked with a manufacturing company in north-east Italy. Sixty years of history, third generation in charge, exporting to forty countries. When we asked the HR team how they told the company's culture to candidates, they showed us a brochure. Nice graphics, reassuring sentences, no real voice.

We did something simple: we asked twenty people — from the worker with thirty years of seniority to the new graduate hired six months earlier — to tell us about a moment when they truly understood where they worked. Not the values. A moment. A scene. What emerged was powerful, specific, unrepeatable: stories of decisions taken against the grain, of mistakes publicly admitted by the founder, of informal rituals no one had ever written down.

That wasn't a brochure. It was an identity. And when we returned it to the organization — as language, questions, narratives to use in selection processes and internal moments — something shifted. People recognized themselves. And those outside understood whether they really wanted in.

## In short, for those who decide

- Organizational culture isn't built: it's brought to the surface. It already exists, often buried under institutional language.
- The talent you want is becoming more demanding about the intellectual and relational quality of environments, not only about economic conditions.
- Authentic employer branding isn't written at a desk: it's drawn from what people actually live and remember.
- The "unsaid" inside an organization is often the most strategic data no one has read yet.
- Companies that learn to name their own identity will have a real competitive advantage in the coming years — not only in communication, but in retaining those who are worth it.

## What to do — questions for those who lead

- If we asked five people from your team to tell a moment that defines the company's culture, would the answers resemble each other?
- How much of what you communicate outside is recognizable — without mediation — to those already working inside?
- Are there stories, rituals or informal habits in your organization that no one has ever turned into conscious language?
- Does your selection process filter people for skills, or also for real cultural affinity?

## The age of noise creates hunger for substance

The age of noise is producing, by reaction, people looking for substance. The organizations that learn to find it inside themselves will be the ones that attract exactly these people.`;

const BookishTalents = () => {
  return (
    <>
      <SEO
        title="Bookish influencers and talent's new hunger for substance"
        description="Millennials and Gen Z follow those who read, not those who show. A signal for employer branding: talent wants places where people actually think."
        canonical="https://venturoconsulting.it/en/magazine/bookish-talents-substance"
        lang="en"
        alternateUrls={{
          it: "https://venturoconsulting.it/magazine/bookish-talenti-sostanza",
          en: "https://venturoconsulting.it/en/magazine/bookish-talents-substance",
        }}
      />
      <ArticleLayoutEN
        category="Organizational culture"
        title="Bookish influencers and talent's new hunger for substance."
        subtitle="Millennials and Gen Z follow those who read, not those who show. A signal: talent wants environments where people actually think. Employer branding alone is no longer enough."
        date="Apr 24, 2026"
        readTime="6 min"
        content={content}
      />
    </>
  );
};

export default BookishTalents;
