import { handleMouseMove } from '../../utils/utilities';
import './home.scss'
const Home = () => {

    return (
        <>
          <section className="home" onMouseMove={handleMouseMove}>
            <div data-offset="500" className="home__blur"></div>
          </section>
        </>
    )
}

export default Home;
