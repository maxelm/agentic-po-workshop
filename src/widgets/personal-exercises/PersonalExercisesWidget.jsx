import { EXERCISES } from "./exerciseData.js";
import "./PersonalExercisesWidget.css";

export default function PersonalExercisesWidget() {
  return (
    <div className="pew">
      <section className="pew__hero">
        <div className="pew__eyebrow">Personal Exercise</div>
        <h2>Choose something useful for your daily work</h2>
        <p>
          Choose one use case, work alone or with a partner, and use your prepared
          Copilot tool. No coding is needed for the main exercises. The prompts
          are optional starting points: adjust them to your goal and context.
          This site displays material; it does not connect to AI or Azure DevOps.
        </p>
        <ol>
          <li>Choose a task and gather context.</li>
          <li>Try it, review the result, and improve your prompt.</li>
          <li>Prepare one useful result and one lesson to share.</li>
        </ol>
      </section>

      <section className="pew__grid" aria-label="Exercise choices">
        {EXERCISES.map((exercise) => (
          <article key={exercise.id} className="pew__card">
            <h3>{exercise.title}</h3>
            <p><strong>Bring:</strong> {exercise.input}</p>
            <p><strong>Aim for:</strong> {exercise.outcome}</p>
            <details>
              <summary>Optional starter prompt</summary>
              <pre className="pew__prompt">{exercise.prompt}</pre>
            </details>
            <details>
              <summary>Go further</summary>
              <p>{exercise.stretch}</p>
            </details>
          </article>
        ))}
      </section>
    </div>
  );
}
