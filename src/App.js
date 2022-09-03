import "@fontsource/poppins";
import "./App.css"
import { Navbar } from "./comopnent/navbar";
import MainPage from "./comopnent/MainPage";
import Footer from "./comopnent/Footer";
import Shop from "./comopnent/Shop";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Page from "./comopnent/Page404";
import GraphicCard from "./comopnent/GraphicCard";
import TopProduct from "./comopnent/TopProduct";
import Wishlist from "./comopnent/Wishlist";
import { useState } from "react";



function App() {
  const [value,setvalue] = useState([]);
  const [wish,setwishlist] = useState([]);

  return (
    <div className="App">
      <BrowserRouter >
        <Navbar />
        <Routes>
          <Route index path="/" element={<MainPage setvalue={setvalue} value={value} wish={wish} setwishlist={setwishlist}/>} />
          <Route index path="/MainPage" element={<MainPage setvalue={setvalue} value={value} wish={wish} setwishlist={setwishlist}  />} />
          <Route path="/Shop" element={<Shop setvalue={setvalue} value={value} wish={wish} setwishlist={setwishlist} name="NEW YEAR OFFER"/>} /> 
          <Route path="/myCart" element={<Page value={value}/>} /> 
          <Route path="/myWishList" element={<Wishlist wish={wish} />} /> 
          <Route path="/productDetails" element={<GraphicCard/>} /> 
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
