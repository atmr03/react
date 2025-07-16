import FormRegister from "../layout/FormRegister";
import Button from "../componenst/Button";
import LinkHref from "../componenst/LinkHref";
const Register = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen bg-neutral-700 text-white">
        <h1 className=" font-bold text-4xl">Register</h1>
        <p className="text-sm mt-2">welcome, Plis enter your detail</p>
        <FormRegister />
        <LinkHref
          type="register"
          href={"/login"}
          descripsi={"sudah punya akun?"}
        />
      </div>
      <Button />
    </>
  );
};

export default Register;
