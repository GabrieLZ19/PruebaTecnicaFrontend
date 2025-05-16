"use client";

import { useEffect, useState } from "react";
import UserForm from "@/components/UserForm";
import UserList from "@/components/UserList";

export default function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        if (!response.ok) {
          throw new Error("Error fetching users");
        }
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Failed to fetch users:", error);
      }
    };

    fetchUsers();
  }, []);

  const handleAddUser = (newUser) => {
    setUsers([{ ...newUser, id: users.length + 1 }, ...users]);
  };

  const handleDeleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const handleUpdateUser = (updatedUser) => {
    setUsers(
      users.map((user) => (user.id === updatedUser.id ? updatedUser : user))
    );
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Gestion de Usuarios</h1>

      <UserForm onAddUser={handleAddUser} />
      <UserList
        users={users}
        onDelete={handleDeleteUser}
        onUpdate={handleUpdateUser}
      />
    </main>
  );
}
