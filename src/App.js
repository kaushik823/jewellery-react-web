import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Footer from './components/footer';
import Header from './components/header';
import Slider from './components/slider';
import Gallery from './components/gallery';
import Product from './components/product';
import Feature from './components/feature';
import Categories from './components/categories';
import Blog from './components/blog';


function App() {
  return (
    <div className="App">
      <Header/>
      <Footer/>
      <Slider/>
      <Gallery/>
      <Product/>
      <Feature/>
      <Categories/>
      <Blog/>
    </div>
  );
}

export default App;
