import { SEO } from "@/components/SEO";

import ArticleLayoutEN from "@/components/ArticleLayoutEN";

const content = `We read about David Larbi this past weekend. A poet who has a million followers not because he shouts, but because he whispers.

And we paused on something he said:

> «People connect with me because they feel me present. You can't really connect if you're not personally there.»

It's exactly what we see in organizations that fail to attract or retain talent.

## It's not strategy that's missing. It's presence.

Budget isn't missing. Strategy isn't missing. Presence is missing.

- Missing are leaders who show up for who they really are.
- Missing are values that step out of the policy and into the hallway conversations.
- Missing is an identity that people can feel — not just read on the website.

## Knowing why you're fighting

Larbi also said something that concerns us all:

> «Being optimistic when there's negativity around you isn't toxic positivity. It's reminding yourself why you're fighting.»

We work on organizational culture. And the question we always ask the companies we work with is this: do your people know why they're fighting?

Because if the answer is no — or worse, if the answer is different from individual to individual — then the employer branding you'll build will be a façade. Beautiful. Empty. Temporary.

## Identity isn't designed. It emerges.

Identity isn't designed at a desk. It emerges. It needs to be listened to, named, then amplified.

This is our work.

> In your organization, who is truly present?`;

const PresenceIdentity = () => {
  return (
    <>
      <SEO
        title="Who is truly present? Identity, leadership and employer branding."
        description="Organizations that fail to attract talent don't have a strategy or budget problem: they have a presence problem. Leaders, values and identity that are felt, not just read."
        canonical="https://venturoconsulting.it/en/magazine/presence-identity"
        lang="en"
        alternateUrls={{
          it: "https://venturoconsulting.it/magazine/presenza-identita",
          en: "https://venturoconsulting.it/en/magazine/presence-identity",
        }}
      />
      <ArticleLayoutEN
        category="Organizational culture"
        title="Who is truly present? Identity, leadership and employer branding."
        subtitle="Strategy isn't missing. Budget isn't missing. Presence is missing. Missing are leaders who show up for who they really are."
        date="Apr 19, 2026"
        readTime="4 min"
        content={content}
      />
    </>
  );
};

export default PresenceIdentity;
