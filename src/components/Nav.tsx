import { decrementStep, incrementStep } from "../features/formSlice";
import { useAppDispatch } from "../hooks";

const Nav = () => {
  const dispatch = useAppDispatch();
  return (
    <div className="mt-auto w-full h-5 bg-white px-4 py-12">
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
