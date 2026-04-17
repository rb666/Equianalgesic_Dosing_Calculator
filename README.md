# Equianalgesic Dose Calculator

Static clinical decision support website for converting between opioid
equianalgesic doses, calculating oral morphine equivalents, and estimating
oral or IV methadone conversion from a 24-hour oral morphine equivalent total.
It also includes a MEDD-based buprenorphine cross-titration schedule tool for
Belbuca and Suboxone. The site is designed for GitHub Pages and has no build
step.

The main converter also includes methadone source and route-switching entries:
10 mg oral methadone is configured as 47 mg oral morphine equivalent, and
5 mg IV methadone is configured as equivalent to 10 mg oral methadone. The
dedicated methadone calculator remains the intended tool for converting from
non-methadone opioids to methadone.

## Files

- `index.html` contains the calculator interface, safety warning, and reference
  tables.
- `styles.css` contains responsive styling.
- `script.js` contains the conversion table and calculator logic.

## GitHub Pages

See `PUBLISHING.md` for the exact GitHub repository creation, push, and Pages
settings steps.

The site can also be opened directly from `index.html` in a browser.
