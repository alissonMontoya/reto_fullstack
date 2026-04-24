import { useState } from "react"

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

    if (!form.email || !form.password) {
      alert("Completa todos los campos")
      return
    }

    console.log("Login:", form)
    alert("Inicio de sesión exitoso")
  }

  return (
    <div>
      <h2>Iniciar sesión</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Correo"
          value={form.email}
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          value={form.password}
          onChange={handleChange}
        />

        <button type="submit">Entrar</button>
      </form>
    </div>
  )
}

export default Login