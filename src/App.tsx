import { useEffect, useState } from 'react';
import { getUsers } from './api';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { usersSlice } from './features/users';
import { Loader } from './components/Loader';
import { UserTable } from './components/UserTable';
import { UserFilters } from './components/UserFilters';

export const { setUsers } = usersSlice.actions;

function App() {
  const users = useAppSelector(state => state.users);
  const filters = useAppSelector(state => state.filters);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setIsLoading(true);

    getUsers()
      .then(fetchedUsers => {
        dispatch(setUsers(fetchedUsers));
      })
      .finally(() => setIsLoading(false));
  }, [dispatch]);

  const filteredUsers = users.filter(user => {
    return (
      user.name.toLowerCase().includes(filters.name.toLowerCase()) &&
      user.username.toLowerCase().includes(filters.username.toLowerCase()) &&
      user.email.toLowerCase().includes(filters.email.toLowerCase()) &&
      user.phone.includes(filters.phone)
    );
  });

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4">User List</h1>
      <UserFilters />
      {isLoading ? <Loader /> : <UserTable users={filteredUsers} />}
    </div>
  );
}

export default App;




