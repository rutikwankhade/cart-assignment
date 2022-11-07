import './App.css';
import { Route, Routes } from "react-router-dom";

import Home from './pages/home'
import Cart from './pages/cart'
import Header from './components/Header';

function App() {
  return (
    <div>
<Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/cart" element={<Cart />} />

      </Routes>

    </div>
  );
}

export default App;
