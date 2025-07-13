import Input from "../componenst/Input";
import Button from "../componenst/Button";
const FormRegister = () => {
  return (
    <>
      <Input type={"text"} name={"Name"} id={"nama"} placeholder={"username"} />
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
      <Button name={"Register"}></Button>
    </>
  );
};

export default FormRegister;
