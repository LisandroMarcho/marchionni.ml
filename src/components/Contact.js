import Link from "next/link"; //eslint-disable-line

export default function Contact({ text }) {
  return (
    <>
      <Link href="/contact">
        <a>
          {text}
          <img src="img/flecha.svg" />
        </a>
      </Link>
      <style jsx>{`
        a {
          background-color: #709bc5;
          color: white;
          text-decoration: none;
          font-size: 1.1rem;
          font-family: Montserrat, sans-serif;
          padding: 5px 30px;
          border-radius: 8px;
          box-sizing: border-box;
          align-self: flex-start;
          order: 3;
        }
        img {
          margin-left: 10px;
          margin-bottom: -2px;
          display: inline-block;
        }
      `}</style>
    </>
  );
}
