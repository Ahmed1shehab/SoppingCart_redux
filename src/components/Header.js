import{ Link, NavLink } from 'react-router-dom';
import './Header.css';
import Logo from '../assets/logo.png';
import { useSelector } from 'react-redux';

export const Header = () => {
  const products = useSelector(state => state.cartState.cartList);
  return (
    <header className='header'>
  
        <Link to="/" className='logo'>
        <img src={Logo} alt="Logo"/>
        <span>REDUX CART</span>
        </Link>

      <nav className='navigation'>
        <NavLink to="/" className="link">Home</NavLink   >
        <NavLink to="/cart" className="link">Cart</NavLink>
      </nav>

      <div>
      <Link to="/cart" className='items'>
      <span>Cart: {products.length}</span>
        </Link>
      </div>

    </header>
  )
}

