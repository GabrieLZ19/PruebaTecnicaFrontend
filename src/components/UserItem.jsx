import { useState } from "react";

export default function UserItem({ user, onDelete, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(user.name);

  const handleSave = () => {
    onUpdate({ ...user, name });
    setIsEditing(false);
  };

  return (
    <div className="mb-4 p-4 border rounded-md shadow-md">
      {isEditing ? (
        <div>
          <input value={name} onChange={(e) => setName(e.target.value)} />
          <button
            onClick={handleSave}
            className="ml-2 text-green-600 border rounded px-2 py-1 hover:bg-green-100"
          >
            {" "}
            Guardar
          </button>
        </div>
      ) : (
        <div>
          <span> {user.name}</span> -{user.email}
          <button
            onClick={() => setIsEditing(true)}
            className="bg-blue-500 text-white px-4 py-2 rounded mr-2 ml-4"
          >
            Editar
          </button>
          <button
            onClick={() => onDelete(user.id)}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Eliminar
          </button>
        </div>
      )}
    </div>
  );
}
