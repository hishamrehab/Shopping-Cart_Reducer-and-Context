import { useTitle } from "../hooks/useTitle";
import { CartCard } from "../components";
// import { useCart } from "../context/CartContext";
import { CartContext } from "../context/CartContext"
import { useContext } from "react";

export const Cart = () => {
  const { total, cartList } = useContext(CartContext);

  useTitle("Cart");



  return (
    <main>
      <section className="cart">
        <h1>Cart Items: {cartList.length} / ${total}</h1>
        {cartList.map((product) => (
          <CartCard key={product.id} product={product} />
        ))}
      </section>
    </main>
  )
}
