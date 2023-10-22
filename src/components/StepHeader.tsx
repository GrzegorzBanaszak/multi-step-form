import React from "react";

interface StepHeaderProps {
  title: string;
}

const StepHeader: React.FunctionComponent<StepHeaderProps> = ({ title }) => {
  return <h1 className="text-2xl font-bold">{title}</h1>;
};

export default StepHeader;
