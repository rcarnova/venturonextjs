import { SEO } from "@/components/SEO";

import ArticleLayoutEN from "@/components/ArticleLayoutEN";


const content = `Avis was second. Hertz was first.

Instead of hiding it, Avis built an advertising campaign around it. The message was simple: those who are second have a tension that those who are first no longer have. *We try harder.*

It's one of the most honest things a company can do: turn a limit into a direction.

Companies make promises constantly. *Our product won the best design Europe award.* The subtext: buy it, you won't regret it. *Our company won the great place to collaborate award.* The subtext: come work here, you'll be fine.

I have nothing against promises. On the contrary.

But as they taught us as children: promises must be kept.

The temptation to make promises we can't fully keep is a risk not worth taking. The problems it creates are almost always greater than the benefits it brings. A candidate who arrives with high expectations and finds something different isn't just disappointed: they're a witness. They tell the story. And the stories told by the people who leave weigh more than any employer branding campaign.

Yet there's something beautiful in promises, even those we feel are still a bit far from our possibilities. They are tensions. They tell us where we want to arrive, even when we aren't there yet.

I imagine an entrepreneur asking the board: *can we promise that here people will be well at work? Is there something we need to work on before this promise is truly consistent with what we live every day?*

That question is rare. And it's worth more than any value written on a poster.

Because a value you can't promise isn't a value yet. It's an aspiration. And confusing the two things, communicating as if you were already what you want to become, is the fastest way to lose the trust of the people you have inside before even those you want to attract.

> *Implicit culture doesn't exist. Only the culture you live exists: the one people see every day in behaviors, in promotions, in difficult decisions. Making it explicit doesn't mean writing it on a poster. It means asking yourself if you're ready to promise it.*`;

const ValuesArePromises = () => {
  return (
    <>
      <SEO
        title="Values aren't posters. They're promises."
        description="Companies make promises constantly. But as they taught us as children: promises must be kept."
        canonical="https://venturoconsulting.it/en/magazine/values-are-promises"
        lang="en"
        alternateUrls={{
          it: "https://venturoconsulting.it/magazine/i-valori-non-sono-poster",
          en: "https://venturoconsulting.it/en/magazine/values-are-promises",
        }}
      />
      <ArticleLayoutEN
        category="Culture"
        title="Values aren't posters. They're promises."
        subtitle="Companies make promises constantly. But as they taught us as children: promises must be kept."
        date="Mar 1, 2026"
        readTime="4 min"
        heroImage=""
        content={content}
      />
    </>
  );
};

export default ValuesArePromises;
