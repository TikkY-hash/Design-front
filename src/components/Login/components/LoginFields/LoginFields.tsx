import React from "react";
import { useNavigate } from "react-router-dom";
import Form from "../../../../UI/Form";
import { useAppDispatch } from "../../../../store";
import {
  fetchAuthLogin,
} from "../../../../store/slices/userThunks";
import FormInput from "../../../../UI/FormInput";
import { ENames } from "./types";
import {
  authLoginCheck,
  authLoginError,
} from "../../../../store/userSelectors/userSelectors";
import { useSelector } from "react-redux";
import { IUserLogin } from "../../../../store/types/sliceType";

const LoginFields = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const loginError = useSelector(authLoginError);
  const isAuth = useSelector(authLoginCheck);

  const [email, setEmail] = React.useState("");
  const [userPassword, setUserPassword] = React.useState("");
  const [showUserPassword, setShowUserPassword] = React.useState(false);

  const [isEmailError, setEmailError] = React.useState(false);
  const [isPasswordError, setIsPasswordError] = React.useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = React.useState("");
  const [passwordErrorMessage, setPasswordErrorMessage] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState("");

  React.useEffect(() => {
    if (isAuth) {
      navigate("/profile");
    }
  }, [isAuth]);

  React.useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/profile");
    }
  }, []);

  const emailHandler = (value: string) => {
    setEmail(value);
    setEmailErrorMessage("");
    setEmailError(false);
  };

  const passwordHandler = (value: string) => {
    setUserPassword(value);
    setPasswordErrorMessage("");
    setIsPasswordError(false);
  };

  const blurHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const eventTarget = event.target;

    switch (eventTarget.name) {
      case ENames.EMAIL:
        setEmailError(true);
        !eventTarget.value
          ? setEmailErrorMessage("The field cannot be empty")
          : setEmailError(false);

        break;
      case ENames.PASSWORD:
        setIsPasswordError(true);
        eventTarget.value && setIsPasswordError(false);
        break;
    }
  };

  React.useEffect(() => {
    if (loginError) setErrorMessage(loginError);
  }, [loginError]);

  const isEmptyFields =
    (!isEmailError && !email) || (!isPasswordError && !userPassword);
  const isFieldsHaveErrors = isEmailError || isPasswordError;
  const isDisabled = isEmptyFields || isFieldsHaveErrors;

  const formHanlder = async (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isDisabled) {
      return setErrorMessage("Fields must be filled ");
    }

    const query: IUserLogin = {
      email: email,
      password: userPassword,
    };

    await dispatch(fetchAuthLogin(query));
  };

  return (
    <Form
      onSumbit={formHanlder}
      buttonTitle="Sign In"
      isShowErrorMessage={isDisabled || Boolean(errorMessage)}
      errorMessage={errorMessage}
    >
      <FormInput
        inputHandler={emailHandler}
        label="Email"
        name={ENames.EMAIL}
        blurHandler={blurHandler}
        placeHolder="Example123@gmail"
        type="text"
        errorMessage={emailErrorMessage}
        isError={isEmailError}
        value={email}
      />
      <FormInput
        inputHandler={passwordHandler}
        label="Password"
        name={ENames.PASSWORD}
        blurHandler={blurHandler}
        showPassword={() => setShowUserPassword(!showUserPassword)}
        type={showUserPassword ? "text" : "password"}
        errorMessage={passwordErrorMessage}
        isError={isPasswordError}
        value={userPassword}
      />
    </Form>
  );
};

export default LoginFields;
