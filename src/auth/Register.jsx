import { useState } from "react"

export default function Register() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  })

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    localStorage.setItem("user", JSON.stringify(user))

    alert("Usuario registrado")
  }

  return (
    <div>
      <h1>Registro</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Correo"
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          onChange={handleChange}
        />

        <button type="submit">Registrarse</button>
      </form>
    </div>
  )
}