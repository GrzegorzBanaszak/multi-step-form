import React from "react";
interface StepDescriptionPros {
  text: string;
}
const StepDescription: React.FunctionComponent<StepDescriptionPros> = ({
  text,
}) => {
  return <p className="text-gray-400 ">{text}</p>;
};

export default StepDescription;
