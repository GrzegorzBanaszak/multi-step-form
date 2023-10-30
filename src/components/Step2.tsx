import { FunctionComponent } from "react";
import StepDescription from "./StepDescription";
import StepHeader from "./StepHeader";
import PlanCard from "./PlanCard";
import PlanTyp from "./PlanTypeSelect";
import { plans } from "@/lib/data";

const Step2: FunctionComponent = () => {
  return (
    <>
      <StepHeader title={"Select your plan"} />
      <StepDescription
        text={"You have the option of monthly or yearly billing"}
      />
      <div className="flex flex-col gap-y-3 lg:flex-row lg:gap-y-0 lg:gap-x-4">
        {plans.map((plan, index) => {
          return (
            <PlanCard
              key={index}
              icon={plan.icon}
              title={plan.title}
              price={plan.price}
            />
          );
        })}
      </div>
      <PlanTyp />
    </>
  );
};

export default Step2;
