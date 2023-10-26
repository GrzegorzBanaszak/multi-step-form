import { decrementStep, incrementStep } from "../features/formSlice";
import { useAppDispatch, useAppSelector } from "../hooks";

const Nav = () => {
  const currentStep = useAppSelector((state) => state.form.currentStep);
  const dispatch = useAppDispatch();
  return (
    <div className="mt-auto px-3 lg:px-0 w-full lg:w-[550px] h-5 bg-white mx-auto py-12">
      <div className="w-full h-full flex items-center justify-between font-semibold text-coolGray hover:text-marineBlue/90 duration-300 transition-all">
        {currentStep > 1 && (
          <button onClick={() => dispatch(decrementStep())}>Go Back</button>
        )}

        <button
          onClick={() => dispatch(incrementStep())}
          className={`bg-purple-950 text-white px-4 py-2 rounded hover:bg-marineBlue/90 duration-300 transition-all ${
            currentStep < 2 && "mr-0 ml-auto"
          }`}
        >
          Next Step
        </button>
      </div>
    </div>
  );
};

export default Nav;
