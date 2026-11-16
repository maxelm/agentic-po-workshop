import { Link } from "react-router-dom";
import { AGENDA } from "./agendaData.js";
import "./AgendaWidget.css";

function AgendaItem({ item, index }) {
  const content = (
    <>
      <span className="aw__number" aria-hidden="true">
        {String(index + 1).padStart(2, "0")}
      </span>
      <span className="aw__title">
        {item.title}
        <small style={{ display: "block", fontWeight: 400 }}>
          {item.description}
        </small>
      </span>
      {item.path && (
        <span className="aw__link-hint" aria-hidden="true">
          Open ↗
        </span>
      )}
    </>
  );

  if (item.path) {
    return (
      <Link to={item.path} className="aw__item aw__item--linked">
        {content}
      </Link>
    );
  }

  return <div className="aw__item">{content}</div>;
}

export default function AgendaWidget() {
  return (
    <div className="aw">
      <section className="aw__hero">
        <div className="aw__eyebrow">Draft Workshop Agenda</div>
        <h2>What we'll cover today</h2>
        <p>
          A practical session for product owners, with a short
          introduction and time to try something relevant to your own work.
          Linked topics open the workshop material. The demo case is still to be confirmed.
        </p>
      </section>

      <ol className="aw__list" aria-label="Workshop agenda">
        {AGENDA.map((item, index) => (
          <li key={item.id}>
            <AgendaItem item={item} index={index} />
          </li>
        ))}
      </ol>
    </div>
  );
}
