import { useCartStore } from "../../store/cartStore"

export default function ProductCard({ product }) {
  const addToCart = useCartStore((state) => state.addToCart)

  return (
    <div style={{ border: "1px solid gray", padding: "10px" }}>
      <img src={product.image} width="100" />
      <h3>{product.title}</h3>
      <p>${product.price}</p>

      <button onClick={() => addToCart(product)}>
        Agregar al carrito
      </button>
    </div>
  )
}

<div style={{
  border: "1px solid #ddd",
  borderRadius: "10px",
  padding: "10px",
  textAlign: "center"
}}>
  <img src={product.image} width="120" />
  <h3>{product.title}</h3>
  <p>${product.price}</p>

  <button>Agregar</button>
</div>