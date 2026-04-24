import { useState } from "react"
import { products } from "../mockdata/products"
import ProductCard from "../components/molecules/ProductCard"
import { Link } from "react-router-dom"

export default function Home() {
  const [search, setSearch] = useState("")
  const [currentPage, setCurrentPage] = useState(1)

  const productsPerPage = 2

  // 🔍 FILTRO
  const filteredProducts = products.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  )

  // 📄 PAGINACIÓN
  const indexOfLast = currentPage * productsPerPage
  const indexOfFirst = indexOfLast - productsPerPage
  const currentProducts = filteredProducts.slice(indexOfFirst, indexOfLast)

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage)

  return (
    <div>
      <h1>Productos</h1>

      {/* 🔗 NAVEGACIÓN */}
      <div style={{ marginBottom: "10px" }}>
        <Link to="/cart">
          <button>Carrito</button>
        </Link>

        <Link to="/login">
          <button>Login</button>
        </Link>

        <Link to="/register">
          <button>Registro</button>
        </Link>
      </div>


      {/* 🔍 BUSCADOR */}
      <input
        type="text"
        placeholder="Buscar producto..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value)
          setCurrentPage(1)
        }}
        style={{ marginBottom: "10px", padding: "5px" }}
      />

      {/* 🛍️ PRODUCTOS */}
      <div

      style={{
         display: "grid",
         gridTemplateColumns:
         window.innerWidth < 600
         ? "1fr"
         : window.innerWidth < 900
        ? "1fr 1fr"
        : "1fr 1fr 1fr",
        gap: "10px",
}}
      >
        {currentProducts.length === 0 ? (
          <p>No se encontraron productos</p>
        ) : (
          currentProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))
        )}
      </div>

      {/* 📄 PAGINACIÓN */}
      <div style={{ marginTop: "20px" }}>
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          ⬅ Anterior
        </button>

        <span style={{ margin: "0 10px" }}>
          Página {currentPage} de {totalPages}
        </span>

        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Siguiente ➡
        </button>
      </div>
      
      <div className="grid"></div>
    </div>
  )
}