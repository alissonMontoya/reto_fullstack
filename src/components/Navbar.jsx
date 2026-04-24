import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <nav style={{
      background: "white",
      padding: "15px 20px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
    }}>
      <h2 style={{ margin: 0 }}>🛒 Mi Tienda</h2>

      <div style={{ display: "flex", gap: "10px" }}>
        <Link to="/"><button className="btn">Inicio</button></Link>
        <Link to="/cart"><button className="btn"> style={{ width: "100%" }} 
          Carrito</button></Link>
        <Link to="/login"><button className="btn">Login</button></Link>
      </div>
    </nav>
  )
}