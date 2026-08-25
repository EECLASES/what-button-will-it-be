# Button Demo

A minimal button built with plain HTML, CSS, and JavaScript — no frameworks, no build step.


<!--[TODO: maybe *insert sad, crying face*
**Live demo:** https://mrmikeymarks.github.io/button-demo/
-->




## Files

| File | Purpose |
| --- | --- |
| [`index.html`](index.html) | Markup — the `<button>` element and the output paragraph |
| [`styles.css`](styles.c

Then visit http://localhost:8000.

## How it works

`index.html` gives the button an `id`, so `script.js` can find it with
`document.getElementById` and attach a `click` listener. Each click increments a
counter and updates the `textContent` of the `<p id="output">` element. The CSS
keeps colors in `:root` custom properties so a theme change is a one-line edit.

## Documentation

**The elements and APIs used here**

- [`<button>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button) — MDN
- [`document.getElementById()`](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById) — MDN
- [`EventTarget.addEventListener()`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener) — MDN
- [`Element.textContent`](https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent) — MDN
- [Using CSS custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) — MDN
- [`:hover`](https://developer.mozilla.org/en-US/docs/Web/CSS/:hover), [`:active`](https://developer.mozilla.org/en-US/docs/Web/CSS/:active), [`:focus-visible`](https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible) — MDN
- [`transition`](https://developer.mozilla.org/en-US/docs/Web/CSS/transition) — MDN
- [Template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) — MDN

**Accessibility**

- [ARIA: button role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/button_role) — MDN
- [WCAG 2.2 — Focus Visible](https://www.w3.org/WAI/WCAG22/Understanding/focus-visible.html) — W3C

**Learning the basics**

- [Getting started with the web](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web) — MDN
- [JavaScript first steps](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps) — MDN

**Hosting this page**

- [GitHub Pages documentation](https://docs.github.com/en/pages) — GitHub
- [Configuring a publishing source](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site) — GitHub
- [Using a custom domain](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site) — GitHub

## License

MIT
