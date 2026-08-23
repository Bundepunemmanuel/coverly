import { notFound } from "next/navigation";
import { calculators, getCalculatorBySlug } from "../../data";
import Calculator from "../../Calculator";

export function generateStaticParams() {
  return calculators.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }) {
  const calc = getCalculatorBySlug(params.slug);
  if (!calc) return {};
  return {
    title: `${calc.name} — Coverly`,
    description: calc.intro,
  };
}

export default function CalculatorPage({ params }) {
  const calc = getCalculatorBySlug(params.slug);

  if (!calc) {
    notFound();
  }

  return (
    <main>
      <div className="container">
        <nav className="breadcrumb">
          <a href="/">← All calculators</a>
        </nav>

        <div className="calc-page-header">
          <span className="calc-category">{calc.category}</span>
          <h1>{calc.name}</h1>
          <p className="calc-intro">{calc.intro}</p>
        </div>

        <Calculator calc={calc} />

        <section className="info-block">
          <h2 className="section-title">About this calculation</h2>
          <div className="info-grid">
            {calc.infoItems.map((item) => (
              <div className="info-item" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="faq-block">
          <h2 className="section-title">Questions people actually ask</h2>
          {calc.faq.map((item) => (
            <div className="faq-item" key={item.q}>
              <h3>{item.q}</h3>
              <p>{item.a}</p>
            </div>
          ))}
        </section>

        {calc.related.length > 0 && (
          <section className="related-block">
            <h2 className="section-title">Related calculators</h2>
            <div className="related-links">
              {calc.related.map((slug) => {
                const relatedCalc = getCalculatorBySlug(slug);
                if (!relatedCalc) return null;
                return (
                  <a key={slug} href={`/${slug}`}>
                    {relatedCalc.name} →
                  </a>
                );
              })}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
