import ButtonStyle from './ButtonStyle';

export default function SubmitButton({ children, bgColor='#709bc5'}) {
  return (
    <>
      <button type="submit">
        {children}
      </button>
      <style jsx>{`
        button {
          background-color: ${bgColor};
          ${ButtonStyle}
        }
      `}</style>
    </>
  );
}
