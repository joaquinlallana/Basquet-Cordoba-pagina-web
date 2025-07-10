import react from "react";

const ContactoPage = (props) => {
  return <main className="holder">
    <div>
      <h2>Contacto Rapido</h2>
      <form action="" method="" className="formulario">
        <p>
          <lablel for="nombre">Nombre</lablel>
          <imput type="text" name=""/>
        </p>
        <p>
          <label for="email">Email</label>
          <imput type="text" name=""/>
        </p>
        <p>
          <label for="telefono">Telefono</label>
          <imput type="text" name=""/>
        </p>
        <p>
          <label for="mensaje">Mensaje</label>
          <br/>
          <textarea name=""></textarea>
        </p>
        <p class="acciones">
          <imput type="submit" value="Enviar"/>
        </p>
      </form>
    </div>
    <div className="datos">
      <h2>Otras vias de comunicación</h2>
      <p>Tambien puedes contactarte con nosotros usando los siguientes medios</p>
      <ul>
        <li>Telefono:</li>
        <li>Email:</li>
        <li>Facebook:</li>
        <li>Twitter:</li>
        <li>Instagram:</li>
      </ul>
      </div>
  </main>;
};

export default ContactoPage;
