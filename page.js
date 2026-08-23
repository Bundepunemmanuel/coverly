import { calculators } from "../data";

export default function HomePage() {
  return (
    <main>
      <div className="container">
        <section className="hero">
          <h1>Know exactly how much to buy.</h1>
          <p>
            Enter your measurements, get an exact quantity — bags, yards,
            gallons, whatever the job calls for. No guessing, no half-used
            leftover bags in the garage.
          </p>
        </section>

        <section className="calc-grid">
          {calculators.map((calc) => (
            <a key={calc.slug} href={`/${calc.slug}`} className="calc-card">
              <span className="calc-card-eyebrow">{calc.category}</span>
              <span className="calc-card-name">{calc.name}</span>
              <span className="calc-card-arrow">→</span>
            </a>
          ))}
        </section>
      </div>
    </main>
  );
}
