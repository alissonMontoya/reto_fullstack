import { useCartStore } from "../store/cartStore"

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
        </div>
      ))}
    </div>
  )
}