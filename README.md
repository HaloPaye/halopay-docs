# HaloPay Documentation Engine

Source code and documentation portal for the HaloPay offline settlement network, built with Nextra and Next.js.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](LICENSE)
[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)](https://nextjs.org)
[![Nextra](https://img.shields.io/badge/Docs-Nextra-5f4b8b?style=flat-square)](https://nextra.site)

---

## Overview

This repository powers the centralized documentation site for the HaloPay protocol. It contains protocol specifications, developer integration guides, architecture blueprints, and merchant operational runbooks.

---

## Ecosystem Repositories

The HaloPay protocol consists of four core engineering modules:

* **[halopay-mesh-relayer](https://github.com/HaloPaye/halopay-mesh-relayer)**: Asynchronous Rust daemon enabling peer-to-peer store-and-forward transaction gossiping over BLE and local radio links.
* **[halopay-yield-contracts](https://github.com/HaloPaye/halopay-yield-contracts)**: Smart contract treasury vaults and autonomous Python agent managing merchant liquidity and yields.
* **[halopay-api](https://github.com/HaloPaye/halopay-api)**: High-throughput transaction settlement backend, KYC ingestion gateway, and real-time WebSocket event broadcaster.
* **[halopay-pos](https://github.com/HaloPaye/halopay-pos)**: Offline-first Progressive Web Application (PWA) merchant checkout terminal.

---

## Local Development

### Prerequisites
- Node.js v18.0.0 or higher
- npm v9.0.0 or higher

### Running Locally

```bash
# Clone repository
git clone https://github.com/HaloPaye/halopay-docs.git
cd halopay-docs

# Install dependencies
npm install

# Start local documentation server
npm run dev
```

Navigate to `http://localhost:3002` to view documentation pages with live hot-reloading.

---

## Content Organization

Documentation content is written in MDX and structured inside `src/pages/`:
- `index.mdx`: Network overview and executive architecture summary.
- `protocol-mechanics.mdx`: Cryptographic specifications, voucher formats, and partition conflict resolution.
- `developer-guides.mdx`: Environment configuration, API usage, and deployment steps.
- `end-user-guides.mdx`: Merchant terminal setup and thermal printer configuration.
- `technical-reference.mdx`: System diagrams, data schemas, and error codes.

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
