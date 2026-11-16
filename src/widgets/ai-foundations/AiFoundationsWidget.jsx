import { FLOW, GROUPS } from "./foundationsData.js";
import "./AiFoundationsWidget.css";

export default function AiFoundationsWidget() {
  return (
    <div className="afw">
      <section className="afw__hero">
        <div className="afw__eyebrow">AI Foundations</div>
        <h2>The terminology, in plain language</h2>
        <p>
          A short vocabulary for the rest of the session. Skim it now and come
          back whenever a word in the exercises is unclear.
        </p>
        <ol className="afw__flow" aria-label="How the pieces fit together">
          {FLOW.map((item) => (
            <li key={item.label}>
              <strong>{item.label}</strong>
              <span>{item.note}</span>
            </li>
          ))}
        </ol>
      </section>

      {GROUPS.map((group) => (
        <section
          key={group.id}
          className="afw__group"
          style={{ "--afw-accent": group.accent }}
        >
          <h3>{group.title}</h3>
          <p className="afw__intro">{group.intro}</p>
          <div className="afw__grid">
            {group.terms.map((item) => (
              <article key={item.term} className="afw__card">
                <h4>{item.term}</h4>
                <p>{item.meaning}</p>
                <p className="afw__example">
                  <strong>In your work:</strong> {item.inWork}
                </p>
              </article>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
