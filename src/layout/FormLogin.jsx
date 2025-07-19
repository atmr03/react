import React from "react";
import Input from "../componenst/Input";
import Button from "../componenst/Button";
const FormLogin = () => {
  const evenrHandler = (e) => {
    e.preventDefault();
    console.log(e.target.email.value);
    console.log("login");
  };
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
      <Button onClick={evenrHandler} type="submit" name={"Login"} />
    </>
  );
};

export default FormLogin;
