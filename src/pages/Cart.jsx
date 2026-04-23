import { useCartStore } from "../store/cartStore"

export default function Cart() {
  const cart = useCartStore((state) => state.cart)
  const removeFromCart = useCartStore((state) => state.removeFromCart)

  const total = cart.reduce((acc, item) => acc + item.price, 0)

  return (
    <div>
      <h1>Carrito</h1>

      <p>Total productos: {cart.length}</p>
      <p>Total a pagar: ${total}</p>

      {cart.map((item, index) => (
        <div key={index}>
          {item.title} - ${item.price}

          <button onClick={() => removeFromCart(item.id)}>
            ❌ Eliminar
          </button>
        </div>
      ))}
    </div>
  )
}