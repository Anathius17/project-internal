import React, { useState } from "react";
import axios from "axios";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("https://example.com/api/login", {
        username,
        password,
      });
      console.log(response.data); // Tampilkan data response dari API
      setErrorMessage(""); // Reset pesan error jika login berhasil
    } catch (error) {
      console.error(error);
      setErrorMessage("Username atau password salah"); // Set pesan error jika login gagal
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      {errorMessage && <p>{errorMessage}</p>}{" "}
      {/* Tampilkan pesan error jika login gagal */}
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;
