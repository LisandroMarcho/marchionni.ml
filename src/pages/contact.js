import Layout from '../layouts/default'; //eslint-disable-line
import ContactForm from '../components/ContactForm'; //eslint-disable-line

export default function () {
  return (
    <>
    <Layout pageTitle="Contacto" bgColor="#ECECEC" textColor="#292A2E">
      <img className="figura circulitos" src="img/circulitos.svg" />
      <img className="figura lineas-grid" src="img/lineas-grid.svg" />
      <ContactForm />
    </Layout>
    <style>{`
      form {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
      }
      .circulitos {top: 75px; left: 75px;}
      .lineas-grid {top: 535px; left: 735px;}
    `}</style>
    </>
  );
}
