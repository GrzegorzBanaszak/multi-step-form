import { decrementStep, incrementStep } from "../features/formSlice";
import { useAppDispatch } from "../hooks";

const Nav = () => {
  const dispatch = useAppDispatch();
  return (
    <div className="mt-auto mb-0 w-full h-10 bg-white px-4 py-12 lg:relative">
      <div className="w-full h-full flex items-center justify-between">
        <button onClick={() => dispatch(decrementStep())}>Go Back</button>
        <button
          onClick={() => dispatch(incrementStep())}
          className="bg-purple-950 text-white px-4 py-2 rounded"
        >
          Next Step
        </button>
      </div>
    </div>
  );
};

export default Nav;
