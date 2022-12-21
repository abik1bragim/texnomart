import './App.css';
import Brends from './components/brends/Brends';
import Ilova from './components/ilova/Ilova';
import Message from './components/message/Message';
import Mudatlar from './components/mudatlar/Mudatlar';
// import Cards from './components/Cards';
import Navbar from './components/navbar/Navbar';
import NavBottom from './components/navbottom/NavBottom';
import Top from './components/ntop/Top';
import Ommabop from './components/ommabop/Ommabop';
import ProductCard from './components/productcard/ProductCard';
import Savatcha from './components/savatcha/Savatcha';
import Slider from './components/slider/Slider';
import Telegram from './components/telegram/Telegram';
import XitSavdo from './components/xitsavdo/XitSavdo';
import Yangi_M from './components/yangimahsulotlarr/Yangi_M';
// import SliderProduc from './components/products/SliderProduc'

function App() {
  return (
    <div className="">
      <Savatcha />
      <Top />
      <Navbar />
      <NavBottom />
      <Slider />
      <Telegram />
      <Message />
      <Brends />
      <Ommabop />
      <ProductCard />
      <Yangi_M />
      <XitSavdo />
      <Ilova />
      <Mudatlar />

      {/* <SliderProduc /> */}
      {/* <Cards /> */}
    </div>
  );
}

export default App;
