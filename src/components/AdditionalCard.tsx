import React from "react";

export type AddationalCardProps = {
  serviceName: string;
  price: string;
};

const AdditionalCard: React.FC<AddationalCardProps> = ({
  serviceName,
  price,
}) => {
  return (
    <div className="flex justify-between items-center">
      <div className="text-coolGray ">{serviceName}</div>
      <div className="text-marineBlue ">+${price}/mon</div>
    </div>
  );
};

export default AdditionalCard;
