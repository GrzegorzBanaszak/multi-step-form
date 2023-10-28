import { switchPlanType } from "@/features/formSlice";
import { useAppDispatch } from "@/hooks";
import PlanTypeSelect from "./PlanTypeSelect";

const PlanTyp = () => {
  const dispatch = useAppDispatch();
  return (
    <div className="flex justify-center gap-x-5 bg-magnolia py-4 mt-4 rounded-md">
      <div className="text-marineBlue font-bold">Monthly</div>
      <PlanTypeSelect onClick={() => dispatch(switchPlanType())} />
      <div className="font-bold text-coolGray">Yearly</div>
    </div>
  );
};

export default PlanTyp;
