# Mentor–Mentee Coordination

A lightweight static web app created at the request of a B.E. professor to help him contact and coordinate with his mentors and mentees.

## Features

- Choose whether to enter a mentor's or mentee's name.
- Show a name-entry field and highlight the OK button when it contains text.
- Display an alert when a name is submitted.

This is currently a front-end prototype. It does not retrieve contact details, save names, or connect to a backend; the submission alert is a placeholder for future integration.

## Project structure

```text
.
├── assets/
│   ├── css/
│   │   └── styles.css
│   ├── images/
│   │   ├── logo.png
│   │   └── logo_elites.png
│   └── js/
│       └── scripts.js
├── index.html
└── README.md
```

## Run locally

No build step, package installation, or framework is required. Open `index.html` in a modern web browser, or serve the project directory with a local static HTTP server. For example, with Python 3 installed:

```sh
python -m http.server 8000
```

Then open <http://localhost:8000> in your browser.

## Requirements

- A modern web browser with JavaScript enabled.
- Python 3 only if using the optional local HTTP server command.
