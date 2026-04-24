import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "15px",
        background: "#f5f5f5",
        marginBottom: "20px",
      }}
    >
      <h2>Tienda</h2>

      <div style={{ display: "flex", gap: "10px" }}>
        <Link to="/"><button>Inicio</button></Link>
        <Link to="/cart"><button>Carrito</button></Link>
        <Link to="/login"><button>Login</button></Link>
        <Link to="/register"><button>Registro</button></Link>
      </div>
    </nav>
  )
}