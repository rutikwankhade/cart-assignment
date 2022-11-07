import './App.css';
import { Route, Routes } from "react-router-dom";

import Home from './pages/home'
import Cart from './pages/cart'


function App() {
  return (
    <div>

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/cart" element={<Cart />} />

      </Routes>

    </div>
  );
}

export default App;
