import products from "../data/products"
import "./home.css"

const Home = () => {
  return (
    <div className="home">
      <h1 className="title">Nuestros Productos</h1>

      <div className="products-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />

            <h3 className="product-name">{product.name}</h3>

            <p className="product-price">
              ${product.price.toLocaleString()}
            </p>

            <button className="product-button">
              Agregar al carrito
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home