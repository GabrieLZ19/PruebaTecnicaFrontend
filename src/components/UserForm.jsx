import { useState } from "react";

export default function UserForm({ onAddUser }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email) {
      alert("Por favor complete todos los campos");
      return;
    }

    onAddUser({ name, email });
    setName("");
    setEmail("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 p-4 border rounded-md shadow-md"
    >
      <input
        type="text"
        placeholder="Nombre "
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />
      <input
        type="email"
        placeholder="Email "
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className=" border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />

      <button className="bg-black text-white px-4 py-2 rounded">Agregar</button>
    </form>
  );
}
