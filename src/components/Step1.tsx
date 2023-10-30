import { FunctionComponent } from "react";
import StepDescription from "./StepDescription";
import StepHeader from "./StepHeader";
import InfoGroup from "./InfoGroup";
import { useAppSelector } from "@/hooks";

const Step1: FunctionComponent = () => {
  const { username, email, phoneNumber } = useAppSelector(
    (state) => state.form.userData
  );
  const { usernameError, emailError, phoneNumberError } = useAppSelector(
    (state) => state.form.userDataValid
  );
  return (
    <>
      <StepHeader title={"Personal info"} />
      <StepDescription
        text={"Please provide your name, email, address, and phone number."}
      />
      <InfoGroup
        title="Name"
        placeholder="e.g.Stephen King"
        type={Object.keys({ username })[0]}
        value={username}
        isError={usernameError}
      />
      <InfoGroup
        title="Email Address"
        placeholder="e.g.stephenking@lorem.com"
        type={Object.keys({ email })[0]}
        value={email}
        isError={emailError}
      />
      <InfoGroup
        title="Phone Number"
        placeholder="e.g. +1 234 567 890"
        type={Object.keys({ phoneNumber })[0]}
        value={phoneNumber}
        isError={phoneNumberError}
      />
    </>
  );
};

export default Step1;
