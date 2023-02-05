import "./style.css";
import "./butterfly.css";

const Paragraph = () => {
  return (
    <section className="ContainerParagraph">
      <p className="ContainerParagraph__text">
        La vida siempre será complicada, siempre tiene momentos altos y bajos.
        Todo este proceso no ha sido facil para mi, pero te aseguro que aunque
        no me lo esperaba, fuiste el regalo más bonito de todos. Saber que tenia
        al menos tu apoyo me ayudo a no morir en el intento. Jamas tendre las
        palabras completas para agradecerte por estar a mi lado. Por siempre
        estarás en mi corazón y mientras pueda estaré para cuando me necesites .
        A lo que sea le doy gracias por haberte puesto en mi camino y ojalá te
        mantenga siempre ahi...muy cerquita de mi !!!
      </p>
      <section className="ContainerParagraph__butterfly">
        <div class="cartoon hb">
          <div class="wing-bottom ha hb"></div>
          <div class="wing-top ha hb">
            <div class="dots r"></div>
          </div>
          <div class="wing-bottom ha hb"></div>
          <div class="wing-top ha hb">
            <div class="dots r"></div>
          </div>
          <div class="body r ha hb"></div>
          <div class="antenna r ha hb"></div>
        </div>
      </section>
      <section className="ContainerParagraph__text">
      <h1 className="ContainerParagraph__text--thank"><span>Gracias </span>💜 <span>Cristian</span></h1>

      </section>
    </section>
  );
};
export default Paragraph;
