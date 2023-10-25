import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { z } from "zod";

const phoneReg = new RegExp(
  "^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$"
);

const UserSchema = z.object({
  username: z.string(),
  email: z.string().email(),
  phoneNumber: z.string().regex(phoneReg, "Invalid phone number"),
});

type User = z.infer<typeof UserSchema>;

export interface FormState {
  currentStep: number;
  userData: User;
}

export type UserPayload = {
  type: string;
  data: string;
};

const initialState: FormState = {
  currentStep: 1,
  userData: {
    username: "",
    email: "",
    phoneNumber: "",
  },
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
    userDataChange: (state, action: PayloadAction<UserPayload>) => {
      if (action.payload.type === "username") {
        state.userData.username = action.payload.data;
      }

      if (action.payload.type === "email") {
        state.userData.email = action.payload.data;
      }

      if (action.payload.type === "phoneNumber") {
        state.userData.phoneNumber = action.payload.data;
      }
    },
  },
});

export const { decrementStep, incrementStep, userDataChange } =
  formSlice.actions;

export default formSlice.reducer;
