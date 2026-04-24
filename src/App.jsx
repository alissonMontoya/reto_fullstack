import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Cart from "./pages/Cart"
import Checkout from "./pages/Checkout"
import Login from "./auth/Login"
import Register from "./auth/Register"
import Navbar from "./components/Navbar"

function App() {
  return (
    <BrowserRouter>
      {/* 🧭 NAVBAR */}
      <Navbar />

      {/* 📦 CONTENEDOR GLOBAL */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "20px",
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
