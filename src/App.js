import './App.css';
import HederComponents from './Components/Header/Heder-components';
import Home from './Components/Home/Home';
import { Routes, Route } from 'react-router-dom';
import Cart from './Components/Cart/Cart';


const App = () => {
  return (
    <>
      <HederComponents />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
