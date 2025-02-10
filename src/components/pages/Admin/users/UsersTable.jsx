import { Edit, Trash2 } from "lucide-react";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";

const UsersTable = () => {
  const users = useContext(AuthContext);
  console.log(users.state.users);
  // When users data is not yet available.
  if (!users) {
    return <p className="mt-4 text-center text-gray-500">Loading users...</p>;
  }

  return (
    <div className="mt-4">
      {users.state.users.length > 0 ? (
        <div className="w-full overflow-hidden rounded-lg shadow-xs">
          <div className="w-full overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Email
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Role
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {users.state.users.map((user) => (
                  <tr key={user.id} className="hover:bg-gray-50">
                    <td className="px-4 py-3 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">
                        {user.username}
                      </div>
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{user.email}</div>
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <span
                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          user.isAdmin
                            ? "bg-green-100 text-green-800"
                            : "bg-blue-100 text-blue-800"
                        }`}
                      >
                        {user.isAdmin ? "Admin" : "User"}
                      </span>
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-center text-sm font-medium">
                      <button
                        aria-label="Edit user"
                        className="text-green-500 hover:text-green-700 mr-2"
                        onClick={() =>
                          console.log("Edit user with id:", user.id)
                        }
                      >
                        <Edit className="w-5 h-5" />
                      </button>
                      <button
                        aria-label="Delete user"
                        className="text-red-500 hover:text-red-700"
                        onClick={() =>
                          console.log("Delete user with id:", user.id)
                        }
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <p className="text-center text-gray-500">No users available.</p>
      )}
    </div>
  );
};

export default UsersTable;
