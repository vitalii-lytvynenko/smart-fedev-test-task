import { User } from "../../types";

type Props = {
  users: User[];
};

export const UserTable: React.FC<Props> = ({ users }) => {
  return (
    <table className="table-auto w-full text-left">
      <thead>
        <tr className="bg-gray-100">
          <th className="px-4 py-2">Name</th>
          <th className="px-4 py-2">Username</th>
          <th className="px-4 py-2">Email</th>
          <th className="px-4 py-2">Phone</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <tr key={user.id} className="border-t">
            <td className="px-4 py-2">{user.name}</td>
            <td className="px-4 py-2">{user.username}</td>
            <td className="px-4 py-2">{user.email}</td>
            <td className="px-4 py-2">{user.phone}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
