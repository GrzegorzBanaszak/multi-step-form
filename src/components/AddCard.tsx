import { FunctionComponent } from "react";
import IconCheckmark from "../icons/IconCheckmark";

export interface AddCardProps {
  title: string;
  description: string;
  price: number;
}

const AddCard: FunctionComponent<AddCardProps> = ({
  title,
  description,
  price,
}) => {
  return (
    <label htmlFor={title} className="hover:cursor-pointer">
      <div className="flex border-[1px] rounded-md p-4 border-lightGray items-center lg:py-6">
        <div className="p-1">
          <div className="flex items-center mr-4">
            <input
              type="checkbox"
              className="opacity-0 absolute h-8 w-8"
              id={title}
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
        <div className="ml-auto text-purplishBlue">+${price}/mo</div>
      </div>
    </label>
  );
};

export default AddCard;
