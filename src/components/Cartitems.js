import './Cartitems.css'
import { useDispatch } from "react-redux";
import { remove } from "../store/cartSlice.js";
export const Cartitems = ({product}) => {
  const dispatch = useDispatch(); 
    const { name, price, image} = product;
  return (
    <div className='cartitems'>
        <img src={image} alt={name} />
        <p>{name}</p>
        <span>{price}$</span>
        <button onClick={() => dispatch(remove(product))}>Remove</button>
    </div>
  )
}


