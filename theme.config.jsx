export default {
  logo: <span>HaloPay Docs</span>,
  project: {
    link: 'https://github.com/HaloPaye',
  },
  docsRepositoryBase: 'https://github.com/HaloPaye/halopay-docs/tree/main',
  useNextSeoProps() {
    return {
      titleTemplate: '%s – HaloPay'
    }
  },
  footer: {
    text: 'HaloPay',
  },
}
