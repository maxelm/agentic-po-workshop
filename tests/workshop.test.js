import assert from "node:assert/strict";
import { after, before, test } from "node:test";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { createServer } from "vite";
import { AGENDA } from "../src/widgets/agenda/agendaData.js";
import { EXERCISES } from "../src/widgets/personal-exercises/exerciseData.js";

let server;
let widgets;

before(async () => {
  server = await createServer({
    server: { middlewareMode: true },
    appType: "custom",
  });
  ({ default: widgets } = await server.ssrLoadModule("/src/widgets/registry.js"));
});

after(async () => {
  await server?.close();
});

test("the agenda links to working workshop pages", () => {
  for (const item of AGENDA.filter((entry) => entry.path)) {
    const html = renderToStaticMarkup(
      React.createElement(
        MemoryRouter,
        { initialEntries: [item.path] },
        React.createElement(
          Routes,
          {},
          widgets.map((widget) =>
            React.createElement(Route, {
              key: widget.id,
              path: widget.path,
              element: React.createElement(widget.component),
            }),
          ),
        ),
      ),
    );
    assert.match(html, /<h2(?:\s|>)/, `${item.path} must render a topic page`);
  }
});

test("each exercise renders a selectable starter prompt and reviewable outcome", () => {
  const widget = widgets.find((entry) => entry.id === "personal-exercises");
  const html = renderToStaticMarkup(React.createElement(widget.component));

  assert.equal((html.match(/class="pew__card"/g) ?? []).length, EXERCISES.length);
  assert.equal(
    (html.match(/<summary>Optional starter prompt<\/summary>/g) ?? []).length,
    EXERCISES.length,
  );
  assert.equal(
    (html.match(/<pre class="pew__prompt">/g) ?? []).length,
    EXERCISES.length,
  );
  for (const exercise of EXERCISES) {
    assert.ok(html.includes(renderToStaticMarkup(React.createElement("h3", {}, exercise.title))));
    assert.ok(html.includes(renderToStaticMarkup(
      React.createElement("pre", { className: "pew__prompt" }, exercise.prompt),
    )));
    assert.ok(html.includes(renderToStaticMarkup(
      React.createElement("p", {}, React.createElement("strong", {}, "Aim for:"), " ", exercise.outcome),
    )));
  }
  assert.ok(html.includes("does not connect to AI or Azure DevOps"));
});
