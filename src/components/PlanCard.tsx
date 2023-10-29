import { selectPlan } from "@/features/formSlice";
import { useAppSelector } from "@/hooks";
import { PlanType } from "@/types/PlanType";
import { FunctionComponent, ReactNode } from "react";
import { useDispatch } from "react-redux";

export interface PlanCardPros {
  icon: ReactNode;
  title: string;
  price: number;
}

const PlanCard: FunctionComponent<PlanCardPros> = ({ icon, title, price }) => {
  const { name, type } = useAppSelector((state) => state.form.plan);
  const dispatch = useDispatch();

  const getPrice = (): number => {
    return type === PlanType.MONTHLY ? price : price * 10;
  };
  return (
    <div
      onClick={() => dispatch(selectPlan({ name: title, price: getPrice() }))}
      className={`w-full border-[1px] border-gray-500/30 p-4 rounded-md  hover:border-marineBlue duration-300 cursor-pointer ${
        name === title && "bg-lightGray/20 border-marineBlue"
      }`}
    >
      <div className="flex gap-x-4 items-center lg:flex-col lg:items-start lg:gap-x-0 lg:gap-y-8">
        {/* icon */}
        <div>{icon}</div>
        {/* description */}
        <div>
          <div className="font-bold capitalize">{title}</div>
          <div className="text-gray-600/40">
            ${type === PlanType.MONTHLY ? price : price * 10}/
            {type === PlanType.MONTHLY ? "mo" : "yer"}
          </div>
          {type === PlanType.YEARLY && (
            <div className="text-marineBlue">2 months free</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PlanCard;
