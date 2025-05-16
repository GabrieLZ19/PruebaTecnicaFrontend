import UserItem from "./UserItem";

export default function UserList({ users, onDelete, onUpdate }) {
  return (
    <div>
      <h2> Lista de Usuarios </h2>
      {users.map((user) => (
        <UserItem
          key={user.id}
          user={user}
          onDelete={onDelete}
          onUpdate={onUpdate}
        />
      ))}
    </div>
  );
}
