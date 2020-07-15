import Head from 'next/head'; //eslint-disable-line

export default function HeadMeta({ children, pageTitle }) {
  return (
    <Head>
      <title>
        Lisandro Marchionni
        {pageTitle && ` || ${pageTitle}`}
      </title>
      <link
        async
        rel="shortcut icon"
        href="img/favicon.png"
        type="image/x-icon"
      />
      <link
        async
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap"
        rel="stylesheet"
      />
      <meta charSet="utf8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      {children}
    </Head>
  );
}
