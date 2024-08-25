import './Products.css'
import { add, remove } from "../store/cartSlice.js";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
export const Products = ({product}) => {
  const dispatch = useDispatch();
    const { id, name, price, image} = product ;
    const products = useSelector(state=> state.cartState.cartList);
    const [added, setAdded] = useState(false);
    
  useEffect(() => {
    const check = products.find(item => item.id === id);
    if(check) setAdded(true);
    else setAdded(false);
  },[products,id])

  return (
    <div className="products">
        <img src={image} alt={name} />
        <p>{name}</p>
        <div className="quantity">
            <span className='price'>{price}$</span>
            {added ?   
            <button  className="remove" onClick={() => dispatch(remove(product))}>Remove</button>:
            <button className="add" onClick={() => dispatch(add(product))}>Add To Cart</button> }
       
        </div>      
    </div>
  )
}

