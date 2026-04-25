import { useCartStore } from "../store/cartStore"

const Checkout = () => {
  const { cart, clearCart } = useCartStore()

  const total = cart.reduce((acc, item) => acc + item.price, 0)

  const handleCheckout = () => {
    alert("Compra realizada con éxito 🎉")
    clearCart()
  }

  return (
    <div>
      <h2>Resumen de compra</h2>

      {cart.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id}>
              <p>{item.name} - ${item.price}</p>
            </div>
          ))}

          <h3>Total: ${total}</h3>

          <button onClick={handleCheckout}>
            Finalizar compra
          </button>
        </>
      )}
    </div>
  )
}

export default Checkout