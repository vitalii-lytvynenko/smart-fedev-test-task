import { createSlice, PayloadAction, Slice } from '@reduxjs/toolkit';
import { FiltersState } from '../types';

const initialState: FiltersState = {
  name: '',
  username: '',
  email: '',
  phone: '',
};

export const filtersSlice: Slice<FiltersState> = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setName(state, action: PayloadAction<string>) {
      return {
        ...state,
        name: action.payload,
      };
    },
    setUsername(state, action: PayloadAction<string>) {
      return {
        ...state,
        username: action.payload,
      };
    },
    setEmail(state, action: PayloadAction<string>) {
      return {
        ...state,
        email: action.payload,
      };
    },
    setPhone(state, action: PayloadAction<string>) {
      return {
        ...state,
        phone: action.payload,
      };
    },
    resetFilters() {
      return initialState;
    },
  },
});
