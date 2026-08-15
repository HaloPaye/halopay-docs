export default {
  logo: <span>HaloPay Docs</span>,
  project: {
    link: 'https://github.com/HaloPaye',
  },
  docsRepositoryBase: 'https://github.com/HaloPaye/halopay-docs/tree/main',
  head: (
    <>
      <link rel="icon" type="image/png" href="/favicon.png" />
    </>
  ),
  useNextSeoProps() {
    return {
      titleTemplate: '%s – HaloPay'
    }
  },
  footer: {
    text: 'HaloPay',
  },
}
