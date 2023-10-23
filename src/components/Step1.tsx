import { FunctionComponent } from "react";
import StepDescription from "./StepDescription";
import StepHeader from "./StepHeader";

const Step1: FunctionComponent = () => {
  return (
    <>
      <StepHeader title={"Personal info"} />
      <StepDescription
        text={"Please provide your name, email, address, and phone number."}
      />
      <div className="flex flex-col">
        <label>Name</label>
        <input
          className="border-[1px] border-gray-400/20 p-2 rounded"
          type="text"
          placeholder="e.g.Stephen King"
        />
      </div>
      <div className="flex flex-col">
        <label>Email Address</label>
        <input
          className="border-[1px] border-gray-400/20 p-2 rounded"
          type="text"
          placeholder="e.g.stephenking@lorem.com"
        />
      </div>
      <div className="flex flex-col">
        <label>Phone Number</label>
        <input
          className="border-[1px] border-gray-400/20 p-2 rounded"
          type="text"
          placeholder="e.g. +1 234 567 890"
        />
      </div>
    </>
  );
};

export default Step1;
