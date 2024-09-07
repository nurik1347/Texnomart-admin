import './App.css';
import Header from './components/header';
import Brands from './navigation/Brands';
import Cattegory from './navigation/Cattegory';
import Combo from './navigation/Combo';
import Statistik from './navigation/Statistik';
import Product from './components/productYaratish';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import Newcreate from './navigation/Newcreate';

function App() {
  return (
    <>
      <div className='App-div'>
        <Header />

        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<Product />} />
            <Route path="/cattegory" element={<Cattegory />} />
            <Route path="/combo" element={<Combo />} />
            <Route path="/brands" element={<Brands />} />
            <Route path="/statistics" element={<Statistik />} />
            <Route path="/new" element={<Newcreate />} />
          </Routes>
        </div>
      </div>

    </>
  );
}

export default App;
