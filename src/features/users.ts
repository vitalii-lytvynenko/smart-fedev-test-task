import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";
import { User } from "../types";

const initialState: User[] = [];

export const usersSlice: Slice<User[]> = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers(users, action: PayloadAction<User[]>) {
      users.push(...action.payload);
    },
  },
});
