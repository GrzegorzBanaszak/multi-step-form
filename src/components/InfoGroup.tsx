import { useAppDispatch } from "@/hooks";
import { FunctionComponent } from "react";
import { userDataChange } from "@/features/formSlice";

export interface InfoGroupProps {
  placeholder: string;
  title: string;
  value: string;
  type: string;
  isError: boolean;
}

const InfoGroup: FunctionComponent<InfoGroupProps> = ({
  placeholder,
  title,
  value,
  type,
  isError,
}) => {
  const dispatch = useAppDispatch();

  return (
    <div className="flex flex-col">
      <label className="flex justify-between">
        {title}
        {isError && (
          <p className="text-red-600 font-bold">This fild is required</p>
        )}
      </label>
      <input
        className={`border-[1px] border-coolGray-400 p-2 rounded focus:outline-0 focus:border-[1px] focus:border-black ${
          isError && "border-red-600"
        }`}
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
