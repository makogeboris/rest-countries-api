import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle` 

:root {
  --clr-white: hsl(0, 0%, 100%);
  --clr-black: hsl(0, 0%, 0%);
  --clr-grey-950: hsl(200, 15%, 8%);
  --clr-grey-400: hsl(0, 0%, 50%);
  --clr-grey-350: hsl(0, 0%, 59%);
  --clr-grey-300: hsl(0, 0%, 70%);
  --clr-grey-250: hsl(0, 0%, 77%);
  --clr-grey-50: hsl(0, 0%, 99%);
  --clr-blue-950: hsl(207, 26%, 17%);
  --clr-blue-900: hsl(209, 23%, 22%);
  
  --loader: hsl(208, 53.50%, 27.80%);
  --shadow: 0px 2px 4px rgba(0, 0, 0, 0.0562443);
  
  &,
  &.light-mode {
    --bg-app: hsl(0, 0%, 98%);
    --clr-elments: hsl(0, 0%, 100%);
    --clr-text: hsl(200, 15%, 8%);
    --clr-input: hsl(0, 0%, 50%);
    --outline: hsl(0, 0%, 0%);
    --select-hover: hsl(0, 0%, 93%);
    --select-selected: hsl(0, 0%, 85%);  
 }

  &.dark-mode {
    --bg-app: hsl(207, 26%, 17%);
    --clr-elments: hsl(209, 23%, 22%);
    --clr-text: hsl(0, 0%, 100%);
    --clr-input: hsl(0, 0%, 100%);
    --outline: hsl(0, 0%, 100%);
    --select-hover: hsl(209, 23%, 27%);
    --select-selected: hsl(209, 23%, 32%);
  }

  /* font-sizes */
  --fs-2xl: 2rem;
  --fs-xl: 1.5rem;
  --fs-lg: 1.125rem;
  --fs-md: 1rem;
  --fs-sm: 0.875rem;
  --fs-xs: 0.75rem;

  /* font-weights */
  --fw-extra-bold: 800;
  --fw-semi-bold: 600;
  --fw-regular: 400;
  --fw-light: 300;

  /* line-heights */
  --lh-tight: 1.35;
  --lh-base: 1.375;
  --lh-relaxed: 1.45;
  --lh-loose: 2;
  --lh-ultra: 2.25;

  /* Spacing Scale */
  --space-xxs: 0.5rem;
  --space-xs: 1rem;
  --space-sm: 1.5rem;
  --space-md: 2rem;
  --space-lg: 2.5rem;
  --space-xl: 3rem;
  --space-2xl: 3.5rem;
  --space-3xl: 4rem;
  --space-4xl: 4.5rem;
  --space-5xl: 5rem;
}

body {
  font-family: "Nunito Sans", sans-serif;
  background-color: var(--bg-app);
}

/* RESET */

/* Box sizing rules */
*,
*::before,
*::after {
  box-sizing: border-box;
}

/* Prevent font size inflation */
html {
  -moz-text-size-adjust: none;
  -webkit-text-size-adjust: none;
  text-size-adjust: none;
  box-sizing: border-box;
}

/* Remove default margin in favour of better control in authored CSS */
body,
h1,
h2,
h3,
h4,
p,
figure,
blockquote,
dl,
dd {
  margin-block-end: 0;
}

/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
ul[role="list"],
ol[role="list"] {
  list-style: none;
}

/* Set core body defaults */
body {
  min-height: 100dvh;
  line-height: 1.5;
}

/* Remove default margins */
html,
body {
  margin: 0;
  padding: 0;
  border: 0;
}

* {
  margin: 0;
}

/* Set shorter line heights on headings and interactive elements */
h1,
h2,
h3,
h4,
button,
input,
label {
  line-height: 1.1;
}

/* Balance text wrapping on headings */
h1,
h2,
h3,
h4 {
  overflow-wrap: break-word;
}

/* A elements that don't have a class get default styles */
a:not([class]) {
  text-decoration-skip-ink: auto;
  color: currentColor;
}

/* Make images easier to work with */
img,
picture,
video,
canvas,
svg {
  display: block;
  max-width: 100%;
}

/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
  font: inherit;
}

/* Make sure textareas without a rows attribute are not tiny */
textarea:not([rows]) {
  min-height: 10em;
}

/* Anything that has been anchored to should have extra scroll margin */
:target {
  scroll-margin-block: 5ex;
}

/* remove animations for people who've turned them off */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

/* Smooth scroll */
@media (prefers-reduced-motion: no-preference) {
  html {
    scroll-behavior: smooth;
  }
}

button {
  cursor: pointer;
}

`;

export default GlobalStyles;
