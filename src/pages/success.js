import Layout from '../layouts/defaultFullside'; //eslint-disable-line
import ContactForm from '../components/ContactForm'; //eslint-disable-line

export default function () {
  return (
    <>
    <Layout pageTitle="Contacto" bgColor="#ECECEC" textColor="#292A2E">
      <img className="figura circulitos" src="img/circulitos.svg" />
      <img className="figura lineas-grid" src="img/lineas-grid.svg" />
      <div>
        <img src="img/success.svg"/>
        <h3>¡Listo!</h3>
      </div>
    </Layout>
    <style jsx>{`
      div {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        text-align: center;
      }
      h3 {
        margin: 50px;
      }
      .circulitos {top: 75px; left: 75px;}
      .lineas-grid {bottom: 50px; right: 50px;}
    `}</style>
    </>
  );
}
