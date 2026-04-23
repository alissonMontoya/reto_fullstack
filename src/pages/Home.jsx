import { products } from "../mockdata/products"
import ProductCard from "../components/molecules/ProductCard"
import { Link } from "react-router-dom"

export default function Home() {
  return (
    <div>
      <h1>Productos</h1>

      {/* BOTÓN PARA IR AL CARRITO */}
      <Link to="/cart">
        <button>Ir al carrito</button>
      </Link>

      {/* LISTADO DE PRODUCTOS */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "10px"
      }}>
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  )
}