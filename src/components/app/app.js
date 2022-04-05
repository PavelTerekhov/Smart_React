
// import './App.css';
import Promo from '../promo/promo';
import Advantages from '../advantages/advantages';
import Consultation from '../consultation/consultation';
import Carousel from '../carousel/carousel';

const App = () => {
  return (
      <div className="App">
        <Promo/>
        <Advantages/>
        <Consultation/>
        <Carousel/>
      </div> 
  );
}

export default App;
