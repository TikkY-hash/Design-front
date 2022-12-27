import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../../store";
import { authReset } from "../../../../store/slices/userSlice";

import {
  fetchAuthRegister,
} from "../../../../store/slices/userThunks";
import { IUserLogin } from "../../../../store/types/sliceType";
import {
  authRegisterCheck,
  authRegisterError,
} from "../../../../store/userSelectors/userSelectors";
import Form from "../../../../UI/Form";
import NameFields from "../NameFields";
import PasswordFields from "../PasswordFields";

const RegisterFields = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const isRegister = useSelector(authRegisterCheck);
  const registerError = useSelector(authRegisterError);

  const [email, setEmail] = React.useState("");
  const [userPassword, setUserPassword] = React.useState("");
  const [userConfirmPassword, setUserConfirmPassword] = React.useState("");
  const [showUserPassword, setShowUserPassword] = React.useState(false);
  const [showUserConfirmPassword, setShowUserConfirmPassword] =
    React.useState(false);
  const [isEmailError, setIsEmailError] = React.useState(false);
  const [isPasswordError, setIsPasswordError] = React.useState(false);
  const [isConfirmPasswordError, setIsConfirmPasswordError] =
    React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState("");

  React.useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/profile");
    }
  }, []);

  React.useEffect(() => {
    if (registerError) setErrorMessage(registerError);
  }, [registerError]);

  React.useEffect(() => {
    if (isRegister) navigate("/");
  }, [isRegister]);

  const isEmptyPasswordFields =
    (!isConfirmPasswordError && !userConfirmPassword) ||
    (!isPasswordError && !userPassword);
  const isEmptyNameFields = !isEmailError && !email;
  const isFieldsHaveErrors =
    isConfirmPasswordError || isEmailError || isPasswordError;

  const isDisabled =
    (isEmptyPasswordFields && isEmptyNameFields) || isFieldsHaveErrors;

  const formHanlder = async (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isDisabled) {
      return setErrorMessage("Fields must be filled in and not contain errors");
    }

    const query: IUserLogin = {
      email: email,
      password: userPassword,
    };

    await dispatch(fetchAuthRegister(query));
    dispatch(authReset());
  };

  return (
    <Form
      onSumbit={formHanlder}
      buttonTitle="Sign Up"
      isShowErrorMessage={isDisabled || Boolean(errorMessage)}
      errorMessage={errorMessage}
    >
      <NameFields
        setEmail={setEmail}
        email={email}
        isEmailError={isEmailError}
        setIsEmailError={setIsEmailError}
      />
      <PasswordFields
        setShowUserConfirmPassword={() =>
          setShowUserConfirmPassword(!showUserConfirmPassword)
        }
        setShowUserPassword={() => setShowUserPassword(!showUserPassword)}
        setUserConfirmPassword={setUserConfirmPassword}
        setUserPassword={setUserPassword}
        isPasswordError={isPasswordError}
        setIsPasswordError={() => setIsPasswordError(!isPasswordError)}
        showUserConfirmPassword={showUserConfirmPassword}
        showUserPassword={showUserPassword}
        userConfirmPassword={userConfirmPassword}
        userPassword={userPassword}
        isConfirmPasswordError={isConfirmPasswordError}
        setIsConfirmPasswordError={setIsConfirmPasswordError}
      />
    </Form>
  );
};

export default RegisterFields;
