import { FunctionComponent } from "react";
import StepDescription from "./StepDescription";
import StepHeader from "./StepHeader";
import AddCard, { AddCardProps } from "@/components/AddCard";

const addons: Array<AddCardProps> = [
  {
    title: "Online service",
    description: "Access to multiplayer",
    price: 1,
  },
  {
    title: "Large storage",
    description: "Extra 1TB of cloud save",
    price: 2,
  },
  {
    title: "Customizable profile",
    description: "Custom theme on your profile",
    price: 2,
  },
];

const Step3: FunctionComponent = () => {
  return (
    <>
      <StepHeader title={"Pick add-ons"} />
      <StepDescription text={"Add-ons help enhance your gaming experience."} />
      <div className="flex flex-col gap-y-3">
        {addons.map((add, index) => {
          return (
            <AddCard
              key={index}
              title={add.title}
              description={add.description}
              price={add.price}
            />
          );
        })}
      </div>
    </>
  );
};

export default Step3;
