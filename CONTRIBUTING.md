# Contributing to HaloPay Documentation

Thank you for your interest in contributing to the **HaloPay Documentation**! This repository powers the official technical documentation and developer guides for the HaloPay offline-first payment protocol.

---

## 🚀 How to Contribute

### 1. Select an Open Issue
* Browse issues labeled status: ready-for-dev, documentation, or good first issue.
* Review the requested changes, diagrams, or guide updates.

### 2. Request Assignment
* Please comment on the issue before beginning work to ensure coordination across technical writers and engineers.
* A maintainer will assign the issue to you.

### 3. Branching Strategy
* Create your branch from main:
  `ash
  git checkout -b docs/issue-<issue_number>-<short-description>
  `

### 4. Pull Request Standards
* **Title Format:** PR titles MUST reference the issue number:
  `	ext
  [#<issue_number>] <Imperative description of documentation update>
  `
  *Example:* [#12] Add offline Bluetooth mesh protocol architecture guide
* **Issue Linking:** In your PR description, include Closes #<issue_number>.

---

## 🛠️ Local Development & Quality Gates

The documentation site is built using **Next.js** and **Nextra** with MDX.

### 1. Install Dependencies
`ash
npm install
`

### 2. Run Local Development Server
`ash
npm run dev
`
Open http://localhost:3000 to review pages with live hot-reloading.

### 3. Build & Lint Check
`ash
npm run build
npm run lint
`

---

## 📜 Code of Conduct & Licensing

* **Respect & Collaboration:** Treat all contributors, reviewers, and readers with courtesy.
* **Licensing:** All documentation contributions are licensed under the **MIT License**.
