import { createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";

export interface FormState {
  currentStep: number;
}

const initialState: FormState = {
  currentStep: 4,
};

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    incrementStep: (state) => {
      if (state.currentStep < 5) {
        state.currentStep++;
      }
    },
    decrementStep: (state) => {
      if (state.currentStep > 1) {
        state.currentStep--;
      }
    },
  },
});

export const { decrementStep, incrementStep } = formSlice.actions;

export default formSlice.reducer;
