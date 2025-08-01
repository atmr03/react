import React, { useEffect } from "react";
import Input from "../componenst/Input";
import Button from "../componenst/Button";

import { useRef } from "react";
const FormLogin = () => {
  const evenrHandler = (event) => {
    event.preventDefault();
    localStorage.setItem("email", event.target.email.value);
    localStorage.setItem("password", event.target.password.value);
    window.location.href = "/card";
  };

  const emailRef = useRef(null);

  useEffect(() => {
    emailRef.current.focus();
  }, []);
  return (
    <form onSubmit={evenrHandler}>
      <Input
        type={"text"}
        name={"Email"}
        id={"email"}
        placeholder={"example@gmail.com"}
        ref={emailRef}
      />
      <Input
        type={"password"}
        name={"Password"}
        id={"password"}
        placeholder={"password"}
      />
      <Button type="submit" name={"Login"} />
    </form>
  );
};

export default FormLogin;
