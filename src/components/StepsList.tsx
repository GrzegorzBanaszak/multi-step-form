import { useAppSelector } from "../hooks";

const steps: Array<string> = ["Your info", "Select plan", "Add-ons", "Summery"];

const StepsList = () => {
  const currentStep = useAppSelector((state) => state.form.currentStep);

  const hoverCurrnetStep = (index: number): boolean => {
    if (index === 4 && currentStep === 5) {
      return true;
    }
    if (index === currentStep) {
      return true;
    }
    return false;
  };

  return (
    <div className="w-full h-full flex justify-center pt-8 gap-x-4 lg:flex-col lg:justify-start lg:gap-x-0 lg:gap-y-6 lg:mx-6">
      {steps.map((step, index) => {
        return (
          <div key={index} className="flex gap-3 lg:items-center">
            <div
              className={`text-white font-bold w-8 h-8 lg:w-10 lg:h-10 border-white border-[1px] flex items-center justify-center rounded-full ${
                hoverCurrnetStep(index + 1) ? "bg-white !text-black" : ""
              }`}
            >
              {index + 1}
            </div>
            <div className="hidden lg:flex lg:flex-col uppercase justify-center">
              <div className="text-white/30 text-sm">step {index + 1}</div>
              <div className="font-bold text-white">{step}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StepsList;
