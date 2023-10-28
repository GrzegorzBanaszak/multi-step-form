import { PlanType } from "@/features/formSlice";
import { useAppSelector } from "@/hooks";
import { cn } from "@/lib/utilis";
import React from "react";

interface PlanTypeSelectProps extends React.ComponentProps<"div"> {}

const PlanTypeSelect = ({ className, ...props }: PlanTypeSelectProps) => {
  const { type } = useAppSelector((state) => state.form.plan);
  return (
    <div
      className={cn(
        "relative box block h-6 w-10 rounded-full bg-marineBlue cursor-pointer",
        className
      )}
      {...props}
    >
      <div
        className={cn(
          "absolute left-1 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-white  transition",
          { "translate-x-full": type === PlanType.YEARLY }
        )}
      ></div>
    </div>
  );
};

export default PlanTypeSelect;
