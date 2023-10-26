import { User, UserDataError, UserSchema } from "@/utilis";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export enum PlanType {
  MONTHLY = "monthly",
  YEARLY = "yearly",
}

type Plan = {
  name: string;
  price: number;
  type: PlanType;
};

export interface FormState {
  currentStep: number;
  userData: User;
  userDataValid: UserDataError;
  plan: Plan;
}

export type UserPayload = {
  type: string;
  data: string;
};

const initialState: FormState = {
  currentStep: 2,
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
  plan: {
    name: "arcane",
    price: 9,
    type: PlanType.MONTHLY,
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
        } else {
          state.currentStep++;
        }
      } else {
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
    selectPlan: (
      state,
      action: PayloadAction<{ name: string; price: number }>
    ) => {
      state.plan.name = action.payload.name;
      state.plan.price = action.payload.price;
    },
    switchPlanType: (state) => {
      if (state.plan.type === PlanType.MONTHLY) {
        state.plan.type = PlanType.YEARLY;
      } else {
        state.plan.type = PlanType.MONTHLY;
      }
    },
  },
});

export const {
  decrementStep,
  incrementStep,
  userDataChange,
  selectPlan,
  switchPlanType,
} = formSlice.actions;

export default formSlice.reducer;
