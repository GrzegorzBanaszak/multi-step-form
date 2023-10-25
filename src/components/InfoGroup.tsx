import { useAppDispatch } from "@/hooks";
import { FunctionComponent } from "react";
import { userDataChange } from "@/features/formSlice";

export interface InfoGroupProps {
  placeholder: string;
  title: string;
  value: string;
  type: string;
}

const InfoGroup: FunctionComponent<InfoGroupProps> = ({
  placeholder,
  title,
  value,
  type,
}) => {
  const dispatch = useAppDispatch();

  return (
    <div className="flex flex-col">
      <label>{title}</label>
      <input
        className="border-[1px] border-coolGray-400 p-2 rounded focus:outline-0 focus:border-[1px] focus:border-black"
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) =>
          dispatch(userDataChange({ type: type, data: e.target.value }))
        }
      />
    </div>
  );
};

export default InfoGroup;
