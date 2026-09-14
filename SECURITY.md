# Security Policy

HaloPay takes documentation security, content integrity, and preventing credential leakage very seriously.

---

## Supported Versions

Only the documentation deployed from the main branch is actively supported.

---

## Reporting Vulnerabilities

If you identify a security issue, exposed secret, or misleading security guideline within the HaloPay documentation, **please DO NOT create a public issue.**

Please notify our security team directly:

* **Email:** [security@halopay.io](mailto:security@halopay.io)
* **Telegram:** [@HaloPayDev](https://t.me/HaloPayDev)
* **Response SLA:** 24 hours.

---

## Documentation Integrity Guidelines

1. **No Sensitive Keys:** Documentation examples must NEVER contain real Stellar secret keys (S...), seed phrases, or live API credentials. Only use public testnet addresses (G...) or sanitized placeholders.
2. **Safe Link Verification:** External links to third-party endpoints, Stellar anchors, or developer tools must be verified for authenticity to protect developers against phishing attacks.
