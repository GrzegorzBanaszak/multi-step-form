const steps: Array<string> = ["Your info", "Select plan", "Add-ons", "Summery"];

const StepsList = () => {
  return (
    <div className="w-full h-full flex justify-center pt-8 gap-x-4">
      {steps.map((step, index) => {
        return (
          <div className="text-white font-bold w-8 h-8 border-white border-[1px] flex items-center justify-center rounded-full hover:cursor-pointer">
            {index + 1}
          </div>
        );
      })}
    </div>
  );
};

export default StepsList;
