import { useState, useEffect } from "react"
import axios from "axios"
import ProductCard from "../components/molecules/ProductCard"

export default function Home() {
  const [products, setProducts] = useState([])
  const [search, setSearch] = useState("")
  const [currentPage, setCurrentPage] = useState(1)

  const productsPerPage = 6

  // 🔄 TRAER PRODUCTOS (API)
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error(err))
  }, [])

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

      {/* 🔍 BUSCADOR */}
      <input
        type="text"
        placeholder="Buscar producto..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value)
          setCurrentPage(1)
        }}
        style={{
          padding: "8px",
          marginBottom: "15px",
          width: "100%",
          maxWidth: "300px"
        }}
      />

      {/* 🛍️ PRODUCTOS */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "15px"
        }}
      >
        {currentProducts.length === 0 ? (
          <p>Cargando productos...</p>
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
          Página {currentPage} de {totalPages || 1}
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