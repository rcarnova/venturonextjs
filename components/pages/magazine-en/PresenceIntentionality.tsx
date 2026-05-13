import { SEO } from "@/components/SEO";

import ArticleLayoutEN from "@/components/ArticleLayoutEN";

const content = `Tiziano Terzani and his wife, in the years of her illness, chose to communicate only by letter.

The slowest tool. The most asynchronous.

Yet those letters made them feel close. The phone, no. When they said goodbye, they felt more alone.

Closeness is born from intentionality, not technology.

This image often comes back to me when I work with organizations. Because the problem I see is never the medium — remote, hybrid, in-person. It's the quality of attention we bring with us.

## Present, but elsewhere

We've debated for years about presence vs remote. But anyone who has attended an in-office meeting knows that feeling: people physically there, mentally already elsewhere.

At the next meeting. At the urgent task. At the notification that just came in.

They're there. But not entirely.

## The organizational cost

In organizations this has a precise cost:

- More reactive, less strategic decisions.
- Thinner relationships, less able to hold complexity.
- Engagement that erodes — because people feel it when they aren't really seen.

## How presence is really measured

Presence isn't measured by the badge or the active webcam. It's measured in other signals:

- In the depth of conversations.
- In the clarity that remains after a meeting.
- In the absence of rework and misunderstandings.
- In the ability to ask a question that shifts the reasoning.

Where these signals are missing, presence is only formal.

## The question that matters

Because the question that matters isn't where we are. It's how we are, when we're there.

> In your organization, is presence a skill that's trained — or is it still taken for granted?`;

const PresenceIntentionality = () => {
  return (
    <>
      <SEO
        title="Closeness is born from intentionality, not technology."
        description="It's not remote vs office: it's present vs elsewhere. The quality of attention we bring into a room matters more than where that room is."
        canonical="https://venturoconsulting.it/en/magazine/presence-intentionality"
        lang="en"
        alternateUrls={{
          it: "https://venturoconsulting.it/magazine/presenza-intenzionalita",
          en: "https://venturoconsulting.it/en/magazine/presence-intentionality",
        }}
      />
      <ArticleLayoutEN
        category="Organizational culture"
        title="Closeness is born from intentionality, not technology."
        subtitle="It's not remote vs office. It's present vs elsewhere. The quality of attention you bring into a room matters more than where that room is."
        date="Apr 12, 2026"
        readTime="4 min"
        content={content}
      />
    </>
  );
};

export default PresenceIntentionality;
