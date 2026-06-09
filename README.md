# Sigmo CI/CD

![CI Tests](https://github.com/YOUR_USERNAME/sigmo-ci-cd/actions/workflows/ci.yml/badge.svg)

A starter repository for the **Sigmo CI/CD Course** — a hands-on introduction to Continuous Integration and Continuous Delivery using GitHub Actions and modern deployment practices.

## Before You Start

This repository contains a few placeholders you'll need to replace as you work through the course:

| Placeholder | What to replace it with |
|-------------|------------------------|
| `YOUR_USERNAME` | Your GitHub username (e.g. `johndoe`) |
| `YOUR_PROJECT_ID` | Your GCP project ID (found in the GCP console) |

You'll be instructed when to replace each one during the course lessons. Don't worry about them until then!

---

## What Is CI/CD?

**Continuous Integration (CI)** is the practice of automatically building and testing code every time a change is pushed to a repository. This catches bugs early and ensures the codebase stays in a working state at all times.

**Continuous Delivery (CD)** takes it a step further — once code passes CI, it is automatically packaged and deployed to a staging or production environment. This eliminates manual deployment steps and makes shipping software faster and more reliable.

Together, CI/CD forms a pipeline:

```
Write code → Push to GitHub → Tests run automatically → Code is deployed
```

## What You'll Learn

- What CI/CD is and why it matters
- How to write and run automated tests
- How to set up GitHub Actions workflows
- How to automate deployments using GitHub Actions
- How to deploy a production-ready web application to the internet

## Prerequisites

- Basic understanding of Git and GitHub
- [Node.js](https://nodejs.org/) installed on your machine
- [Docker](https://www.docker.com/products/docker-desktop/) installed and running
- A [GitHub](https://github.com/) account
- A terminal (Mac/Linux) or [WSL 2](https://docs.microsoft.com/en-us/windows/wsl/install) on Windows

> **Windows users:** This course requires a Unix-like terminal. Make sure you have [WSL 2](https://docs.microsoft.com/en-us/windows/wsl/install) installed before getting started.

## Getting Started

1. Fork this repository by clicking the **Fork** button at the top right of the GitHub page.
2. Clone your forked copy to your local machine:

```bash
git clone https://github.com/YOUR_USERNAME/sigmo-ci-cd
cd sigmo-ci-cd
```

3. Install dependencies:

```bash
npm install
```

4. Copy the environment variables example file and fill in your values:

```bash
cp .env.example .env
```

5. Start the development server:

```bash
npm start
```

6. Open `http://localhost:8080` in your browser.

7. Follow along with the course lessons on [Sigmo](https://sigmo.com).

## Repository Structure

```
sigmo-ci-cd/
├── .github/
│   └── workflows/      # GitHub Actions CI/CD workflow files
├── static/
│   ├── index.html      # Main HTML page
│   └── style.css       # Stylesheet
├── migrations/         # Database migration files
├── server.js           # Node.js backend server
├── package.json        # Node.js dependencies
├── Dockerfile          # Docker image definition
├── .env.example        # Example environment variables
└── README.md           # You are here
```

## Environment Variables

| Variable | Description |
|----------|-------------|
| `TURSO_DB_URL` | Your Turso database URL |
| `TURSO_DB_TOKEN` | Your Turso authentication token |
| `PORT` | Port to run the server on (default: 8080) |

## Course

This repository is part of the **Sigmo** learning platform. To follow along with the full course, visit [sigmo.com](https://sigmo.com).

## License

This project is open source and available under the [MIT License](LICENSE).
