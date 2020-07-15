import Button from './Button'; //eslint-disable-line
import { useRouter } from 'next/router';

export default function Header() {
  let isContact = false;

  if (useRouter().pathname == '/contact' || useRouter().pathname == '/success')
    isContact = true;

  return (
    <>
      <header>
        <h1 className="title">
          LISANDRO <br /> MARCHIONNI
        </h1>
        <h2 className="subtitle">Web developer</h2>
        <Button text="Contacto" href={isContact ? '/' : '/contact'}>
          {isContact
            ? <><img className="atras" src="img/flecha-atras.svg" /> Atrás</>
            : <>Contacto <img src="img/flecha.svg" /></>}
        </Button>
      </header>
      <style jsx>{`
        header {
          display: flex;
          flex-direction: column;
          position: absolute;
          top: 50%;
          left: 50px;
          transform: translateY(-50%);
        }
        .title {
          order: 2;
          font-size: 3.5rem;
          color: #292a2e;
          line-height: 2.9rem;
          margin: 7px 0 30px 0;
        }
        .subtitle {
          order: 1;
          color: white;
        }
        img {
          margin: 0 0 -2px 10px;
          display: inline-block;
        }
        img.atras {
          margin: 0 10px -2px 0;
        }
      `}</style>
    </>
  );
}
