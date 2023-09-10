import Footer from '../Footer';
import AboutUs from './AboutUs';
import ChooseUs from './ChooseUs';
import HomePage from './HomePage';
import Testimonials from '../Testimonials/Testimonials';

function Home() {


  return (
    <>
    <HomePage></HomePage>
    <AboutUs></AboutUs>
    <ChooseUs/>
    <div className="App">
      <Testimonials />
    </div>
    <Footer></Footer>
    </>

  );
}

export default Home;
