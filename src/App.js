import AboutUs from './components/aboutUs/AboutUs';
import Banner from './components/banner/Banner';
import BannerSecond from './components/bannerSecond/BannerSecond';
import Menu from './components/menu/Menu';
import Projects from './components/projects/Projects';
import Services from './components/services/Services';
import Slider from './components/slider/Slider';
import SliderSecond from './components/SliderSecond/SliderSecond';
import Footer from './components/footer/Footer';


function App() {
  return (
    <>
      <Menu />
      <Slider />
      <Services />
      <Banner />
      <AboutUs />
      <Projects />
      <SliderSecond />
      <BannerSecond />
      <Footer />
    </>
  );
}

export default App;
