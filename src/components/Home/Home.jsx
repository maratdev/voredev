import { handleMouseMove, useIsMobile } from "../../utils/utilities";

import "./home.scss";
import hi from "../../img/Hi.gif";

const Home = () => {
  return (
    <section className="home" onMouseMove={handleMouseMove}>
      <div className="home__wrap">
        <h1 className="home__title">
          Hi <img className="home__title_img" src={hi} alt="" /> <br />
          My name is <span className="home__title_accent">Marat</span> <br />
          I am Fullstack <br />
          developer.
        </h1>
        <div className="home__img"></div>
      </div>
      <div
        data-offset={!useIsMobile(768) ? "500" : "300"}
        className="home__blur"
      ></div>
    </section>
  );
};

export default Home;
