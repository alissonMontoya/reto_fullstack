import { useState, useEffect } from "react"
import axios from "axios"
import ProductCard from "../components/molecules/ProductCard"
import { Link } from "react-router-dom"

export default function Home() {
  const [products, setProducts] = useState([])
  const [search, setSearch] = useState("")
  const [currentPage, setCurrentPage] = useState(1)

  const productsPerPage = 6

  // 🔄 CONSUMO DE API
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
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

      {/* NAVEGACIÓN */}
      <Link to="/cart">
        <button>Carrito</button>
      </Link>

      {/* BUSCADOR */}
      <input
        type="text"
        placeholder="Buscar producto..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value)
          setCurrentPage(1)
        }}
      />

      {/* PRODUCTOS */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "10px",
        }}
      >
        {currentProducts.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

      {/* PAGINACIÓN */}
      <div>
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          ⬅ Anterior
        </button>

        <span>
          Página {currentPage} de {totalPages}
        </span>

        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Siguiente ➡
        </button>
      </div>

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
    </div>
  )
}