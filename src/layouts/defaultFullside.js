import Head from 'next/head'; //eslint-disable-line
import HeadMeta from '../components/HeadMeta'; //eslint-disable-line
import Header from '../components/Header'; //eslint-disable-line

export default function Layout({
  children,
  pageTitle,
  bgColor = '#292A2E',
  textColor = 'white',
}) {
  return (
    <>
      <HeadMeta pageTitle={pageTitle}>
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
            height: 100vh;
            width: 60vw;
            background-color: ${bgColor};
            right: 0;
            box-shadow: -20px 20px 0px 0px rgba(15,15,15,.16);
            color: ${textColor};
          }
          .figura {position: absolute;}
          .cuadrado {top: -45px; left: -62px;}
          .circulo {bottom: -125px; left: -96px;}
          .triangulo {top: 356px; left: 400px;}
          .lineas {top: -22px; left: 1022px;}
        `}</style>
      </HeadMeta>
      <img className="figura cuadrado" src="img/cuadrado.svg" />
      <img className="figura circulo" src="img/circulo.svg" />
      <img className="figura triangulo" src="img/triangulo.svg" />
      <img className="figura lineas" src="img/lineas.svg" />
      <Header />
      <main>{children}</main>
    </>
  );
}
