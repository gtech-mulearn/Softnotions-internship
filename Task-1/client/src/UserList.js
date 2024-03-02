import React, { useState, useEffect } from 'react';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('http://localhost:3001/api/users'); 
        const data = await response.json();
        setUsers(data.users);
        console.log(data)
      } catch (error) {
        console.log(error)
        console.error('Error fetching users:', error);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="container mx-auto max-w-md p-4 bg-gray-100 rounded shadow-md my-10">
      <h2 className="text-2xl font-bold text-center mb-4">User List</h2>
      {isLoading && <p>Loading users...</p>}
      {error && <p className="text-red-500">Error fetching users: {error.message}</p>}
      {users.length > 0 && (
        <ul>
          {users.map((user) => (
            <li key={user._id} className="flex mb-4 items-center">
              <p className="w-1/2 text-right mr-2">{user.fullName}</p>
              <p className="text-gray-700 text-sm">{user.age} years old</p>
            </li>
          ))}
        </ul>
      )}
      {users.length === 0 && !isLoading && <p>No users found.</p>}
    </div>
  );
};

export default UserList;
