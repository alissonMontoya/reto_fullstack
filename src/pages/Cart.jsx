import { useCartStore } from "../store/cartStore"

export default function Cart() {
  const cart = useCartStore((state) => state.cart)

  return (
    <div>
      <h1>Carrito</h1>

      {cart.length === 0 ? (
        <p>No hay productos</p>
      ) : (
        cart.map((item, index) => (
          <div key={index}>
            {item.title} - ${item.price}
          </div>
        ))
      )}
    </div>
  )
}