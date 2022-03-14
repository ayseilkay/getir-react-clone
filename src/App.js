import Campaigns from "components/Campaigns";
import Cards from "components/Cards";
import Categories from "components/Categories";
import Favorites from "components/Favorites";
import Footer from "components/Footer";
import Header from "components/Header";
import HeroSection from "components/HeroSection";
import MobileApp from "components/MobileApp";
import {useWindowWidth} from '@react-hook/window-size'
function App() {
  const windowWidth = useWindowWidth()
  return (
    <>
     <Header/>
     {windowWidth <= 768 && <Campaigns/>}
     <HeroSection/>
     <Categories/>
     {windowWidth > 768 && <Campaigns/>}
     <Favorites/>
     <MobileApp/>
     <Cards/>
     <Footer/>
    </>
  );
}

export default App;
