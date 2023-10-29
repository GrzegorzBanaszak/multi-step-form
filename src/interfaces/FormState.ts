import { User, UserDataError } from "@/lib/utilis";
import { Addon } from "@/types/Addon";
import { Plan } from "@/types/Plan";

export interface FormState {
  currentStep: number;
  userData: User;
  userDataValid: UserDataError;
  plan: Plan;
  addons: Array<Addon>;
}
