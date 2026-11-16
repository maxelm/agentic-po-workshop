import { INTRO, NEEDS, PHASES } from "./demoData.js";
import "./GuidedDemoWidget.css";

export default function GuidedDemoWidget() {
  return (
    <div className="gdw">
      <section className="gdw__hero">
        <div className="gdw__eyebrow">Guided Demo</div>
        <h2>From an idea to epic and features in Azure DevOps</h2>
        <p>{INTRO}</p>
        <p className="gdw__needs">
          <strong>You need:</strong> {NEEDS.join(" · ")}
        </p>
      </section>

      {PHASES.map((phase) => (
        <section key={phase.id} className="gdw__phase" aria-label={phase.title}>
          <h3 className="gdw__phase-title">{phase.title}</h3>
          {phase.steps.map((step) => (
            <details
              key={step.id}
              className="gdw__card gdw__step"
              style={{ "--gdw-accent": step.accent }}
            >
              <summary className="gdw__step-head">
                <span className="gdw__badge">{step.step}</span>
                <h4>{step.title}</h4>
              </summary>
              <p className="gdw__say">{step.say}</p>
              {step.commands && (
                <>
                  <pre className="gdw__prompt">{step.commands.join("\n")}</pre>
                  <p className="gdw__note">{step.commandNote}</p>
                </>
              )}
              <div className="gdw__label">Prompt</div>
              <pre className="gdw__prompt">{step.prompt}</pre>
              {step.followUp && (
                <>
                  <div className="gdw__label">Follow-up</div>
                  <pre className="gdw__prompt">{step.followUp}</pre>
                </>
              )}
              <p className="gdw__look">
                <strong>Point out:</strong> {step.point}
              </p>
            </details>
          ))}
        </section>
      ))}
    </div>
  );
}
