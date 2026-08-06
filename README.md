# HaloPay Documentation

> Official documentation site for the HaloPay offline-first Stellar payment protocol.

This repository houses the official documentation for the HaloPay ecosystem, built with [Next.js](https://nextjs.org) and [Nextra](https://nextra.site/). HaloPay bridges digital humanitarian aid (USDC via SDP/Stellar Aid Assist) with local merchants in no-rail environments using offline-first PWAs, SEP-0007 Payment URIs, and SEP-24 Fiat Off-Ramps.

## 📚 Ecosystem Overview

HaloPay consists of three primary repositories:
- **[halopay-api](https://github.com/0dillon/halopay-api)**: The production-grade backend orchestration layer (Node.js/Express) that handles SEP-10 authentication, SEP-12 KYC limits, and SEP-24 interactive withdrawals with MoneyGram.
- **[halopay-pos](https://github.com/0dillon/halopay-pos)**: The offline-first merchant Point of Sale Progressive Web App (Next.js/React).
- **[halopay-docs](https://github.com/0dillon/halopay-docs)**: (This repository) The Nextra-powered Markdown documentation site detailing the protocol mechanics and implementation guides.

## 🚀 Getting Started

To run the documentation site locally for development or contribution purposes:

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (v18+) and your preferred package manager installed.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/0dillon/halopay-docs.git
   cd halopay-docs
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3002](http://localhost:3002) (or the port specified in your console) to view the live documentation site. The page auto-updates as you edit the MDX files in `src/pages`.

## 🏗️ Architecture & Content

The documentation uses MDX and is structured inside the `src/pages` directory:

- `index.mdx`: Introduction and ecosystem overview.
- `protocol-mechanics.mdx`: Detailed breakdown of SEP-0007, SEP-10, SEP-12, and SEP-24 orchestrations.
- `end-user-guides.mdx`: Merchant POS configuration and fiat off-ramping flows.
- `developer-guides.mdx`: Local environment variables and setup instructions.
- `technical-reference.mdx`: Open-source contribution links and Mermaid.js architecture diagrams.

> **Note:** Mermaid diagrams are natively rendered via `@theguild/remark-mermaid`.

## 🤝 Contributing

We welcome contributions to the HaloPay documentation! Whether it's fixing a typo, updating architecture diagrams, or expanding guides, please see our [CONTRIBUTING.md](./CONTRIBUTING.md) for details on our conventional commit standards and pull request process.

## 🛡️ Security

If you discover a security vulnerability within the documentation or the wider HaloPay ecosystem, please review our [SECURITY.md](./SECURITY.md) guidelines for responsible disclosure. Do not open a public issue.

## 📄 License

This project is licensed under the MIT License.
