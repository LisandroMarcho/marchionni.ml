import Link from 'next/link'; //eslint-disable-line
import ButtonStyle from './ButtonStyle';

export default function Button({ children, bgColor='#709bc5', href = '/' }) {
  return (
    <>
      <Link href={href}>
        <a>{children}</a>
      </Link>
      <style jsx>{`
      a {
        background-color: ${bgColor};
        ${ButtonStyle}
      }
      `}</style>
    </>
  );
}
