import './App.css';
import { Route, Routes } from "react-router-dom";

import Home from './pages/home'
import Cart from './pages/cart'
import Header from './components/Header';
import { CartContextProvider } from './utils/CartContext';

function App() {
  return (
    <div>
      <CartContextProvider>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/cart" element={<Cart />} />

        </Routes>
      </CartContextProvider>
    </div>
  );
}

export default App;
