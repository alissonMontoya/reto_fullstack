export default function ProductCard({ product }) {
  if (!product) return null

  return (
    <div style={{
      background: "white",
      borderRadius: "10px",
      padding: "15px",
      textAlign: "center",
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      transition: "transform 0.2s"
    }}>
      <img
        src={product.image}
        style={{ width: "100px", height: "120px", objectFit: "contain" }}
      />

      <h3 style={{ fontSize: "16px" }}>{product.title}</h3>

      <p style={{ fontWeight: "bold" }}>${product.price}</p>

      <button className="btn">
        style={{ width: "100%" }}
        Agregar al carrito
      </button>
    </div>
  )
}