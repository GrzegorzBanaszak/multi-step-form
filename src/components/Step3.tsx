import { FunctionComponent } from "react";
import StepDescription from "./StepDescription";
import StepHeader from "./StepHeader";
import AddCard from "@/components/AddCard";
import { addons } from "@/lib/data";

const Step3: FunctionComponent = () => {
  return (
    <>
      <StepHeader title={"Pick add-ons"} />
      <StepDescription text={"Add-ons help enhance your gaming experience."} />
      <div className="flex flex-col gap-y-3">
        {addons.map((ad, index) => {
          return (
            <AddCard
              key={index}
              title={ad.title}
              description={ad.description}
              price={ad.price}
            />
          );
        })}
      </div>
    </>
  );
};

export default Step3;
