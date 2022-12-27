import React from "react";
import FormInput from "../../../../UI/FormInput";
import { ENames } from "../../../Login/components/LoginFields/types";

interface NameFieldsProps {
  setEmail: (value: string) => void;
  email: string;
  isEmailError: boolean;
  setIsEmailError: (value: boolean) => void;
}

const NameFields = ({
  email,
  isEmailError,
  setEmail,
  setIsEmailError,
}: NameFieldsProps) => {
  const [emailErrorMessage, setEmailErrorMessage] = React.useState("");

  const usernameHanlder = (value: string) => {
    setEmail(value);
    setEmailErrorMessage("");

    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;

    if (!emailRegex.test(value.toLocaleLowerCase())) {
      setIsEmailError(true);
      return setEmailErrorMessage("Incorrect user name");
    }

    setIsEmailError(false);
  };

  const blurHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const eventTarget = event.target;

    switch (eventTarget.name) {
      case ENames.EMAIL:
        setIsEmailError(true);
        !eventTarget.value
          ? setEmailErrorMessage("The field cannot be empty")
          : setIsEmailError(false);

        break;
    }
  };

  return (
    <React.Fragment>
      <FormInput
        inputHandler={usernameHanlder}
        label="Email"
        name={ENames.EMAIL}
        placeHolder="Example123@gmail.com"
        blurHandler={blurHandler}
        type="text"
        errorMessage={emailErrorMessage}
        isError={isEmailError || Boolean(emailErrorMessage)}
        value={email}
      />
    </React.Fragment>
  );
};

export default NameFields;
