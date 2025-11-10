import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface Toast {
  id: string;
  message: string;
  type?: 'success' | 'danger' | 'warning';
}

const initialState: { toast: Toast | null  } = {toast:null};

const toastSlice = createSlice({
  name: 'toast',
  initialState,
  reducers: {
    showToast: (state, action: PayloadAction<Toast>) => {
      state.toast = action.payload;
    },
    removeToast: (state) => {
      state.toast = null;
    },
  },
});

export const { showToast, removeToast } = toastSlice.actions;
export default toastSlice.reducer;