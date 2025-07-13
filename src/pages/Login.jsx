import FormLogin from "../layout/FormLogin";
import Button from "../componenst/Button";
const Login = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen bg-neutral-700 text-white">
        <h1 className=" font-bold text-4xl">Login</h1>
        <p className="text-sm mt-2">welcome, Plis enter your detail</p>
        <FormLogin />
      </div>
      <Button />
    </>
  );
};

export default Login;
