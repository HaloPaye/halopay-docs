# HaloPay Documentation

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](https://opensource.org/licenses/MIT)
[![Node.js Version](https://img.shields.io/badge/Node.js-%3E%3D18.0.0-brightgreen.svg?style=flat-square)](https://nodejs.org)
[![Framework: Next.js](https://img.shields.io/badge/Framework-Next.js-black.svg?logo=next.js&style=flat-square)](https://nextjs.org)
[![Stellar Ecosystem](https://img.shields.io/badge/Ecosystem-Stellar-black.svg?logo=stellar&style=flat-square)](https://stellar.org)

Official documentation repository for the HaloPay offline-first Stellar payment protocol.

This repository houses the technical documentation for the HaloPay ecosystem, generated via Next.js and Nextra. HaloPay facilitates the bridging of digital humanitarian aid (USDC via SDP/Stellar Aid Assist) with local merchants operating in environments devoid of traditional payment rails. The protocol leverages offline-first Progressive Web Applications (PWAs), SEP-0007 Payment URIs, and SEP-24 Fiat Off-Ramps.

## Ecosystem Architecture

The HaloPay protocol is distributed across focused repositories to ensure separation of concerns and independent deployment lifecycles:

* **[halopay-mesh-relayer](https://github.com/HaloPaye/halopay-mesh-relayer)**: Asynchronous Rust daemon enabling peer-to-peer offline transaction gossip and double-spend conflict resolution over BLE and LoRa.
* **[halopay-yield-contracts](https://github.com/HaloPaye/halopay-yield-contracts)**: Soroban smart contracts and autonomous Python orchestrator managing merchant liquidity pools and treasury yields on Stellar.
* **[halopay-api](https://github.com/HaloPaye/halopay-api)**: Backend orchestration and anchor layer (Node.js/Express). Handles SEP-10 authentication, SEP-12 KYC processing, SEP-24/38 fiat conversions, and Horizon event streaming.
* **[halopay-pos](https://github.com/HaloPaye/halopay-pos)**: Merchant-facing Point of Sale Progressive Web App (Next.js/React). Engineered for offline-first operation and SEP-0007 payment requests.
* **[halopay-docs](https://github.com/HaloPaye/halopay-docs)**: (This repository) Centralized documentation site detailing protocol mechanics, implementation guides, and API specifications.

## Local Deployment

To run the documentation site locally for development, review, or contribution:

### System Requirements

* Node.js (v18.0.0 or higher)
* npm (v9.0.0 or higher)

### Installation Steps

1. Clone the repository to your local environment:
   ```bash
   git clone https://github.com/HaloPaye/halopay-docs.git
   cd halopay-docs
   ```

2. Install all required dependencies:
   ```bash
   npm install
   ```

3. Initialize the local development server:
   ```bash
   npm run dev
   ```

4. Navigate to `http://localhost:3002` in a compatible web browser. The application supports hot-module replacement (HMR) for all changes applied to `.mdx` files within the `src/pages` directory.

## Documentation Structure

All content is authored in MDX format and organized within the `src/pages` directory. The routing is determined by the filesystem structure:

* `index.mdx`: Core introduction and ecosystem overview.
* `protocol-mechanics.mdx`: In-depth technical breakdown of SEP-0007, SEP-10, SEP-12, and SEP-24 orchestration flows.
* `end-user-guides.mdx`: Configuration and operational guides for merchant POS and fiat off-ramping.
* `developer-guides.mdx`: Instructions for environment configuration, local deployment, and testing.
* `technical-reference.mdx`: Open-source repository links and Mermaid.js architecture diagrams.

Note: Mermaid diagrams are natively supported and rendered at compile-time via `@theguild/remark-mermaid`.

## Contribution Guidelines

HaloPay adheres to strict open-source contribution standards. Prior to submitting a pull request, contributors must review the [CONTRIBUTING.md](./CONTRIBUTING.md) document. All commits must follow the Conventional Commits specification.

## Security Policies

Security is a primary concern for the HaloPay ecosystem. If you discover a vulnerability within the documentation site or the core protocol, please follow the responsible disclosure guidelines outlined in [SECURITY.md](./SECURITY.md). Public disclosure prior to remediation is strictly prohibited.

## License

This software is distributed under the MIT License.
