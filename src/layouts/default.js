import Head from 'next/head'; //eslint-disable-line
import Header from '../components/Header'; //eslint-disable-line

export default function Layout({
  children,
  pageTitle,
  bgColor = '#292A2E',
  textColor = 'white',
}) {
  return (
    <>
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
        <style>{`
          * { 
            margin: 0;
            padding: 0;
          }
          body {
            font-family: Montserrat, sans-serif; 
            height: 100vh;
            background-color: #C7CDCF;
            overflow: hidden;
          }
          main {
            position: absolute;
            box-sizing: border-box;
            height: 89vh;
            width: 60vw;
            background-color: ${bgColor};
            bottom: 0;
            right: 0;
            box-shadow: -20px 20px 0px 0px rgba(15,15,15,.16);
            color: ${textColor};
          }
          .figura {position: absolute;}
          .cuadrado {top: -45px; left: -62px;}
          .circulo {top: 567px; left: -96px;}
          .triangulo {top: 356px; left: 400px;}
          .lineas {top: -22px; left: 1022px;}
        `}</style>
      </Head>
      <img className="figura cuadrado" src="img/cuadrado.svg" />
      <img className="figura circulo" src="img/circulo.svg" />
      <img className="figura triangulo" src="img/triangulo.svg" />
      <img className="figura lineas" src="img/lineas.svg" />
      <Header />
      <main>{children}</main>
    </>
  );
}
