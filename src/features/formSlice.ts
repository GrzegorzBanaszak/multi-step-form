import { FormState } from "@/interfaces/FormState";
import { UserSchema } from "@/lib/utilis";
import { Addon } from "@/types/Addon";
import { PlanType } from "@/types/PlanType";
import { UserPayload } from "@/types/UserPayload";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: FormState = {
  currentStep: 3,
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
  addons: [],
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
    changeCurrentStep: (state, action: PayloadAction<number>) => {
      state.currentStep = action.payload;
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
        state.plan.price = state.plan.price * 10;
        state.addons.forEach((ad) => {
          ad.price = ad.price * 10;
        });
      } else {
        state.plan.type = PlanType.MONTHLY;
        state.plan.price = state.plan.price / 10;
        state.addons.forEach((ad) => {
          ad.price = ad.price / 10;
        });
      }
    },
    toggleAddon: (state, action: PayloadAction<Addon>) => {
      const ad = state.addons.find((a) => a.title === action.payload.title);

      if (!ad) {
        state.addons.push(action.payload);
      } else {
        state.addons = state.addons.filter(
          (a) => a.title !== action.payload.title
        );
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
  toggleAddon,
  changeCurrentStep,
} = formSlice.actions;

export default formSlice.reducer;
