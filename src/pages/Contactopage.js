import '../styles/components/pages/Contactopage.css';
const ContactoPage = (props) => {
  return (
    <main className="holder">
      <div>
        <h2>Contacto Rapido</h2>
        <form action="" method="" className="formulario">
          <p>
            <label for="nombre">Nombre</label>
            <input type="text" name="" />
          </p>
          <p>
            <label for="email">Email</label>
            <input type="text" name="" />
          </p>
          <p>
            <label for="telefono">Telefono</label>
            <input type="text" name="" />
          </p>
          <p>
            <label for="mensaje">Mensaje</label>
            <br />
            <textarea name=""></textarea>
          </p>
          <p class="acciones">
            <input type="submit" value="Enviar" />
          </p>
        </form>
      </div>
      <div className="datos">
        <h2>Otras vias de comunicación</h2>
        <p>
          Tambien puedes contactarte con nosotros usando los siguientes medios
        </p>
        <ul>
          <li>Telefono:</li>
          <li>Email:</li>
          <li>Facebook:</li>
          <li>Twitter:</li>
          <li>Instagram:</li>
        </ul>
      </div>
    </main>
  );
};

export default ContactoPage;
