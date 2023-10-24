import { FunctionComponent } from "react";
import StepHeader from "@/components/StepHeader";
import StepDescription from "@/components/StepDescription";

const Step4: FunctionComponent = () => {
  return (
    <>
      <StepHeader title={"Finishing up"} />
      <StepDescription
        text={"Double-check everything looks OK before confirming."}
      />
      <div className="bg-magnolia px-4 py-6 rounded-lg flex flex-col gap-y-3">
        <div className="flex justify-between items-center border-b-2 border-b-lightGray pb-3">
          <div>
            <div className="text-marineBlue font-bold">Arcane (Monthly)</div>
            <div className="text-coolGray underline">Change</div>
          </div>
          <div className="text-marineBlue font-bold">$9/mon</div>
        </div>
        <div className="flex justify-between items-center">
          <div className="text-coolGray ">Online service</div>
          <div className="text-marineBlue ">+$1/mon</div>
        </div>
        <div className="flex justify-between items-center">
          <div className="text-coolGray ">Larger storage</div>
          <div className="text-marineBlue ">+$2/mon</div>
        </div>
      </div>
      <div className="flex justify-between items-center py-4">
        <div className="text-coolGray ">Total (per month)</div>
        <div className="text-purplishBlue font-bold text-lg">+$2/mon</div>
      </div>
    </>
  );
};

export default Step4;
