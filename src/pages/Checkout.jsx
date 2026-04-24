import { useCartStore } from "../store/cartStore"
import { db } from "../firebase"
import { collection, addDoc } from "firebase/firestore"

export default function Checkout() {
  const cart = useCartStore((state) => state.cart)

  const total = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  )

  const handleBuy = async () => {
    try {
      await addDoc(collection(db, "orders"), {
        cart,
        total,
        date: new Date()
      })

      alert("Compra guardada en Firestore ✅")
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div>
      <h1>Checkout</h1>

      <p>Total: ${total}</p>

      <button onClick={handleBuy}>
        style={{ width: "100%" }}
        Finalizar compra
      </button>
    </div>
  )
}