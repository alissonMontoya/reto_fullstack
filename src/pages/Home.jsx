import { useState } from "react"
import products from "../data/products"
import "./home.css"

const Home = () => {
  const [page, setPage] = useState(1)
  const productsPerPage = 6

  const totalPages = Math.ceil(products.length / productsPerPage)
  const start = (page - 1) * productsPerPage
  const currentProducts = products.slice(start, start + productsPerPage)

  const addToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || []
    cart.push(product)
    localStorage.setItem("cart", JSON.stringify(cart))
    alert("Producto agregado 🛒")
  }

  return (
    <div className="home">
      <h1 className="title">Productos</h1>

      <div className="products-grid">
        {currentProducts.map((p) => (
          <div className="product-card" key={p.id}>
            <img src={p.image} alt={p.name} />
            <h3>{p.name}</h3>
            <p>${p.price.toLocaleString()}</p>
            <button onClick={() => addToCart(p)}>Agregar al carrito</button>
          </div>
        ))}
      </div>

      {/* PAGINACIÓN COMPLETA */}
      <div className="pagination">
        <button disabled={page === 1} onClick={() => setPage(1)}>«</button>
        <button disabled={page === 1} onClick={() => setPage(page - 1)}>‹</button>

        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            className={page === i + 1 ? "active" : ""}
            onClick={() => setPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}

        <button disabled={page === totalPages} onClick={() => setPage(page + 1)}>›</button>
        <button disabled={page === totalPages} onClick={() => setPage(totalPages)}>»</button>
      </div>
    </div>
  )
}

export default Home