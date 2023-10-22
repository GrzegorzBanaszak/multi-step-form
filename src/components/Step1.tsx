import StepDescription from "./StepDescription";
import StepHeader from "./StepHeader";

const Step1 = () => {
  return (
    <section className="flex flex-col gap-y-4">
      <StepHeader title={"Select your plan"} />
      <StepDescription
        text={"You have the option of monthly or yearly billing"}
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
    </section>
  );
};

export default Step1;
