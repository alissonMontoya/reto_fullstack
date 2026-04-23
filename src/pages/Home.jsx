import { useState } from "react"
import { products } from "../mockdata/products"
import ProductCard from "../components/molecules/ProductCard"
import { Link } from "react-router-dom"

export default function Home() {
  const [search, setSearch] = useState("")

  // FILTRO
  const filteredProducts = products.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div>
      <h1>Productos</h1>

      {/* BOTÓN CARRITO */}
      <Link to="/cart">
        <button>Ir al carrito</button>
      </Link>

      {/* 🔍 BUSCADOR */}
      <input
        type="text"
        placeholder="Buscar producto..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ margin: "10px", padding: "5px" }}
      />

      {/* PRODUCTOS FILTRADOS */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "10px",
        }}
      >
        {filteredProducts.length === 0 ? (
          <p>No se encontraron productos</p>
        ) : (
          filteredProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))
        )}
      </div>
    </div>
  )
}