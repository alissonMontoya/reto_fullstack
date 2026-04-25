import { useEffect, useState } from "react"
import "./cart.css"

const Cart = () => {
  const [cart, setCart] = useState([])

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || []
    setCart(storedCart)
  }, [])

  const removeFromCart = (index) => {
    const newCart = [...cart]
    newCart.splice(index, 1)

    setCart(newCart)
    localStorage.setItem("cart", JSON.stringify(newCart))
  }

  const clearCart = () => {
    setCart([])
    localStorage.removeItem("cart")
  }

  const total = cart.reduce((acc, item) => acc + item.price, 0)

  const handleCheckout = () => {
  alert("✅ Compra realizada con éxito")

  setCart([])
  localStorage.removeItem("cart")
}

  return (
    <div className="cart-container">
      <h1>🛒 Carrito de Compras</h1>

      {cart.length === 0 ? (
        <p className="empty">El carrito está vacío</p>
      ) : (
        <>
          <div className="cart-grid">
            {cart.map((item, index) => (
              <div className="cart-card" key={index}>
                <img src={item.image} alt={item.name} />

                <div className="cart-info">
                  <h3>{item.name}</h3>
                  <p>${item.price.toLocaleString()}</p>

                  <button onClick={() => removeFromCart(index)}>
                    Eliminar
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-footer">
            <h2>Total: ${total.toLocaleString()}</h2>
            
            <button className="checkout-btn" onClick={handleCheckout}>
                Finalizar compra
             </button>

            <button className="clear-btn" onClick={clearCart}>
              Vaciar carrito
            </button>
          </div>
        </>
      )}
    </div>
  )
}

export default Cart