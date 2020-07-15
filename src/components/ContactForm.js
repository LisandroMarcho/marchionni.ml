import SubmitButton from './SubmitButton'; //eslint-disable-line

export default function ContactForm() {
  return (
    <>
      <form name="contact" method="POST" action="/success" netlify>
        <h2>¿Quieres hablar conmigo?</h2>
        <input type="hidden" name="form-name" value="contact" />
        <label>Nombre</label>
        <input name="name" placeholder="Nombre De Ejemplo"></input>
        <label>E-Mail</label>
        <input name="mail" placeholder="mail@example.com"></input>
        <label>Asunto</label>
        <input name="subject" placeholder="Asunto de ejemplo"></input>
        <label>Mensaje</label>
        <textarea name="message" placeholder="Mensaje de ejemplo..." rows="7"></textarea>
        <SubmitButton bgColor="#70C57B">Send form</SubmitButton>
      </form>
      <style>{`
      form {
        display: flex;
        flex-direction: column;
      }

      form > h2 {
        margin-bottom: 3.13rem;
      }

      form > label {
        margin-bottom: .31rem;
        font-size: .9rem;
      }

      input, textarea {
        margin-bottom: .94rem;
        box-sizing: border-box;
        border: none;
        border-radius: 4px;
        background-color: #e5e5e5;
        padding: 6px 12px;
        font-family: Montserrat, sans-serif;
        font-size: 1rem;
        resize: none;
      }
      * [type="submit"] {
        margin-top: 1.88rem;
      }
    `}</style>
    </>
  );
}
