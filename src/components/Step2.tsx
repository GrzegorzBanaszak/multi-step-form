import { FunctionComponent } from "react";
import StepDescription from "./StepDescription";
import StepHeader from "./StepHeader";
import PlanCard, { PlanCardPros } from "./PlanCard";
import IconAdvanced from "../icons/IconAdvanced";
import IconArcade from "../icons/IconArcade";
import IconPro from "../icons/IconPro";
import PlanTyp from "./PlanTyp";

const plans: Array<PlanCardPros> = [
  {
    icon: <IconArcade />,
    title: "Arcane",
    price: 9,
  },
  {
    icon: <IconAdvanced />,
    title: "Advanced",
    price: 12,
  },
  {
    icon: <IconPro />,
    title: "Pro",
    price: 15,
  },
];

const Step2: FunctionComponent = () => {
  return (
    <>
      <StepHeader title={"Select your plan"} />
      <StepDescription
        text={"You have the option of monthly or yearly billing"}
      />
      <div className="flex flex-col gap-y-3">
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
