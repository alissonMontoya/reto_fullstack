import { useState } from "react"

export default function Login() {
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

    const savedUser = JSON.parse(localStorage.getItem("user"))

    if (
      savedUser &&
      savedUser.email === user.email &&
      savedUser.password === user.password
    ) {
      alert("Login exitoso")
    } else {
      alert("Datos incorrectos")
    }
  }

  return (
    <div>
      <h1>Login</h1>

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

        <button type="submit">Iniciar sesión</button>
      </form>
    </div>
  )
}