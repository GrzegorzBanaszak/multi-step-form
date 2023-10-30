import { useAppSelector } from "@/hooks";
import { PlanType } from "@/types/PlanType";
import React from "react";

export type SummaryCardProps = {
  serviceName: string;
  price: number;
};

const SummaryCard: React.FC<SummaryCardProps> = ({ serviceName, price }) => {
  const plan = useAppSelector((state) => state.form.plan);
  return (
    <div className="flex justify-between items-center">
      <div className="text-coolGray ">{serviceName}</div>
      <div className="text-marineBlue ">
        +${price}/{plan.type === PlanType.MONTHLY ? "mon" : "yer"}
      </div>
    </div>
  );
};

export default SummaryCard;
