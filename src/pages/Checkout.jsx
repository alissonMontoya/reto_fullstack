import { useCartStore } from "../store/cartStore"

export default function Checkout() {
  const cart = useCartStore((state) => state.cart)

  const total = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  )

  return (
    <div>
      <h1>Resumen de compra</h1>

      {cart.length === 0 ? (
        <p>No hay productos en el carrito</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id}>
              <h3>{item.title}</h3>
              <p>Precio: ${item.price}</p>
              <p>Cantidad: {item.quantity}</p>
              <p>Subtotal: ${item.price * item.quantity}</p>
            </div>
          ))}

          <h2>Total: ${total}</h2>

          <button onClick={() => alert("Compra realizada ✅")}>
            Finalizar compra
          </button>
        </>
      )}
    </div>
  )
}