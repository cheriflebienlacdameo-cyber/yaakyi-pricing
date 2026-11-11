const plans = [
  {
    name: "Free",
    description: "It’s totally free, get started",
    price: "€0",
    period: "/ forever",
    badge: "Current Plan",
    action: "Current Plan",
    tone: "free",
    features: [
      ["Moodboard", true],
      ["Basic clusters", true],
      ["Solo workspace", true],
      ["Export (limited)", false],
      ["Collaboration", false],
    ] as [string, boolean][],
  },
  {
    name: "Planner",
    description: "Monthly Payment",
    price: "€9",
    period: "/ month",
    badge: "Popular",
    action: "Subscribe Now",
    tone: "standard",
    features: [
      ["Everything in monthly", true],
      ["Save 23% per month", true],
      ["Founder badge", true],
      ["Early feature access", true],
      ["Priority Support", true],
    ] as [string, boolean][],
  },
  {
    name: "Planner",
    description: "Monthly payment",
    price: "€4",
    period: "/ month for the first 6 months",
    badge: "Popular",
    offer: "7-Day Free Trial",
    action: "Subscribe Now",
    tone: "standard",
    features: [
      ["Unlimited moodboards", true],
      ["Advanced clustering", true],
      ["Team collaboration", true],
      ["Priority export", true],
      ["Premium templates", true],
    ] as [string, boolean][],
  },
  {
    name: "Pro",
    description: "To be announced...",
    price: "TBA",
    period: "/ coming soon",
    badge: "Coming Soon",
    action: "Notify Me",
    tone: "soon",
    features: [
      ["Advanced AI features", true],
      ["API access", true],
      ["Custom integrations", true],
      ["Dedicated support", true],
      ["White label access", true],
    ] as [string, boolean][],
  },
  {
    name: "Enterprise",
    description: "To be announced...",
    price: "TBA",
    period: "/ coming soon",
    badge: "Coming Soon",
    action: "Contact Us",
    tone: "standard",
    features: [
      ["Advanced AI features", true],
      ["All API access", true],
      ["Custom integrations", true],
      ["Dedicated support", true],
      ["White label access", true],
    ] as [string, boolean][],
  },
];

function FeatureList({ features }: { features: [string, boolean][] }) {
  return (
    <ul className="feature-list">
      {features.map(([label, included]) => (
        <li key={label}>
          <span className={included ? "feature-check" : "feature-cross"} aria-hidden="true">
            {included ? "✓" : "×"}
          </span>
          <span>{label}</span>
        </li>
      ))}
    </ul>
  );
}

export default function Home() {
  return (
    <main className="pricing-page">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Transitstay home">
          <span>transitstay</span>
          <small>DISCOVER SMART</small>
        </a>
        <div className="account-actions">
          <span className="free-plan-pill">Free Plan</span>
          <span className="avatar" aria-label="Account">L</span>
        </div>
      </header>

      <section className="pricing-content" id="top">
        <a className="back-link" href="#top"><span aria-hidden="true">←</span> Back</a>
        <div className="intro">
          <h1>Choose Your Plan</h1>
          <p>Start free, upgrade when you are ready!</p>
        </div>

        <div className="plans-grid">
          {plans.map((plan, index) => (
            <article className={`plan-card ${plan.tone} plan-${index + 1}`} key={`${plan.name}-${index}`}>
              <div className="plan-heading">
                <div>
                  <h2>{plan.name}</h2>
                  <p className="plan-description">{plan.description}</p>
                </div>
                <div className="badges">
                  {plan.offer && <span className="badge offer-badge">{plan.offer}</span>}
                  <span className="badge">{plan.badge}</span>
                </div>
              </div>
              <div className="price-line">
                <strong>{plan.price}</strong>
                <span>{plan.period}</span>
              </div>
              <button className="plan-button" disabled={plan.tone === "free" || plan.tone === "soon"}>
                {plan.action}
              </button>
              <FeatureList features={plan.features} />
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
