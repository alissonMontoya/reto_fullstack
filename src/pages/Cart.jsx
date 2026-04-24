import { useCartStore } from "../store/cartStore"
import { Link } from "react-router-dom"

export default function Cart() {
  const cart = useCartStore((state) => state.cart)
  const removeFromCart = useCartStore((state) => state.removeFromCart)

  const total = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  )

  return (
    <div>
      <h1>Carrito</h1>

      <p>Total productos: {cart.length}</p>
      <p>Total a pagar: ${total}</p>

      {cart.map((item) => (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <p>Precio: ${item.price}</p>
          <p>Cantidad: {item.quantity}</p>

          <button onClick={() => removeFromCart(item.id)}>
            ❌ Eliminar
          </button>
         
          <Link to="/checkout">
        <button>Ir a pagar</button>
        </Link>
        
        </div>
        
      ))}

      <div style={{ padding: "10px" }}></div>
      <div style={{
      border: "1px solid gray",
      margin: "10px 0",
      padding: "10px"
     }}></div>
    </div>
  )
}

<div style={{
  border: "1px solid #ccc",
  margin: "10px 0",
  padding: "10px",
  borderRadius: "8px"
}}></div>