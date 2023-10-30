import { cn } from "@/lib/utilis";
import { decrementStep, incrementStep } from "../features/formSlice";
import { useAppDispatch, useAppSelector } from "../hooks";
import NavButton from "./NavButton";

const Nav = () => {
  const currentStep = useAppSelector((state) => state.form.currentStep);
  const dispatch = useAppDispatch();
  return (
    <div className="mt-auto px-3 lg:px-0 w-full lg:w-[550px] h-5 bg-white mx-auto py-12">
      <div
        className={cn("w-full h-full flex items-center justify-between", {
          "justify-end": currentStep < 2,
        })}
      >
        {currentStep > 1 && (
          <NavButton
            className="text-coolGray hover:text-marineBlue/90 font-bold"
            onClick={() => dispatch(decrementStep())}
          >
            Go Back
          </NavButton>
        )}

        <NavButton
          className="bg-purple-950 text-white hover:bg-purplishBlue"
          onClick={() => dispatch(incrementStep())}
        >
          {currentStep < 4 ? "Next Step" : "Confirm"}
        </NavButton>
      </div>
    </div>
  );
};

export default Nav;
