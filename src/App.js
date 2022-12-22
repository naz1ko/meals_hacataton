import './App.css';
import HederComponents from './Components/Header/Heder-components';
import Home from './Components/Home/Home';
import { Routes, Route } from 'react-router-dom';
import CartItem from './Components/Cart/CartItem';


const App = () => {
  return (
    <>
      <HederComponents />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/cart' exact element={<CartItem />} />
      </Routes>
    </>
  );
}

export default App;
