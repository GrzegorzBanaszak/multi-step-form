import { PlanType, switchPlanType } from "@/features/formSlice";
import { useAppDispatch, useAppSelector } from "@/hooks";

const PlanTyp = () => {
  const { type } = useAppSelector((state) => state.form.plan);
  const dispatch = useAppDispatch();
  return (
    <div
      onClick={() => dispatch(switchPlanType())}
      className="flex justify-center gap-x-5 bg-magnolia py-4 mt-4 rounded-md"
    >
      <div className="text-marineBlue font-bold">Monthly</div>
      <div className="bg-marineBlue rounded-full h-6 w-12 flex items-center px-1 hover:cursor-pointer">
        <span
          className={`w-4 h-4 bg-white rounded-full ${
            type === PlanType.MONTHLY ? "ml-0 mr-auto" : "mr-0 ml-auto"
          }`}
        ></span>
      </div>
      <div className="font-bold text-coolGray">Yearly</div>
    </div>
  );
};

export default PlanTyp;
