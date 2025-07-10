import react from "react";

const HomePage = (props) => {
  return (
    <main className="holder">
      <div className="home-img">
        <img src="/images/home/imagen03.jpg" alt="Imagen 03" width="30%" />
      </div>
      <div className="columnas">
        <div className="Bienvenidos">
          <h2>Bienvenidos</h2>
          <p>
            ¡Bienvenidos a tu nuevo espacio dedicado al básquet local en
            Córdoba!
            <br />
            Aquí vas a encontrar toda la información sobre torneos,
            equipos, jugadores, resultados, noticias y mucho más del apasionante
            mundo del básquet cordobés. Nuestro objetivo es dar visibilidad al
            talento local, seguir de cerca cada temporada y acercarte el deporte
            que amamos desde una mirada cercana y auténtica. Ya seas jugador,
            fanático, entrenador o simplemente un apasionado del deporte, este
            sitio es para vos.
            <br/>
            ¡Sumate a la comunidad y viví el básquet como
            nunca antes!
          </p>
        </div>
      </div>
    </main>
  );
};

//Ajustar las imagenes del home
export default HomePage;
