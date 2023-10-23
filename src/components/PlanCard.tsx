import { FunctionComponent, ReactNode } from "react";

export interface PlanCardPros {
  icon: ReactNode;
  title: string;
  price: number;
}

const PlanCard: FunctionComponent<PlanCardPros> = ({ icon, title, price }) => {
  return (
    <div className="w-full border-[1px] border-gray-500/30 p-4 rounded-md flex gap-x-4 items-center">
      {/* icon */}
      <div>{icon}</div>
      {/* description */}
      <div>
        <div className="font-bold">{title}</div>
        <div className="text-gray-600/40">${price}/mo</div>
      </div>
    </div>
  );
};

export default PlanCard;
