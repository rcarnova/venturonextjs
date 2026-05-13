import { SEO } from "@/components/SEO";

import ArticleLayoutEN from "@/components/ArticleLayoutEN";

const content = `Remote working isn't an environmental problem. It's a mirror.

The Bank of Italy measures the emissions of hybrid work. The result is clear. The interesting question is another one.

The Bank of Italy, in collaboration with ENEA, published in January 2026 a study on the environmental impact of hybrid work (QEF n. 999). The numbers are sharp: each office day generates 4.1 kgCO2e from home-work commutes. A remote day generates 1.1 kgCO2e in extra household consumption. Positive balance, almost four times better.

It's good news for those who deal with environmental sustainability. But it's not where the most interesting game is played for those who deal with organizational culture.

## Remote doesn't create problems. It reveals them.

Hybrid work has made visible something that already existed: the relationship people have with their work. When work is experienced as an obligation — and not as a trajectory — the logic becomes simple: I sell the minimum time necessary. Remote doesn't produce this attitude. It amplifies it. It gives it structure.

The question that few organizations ask themselves is this: do people know how to answer "what does it mean to be good here"? Can they trace the value they're creating? Do they know what they're learning — and whether what they're learning is worth something elsewhere too?

If the answer is no, the corporate purpose doesn't solve anything. On the contrary, it makes things worse: it creates disillusionment in the people who really believe in it.

## The old model doesn't hold.

The manager who measures commitment by physical presence has lost their main tool. They can't see who's in the office. They can't use proximity as a proxy for dedication. Remote micromanagement is even more alienating than in-person micromanagement — and produces the same results: people learn to seem present, not to be present.

The new model requires something culturally more difficult: ferocious clarity about what it means to produce value in that role, in that team, at that specific moment.

Not "give your best." Operational criteria. Observable behaviors. The difference between mediocre, good and excellent — described in a way that anyone can recognize.

## Three conditions that change the game.

The first is that expectations be specific, not generic. It's not enough to say "we want proactive people." You need to say what proactivity means in that context: which decisions are expected to be taken autonomously, what it's worth raising your hand for, when to expect feedback and what kind.

The second is that value be defined by the team, not imposed from above. A quarterly review where you ask: what created the most impact in these months? What changes, in light of this? The manager brings constraints and context — not the answer.

The third is the accountability that emerges from visible interdependence. People feel responsible when they know others depend on them and they see the effect of their work. Not because they're paid to be.

## In short (for those who decide)

- Remote reveals the degree of meaning people find in their work — it doesn't create it.
- Abstract corporate purpose doesn't replace clarity about what it means to do your role well.
- Physical presence as a proxy for commitment is already over — whether we admit it or not.
- Forced accountability doesn't work: it emerges from visible interdependence.
- Investing in performance culture means defining criteria, not increasing control.

## What to do (before deciding on the hybrid policy)

1. In your organization, is there an operational description of what distinguishes those who work well from those who work badly — for each role?
2. Do people know how to trace the value they create, or do they only deduce it from annual feedback?
3. Is what people learn here transferable outside? Do they know it?
4. If tomorrow a collaborator asked you "what will I be rewarded for?", would you know how to answer specifically?

---

Hybrid work has made visible something that already existed. Organizations that face it as a policy problem are looking in the wrong place. Those that use it as a lever to rethink how value is created and recognized — those are building something that lasts.

> Source: Bank of Italy / ENEA, *"The environmental impact of remote work: evidence from a survey conducted at the Bank of Italy"*, QEF n. 999, January 2026.`;

const RemoteWorkAsMirror = () => {
  return (
    <>
      <SEO
        title="Remote working isn't an environmental problem. It's a mirror."
        description="The Bank of Italy / ENEA study measures the environmental impact of hybrid work. But the real game for organizational culture is another: remote doesn't create problems, it reveals them."
        canonical="https://venturoconsulting.it/en/magazine/remote-work-as-mirror"
        lang="en"
        alternateUrls={{
          it: "https://venturoconsulting.it/magazine/remote-working-specchio",
          en: "https://venturoconsulting.it/en/magazine/remote-work-as-mirror",
        }}
      />
      <ArticleLayoutEN
        category="Organizational culture"
        title="Remote working isn't an environmental problem. It's a mirror."
        subtitle="The Bank of Italy measures the emissions of hybrid work. The result is clear. The interesting question is another one."
        date="Apr 21, 2026"
        readTime="6 min"
        content={content}
      />
    </>
  );
};

export default RemoteWorkAsMirror;
