import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { filtersSlice } from "../../features/filters";

export const { setName, setUsername, setEmail, setPhone, resetFilters } = filtersSlice.actions;

export const UserFilters: React.FC = () => {
  const dispatch = useAppDispatch();
  const filters = useAppSelector(state => state.filters);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setName(e.target.value));
  };

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setUsername(e.target.value));
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setEmail(e.target.value));
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setPhone(e.target.value));
  };

  const handleReset = () => {
    dispatch(resetFilters({}));
  };

  return (
    <div className="flex space-x-4 mb-4">
      <input
        name="name"
        placeholder="Filter by Name"
        className="border p-2 rounded"
        value={filters.name}
        onChange={handleNameChange}
      />
      <input
        name="username"
        placeholder="Filter by Username"
        className="border p-2 rounded"
        value={filters.username}
        onChange={handleUsernameChange}
      />
      <input
        name="email"
        placeholder="Filter by Email"
        className="border p-2 rounded"
        value={filters.email}
        onChange={handleEmailChange}
      />
      <input
        name="phone"
        placeholder="Filter by Phone"
        className="border p-2 rounded"
        value={filters.phone}
        onChange={handlePhoneChange}
      />

      <button
        className="bg-red-500 text-white px-4 py-2 rounded"
        onClick={handleReset}
      >
        Reset Filters
      </button>
    </div>
  );
};
