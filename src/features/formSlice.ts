import { User, UserDataError, UserSchema } from "@/utilis";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface FormState {
  currentStep: number;
  userData: User;
  userDataValid: UserDataError;
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
  userDataValid: {
    usernameError: false,
    emailError: false,
    phoneNumberError: false,
  },
};

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    incrementStep: (state) => {
      if (state.currentStep === 1) {
        //Reset state
        state.userDataValid = {
          usernameError: false,
          emailError: false,
          phoneNumberError: false,
        };
        const parse = UserSchema.safeParse(state.userData);
        if (!parse.success) {
          parse.error.issues.forEach((element) => {
            switch (element.path[0]) {
              case "username":
                state.userDataValid.usernameError = true;
                break;
              case "email":
                state.userDataValid.emailError = true;
                break;
              case "phoneNumber":
                state.userDataValid.phoneNumberError = true;
                break;
              default:
                break;
            }
          });
        }
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
