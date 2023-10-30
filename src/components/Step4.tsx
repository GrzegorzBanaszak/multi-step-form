import { FunctionComponent } from "react";
import StepHeader from "@/components/StepHeader";
import StepDescription from "@/components/StepDescription";
import { useAppDispatch, useAppSelector } from "@/hooks";
import SummaryCard from "./SummaryCard";
import { PlanType } from "@/types/PlanType";
import { changeCurrentStep } from "@/features/formSlice";

const Step4: FunctionComponent = () => {
  const { addons, plan } = useAppSelector((state) => state.form);
  const dispatch = useAppDispatch();
  const getTotal = (): number => {
    let total: number = 0;
    total += plan.price;
    if (addons.length > 0) {
      addons.forEach((ad) => {
        total += ad.price;
      });
    }

    return total;
  };
  return (
    <>
      <StepHeader title={"Finishing up"} />
      <StepDescription
        text={"Double-check everything looks OK before confirming."}
      />
      <div className="bg-magnolia px-4 py-6 rounded-lg flex flex-col gap-y-3">
        <div className="flex justify-between items-center border-b-2 border-b-lightGray pb-3">
          <div>
            <div className="text-marineBlue font-bold capitalize">
              {plan.name} ({plan.type})
            </div>
            <div
              className="text-coolGray underline cursor-pointer hover:text-purplishBlue duration-150"
              onClick={() => dispatch(changeCurrentStep(2))}
            >
              Change
            </div>
          </div>
          <div className="text-marineBlue font-bold">
            ${plan.price}/{plan.type === PlanType.MONTHLY ? "mon" : "yer"}
          </div>
        </div>
        {addons.map((ad, index) => {
          return (
            <SummaryCard key={index} serviceName={ad.title} price={ad.price} />
          );
        })}
      </div>
      <div className="flex justify-between items-center py-4">
        <div className="text-coolGray ">
          Total (per <span>{plan.type}</span>)
        </div>
        <div className="text-purplishBlue font-bold text-lg">
          +${getTotal()}/{plan.type === PlanType.MONTHLY ? "mon" : "yer"}
        </div>
      </div>
    </>
  );
};

export default Step4;
