import Header from '../Header/Header.jsx';
import NavBar from '../NavBar/NavBar.jsx';
import NavBarMobile from '../NavBarMobile/NavBarMobile.jsx';
import { useIsMobile } from '../../utils/utilities';
import './App.scss'

const App = () => {
  return (
    <>
    <Header>
      { useIsMobile(600) ? <NavBarMobile/> : <NavBar/>}
    </Header>
    <main>
        <section>

        </section>
    </main>
    </>
  );
}


export default App
