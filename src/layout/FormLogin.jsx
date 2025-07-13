import React from "react";
import Input from "../componenst/Input";
import Button from "../componenst/Button";
const FormLogin = () => {
  return (
    <>
      <Input
        type={"text"}
        name={"Email"}
        id={"email"}
        placeholder={"example@gmail.com"}
      />
      <Input
        type={"password"}
        name={"Password"}
        id={"password"}
        placeholder={"password"}
      />
      <Button name={"Login"} />
    </>
  );
};

export default FormLogin;
