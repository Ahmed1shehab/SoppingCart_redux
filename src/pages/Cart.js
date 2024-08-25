import { useTitle } from "../assets/hooks/useTitle"
import { Cartitems } from "../components/Cartitems";
import { useSelector } from "react-redux";

export const Cart = () => {
  useTitle("Cart");
    
  const products = useSelector(state => state.cartState.cartList);
  const total = useSelector(state => state.cartState.total);
  return (
  <main>
    <section className="cart">
    <h1>Cart Items: {products.length} /$ {total}</h1>

      {products.map((product) => <Cartitems key={product.id} product={product} />)}
    </section>
  </main>
  
  )
}

 
