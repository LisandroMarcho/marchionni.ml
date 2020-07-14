import Contact from "./Contact"; //eslint-disable-line

export default function Header() {
  return (
    <>
      <header>
        <h1 className="title">
          LISANDRO <br /> MARCHIONNI
        </h1>
        <h2 className="subtitle">Web developer</h2>
        <Contact text="Contacto" />
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
      `}</style>
    </>
  );
}
