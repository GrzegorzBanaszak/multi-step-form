import { FunctionComponent } from "react";
import IconCheckmark from "../icons/IconCheckmark";
import { cn } from "@/lib/utilis";
import { Addon } from "@/types/Addon";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { toggleAddon } from "@/features/formSlice";
import { PlanType } from "@/types/PlanType";

const AddCard: FunctionComponent<Addon> = ({ title, description, price }) => {
  const dispatch = useAppDispatch();
  const { addons, plan } = useAppSelector((state) => state.form);

  const isSelect = (): boolean => {
    const ad = addons.find((ad) => ad.title === title);
    if (ad !== undefined) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <label htmlFor={title} className="hover:cursor-pointer">
      <div
        className={cn(
          "flex border-[1px] rounded-md p-4 border-lightGray items-center lg:py-6",
          {
            "bg-lightGray/30 border-marineBlue": isSelect(),
          }
        )}
      >
        <div className="p-1">
          <div className="flex items-center mr-4">
            <input
              type="checkbox"
              className="opacity-0 absolute h-8 w-8"
              id={title}
              checked={isSelect()}
              onChange={() =>
                dispatch(
                  toggleAddon({
                    title,
                    description,
                    price: plan.type === PlanType.MONTHLY ? price : price * 10,
                  })
                )
              }
            />
            <div className="bg-white border-2 rounded-md border-lightGray w-8 h-8 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-blue-500">
              <IconCheckmark />
            </div>
          </div>
        </div>
        <div>
          <div className="font-bold">{title}</div>
          <p className="text-sm text-coolGray">{description}</p>
        </div>
        <div className="ml-auto text-purplishBlue">
          +${plan.type === PlanType.MONTHLY ? price : price * 10}/
          {plan.type === PlanType.MONTHLY ? "mo" : "yer"}
        </div>
      </div>
    </label>
  );
};

export default AddCard;
