import { useState } from "react"
import products from "../data/products"
import "./home.css"

const Home = () => {
  const [page, setPage] = useState(1)
  const [search, setSearch] = useState("")

  const productsPerPage = 6

  // 🔍 Filtrar productos
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  )

  // 📄 Paginación
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage)
  const start = (page - 1) * productsPerPage
  const currentProducts = filteredProducts.slice(start, start + productsPerPage)

  // 🛒 Agregar al carrito
  const addToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || []
    cart.push(product)
    localStorage.setItem("cart", JSON.stringify(cart))
    alert("Producto agregado 🛒")
  }

  return (
    <div className="home">
      <h1 className="title">PRODUCTOS</h1>

      <div className="search-container">
  <input
    type="text"
    placeholder="🔍 Buscar productos..."
    className="search-input"
    value={search}
    onChange={(e) => {
      setSearch(e.target.value)
      setPage(1)
    }}
    />
    </div>

      {/* 🛍️ PRODUCTOS */}
      <div className="products-grid">
        {currentProducts.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} />

            <h3>{product.name}</h3>

            <p>${product.price.toLocaleString()}</p>

            <button onClick={() => addToCart(product)}>
              Agregar al carrito
            </button>
          </div>
        ))}
      </div>

      {/* 📄 PAGINACIÓN */}
      <div className="pagination">
        <button disabled={page === 1} onClick={() => setPage(1)}>
          «
        </button>

        <button disabled={page === 1} onClick={() => setPage(page - 1)}>
          ‹
        </button>

        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            className={page === i + 1 ? "active" : ""}
            onClick={() => setPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}

        <button disabled={page === totalPages} onClick={() => setPage(page + 1)}>
          ›
        </button>

        <button disabled={page === totalPages} onClick={() => setPage(totalPages)}>
          »
        </button>
      </div>
    </div>
  )
}

export default Home