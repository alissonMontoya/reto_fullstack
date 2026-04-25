import { useState } from "react"
import "./auth.css"

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: ""
  })

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const user = JSON.parse(localStorage.getItem("user"))

    if (!user) {
      alert("No hay usuario registrado")
      return
    }

    if (form.email === user.email && form.password === user.password) {
      alert("Inicio de sesión exitoso ✅")
    } else {
      alert("Datos incorrectos ❌")
    }
  }

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Iniciar sesión</h2>

        <form onSubmit={handleSubmit} className="auth-form">
          <input name="email" placeholder="Correo" onChange={handleChange} />
          <input name="password" placeholder="Contraseña" onChange={handleChange} />

          <button type="submit">Entrar</button>
        </form>
      </div>
    </div>
  )
}

export default Login