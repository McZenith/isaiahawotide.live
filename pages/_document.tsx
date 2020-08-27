import Document, { DocumentContext } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import Head from 'next/head';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            <Head>
              <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
              <meta name='application-name' content='Isaiah Awotide' />
              <meta name='apple-mobile-web-app-capable' content='yes' />
              <meta
                name='apple-mobile-web-app-status-bar-style'
                content='default'
              />
              <meta
                name='apple-mobile-web-app-title'
                content='Isaiah Awotide'
              />
              <meta
                name='description'
                content='Best Isaiah Awotide in the world'
              />
              <meta name='format-detection' content='telephone=no' />
              <meta name='mobile-web-app-capable' content='yes' />
              <meta
                name='msapplication-config'
                content='/static/icons/browserconfig.xml'
              />
              <meta name='msapplication-TileColor' content='#2B5797' />
              <meta name='msapplication-tap-highlight' content='no' />
              <meta name='theme-color' content='#000000' />
              <meta
                name='viewport'
                content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover'
              />
              <meta name='twitter:creator' content='@McZenith' />
              <meta property='og:type' content='website' />
              <meta property='og:title' content='Isaiah Awotide' />
              <meta
                property='og:description'
                content='Isaiah Awotide to the world'
              />
              <meta property='og:site_name' content='Isaiah Awotide' />
              <meta property='og:url' content='https://isaiahawotide.live' />
              <meta
                property='og:image'
                content='https://isaiahawotide.live/static/icons/apple-touch-icon.png'
              />
            </Head>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
}
