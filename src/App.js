
import { useSelector } from 'react-redux';
import './App.css';
import { Header } from './components/Header';
import { AllRoutes } from './routes/AllRoutes';
import { useEffect } from 'react';

function App() {
  const cartList = useSelector(state => state.cartState.cartList);
  const total = useSelector(state => state.cartState.total);

  useEffect(() => {
    localStorage.setItem('cartList', JSON.stringify(cartList));
    localStorage.setItem('total', JSON.stringify(total));
  }, [cartList, total]);
  return (
    <div className='App'>
    <Header />
    <AllRoutes />
    </div>
  
  );
}

export default App;
