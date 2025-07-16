import FormLogin from "../layout/FormLogin";
import LinkHref from "../componenst/LinkHref";
const Login = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen bg-neutral-700 text-white">
        <h1 className=" font-bold text-4xl">Login</h1>
        <p className="text-sm mt-2">welcome, Plis enter your detail</p>
        <FormLogin />
        <LinkHref
          type="login"
          href={"/register"}
          descripsi={"belum punya akun?"}
        />
      </div>
    </>
  );
};

export default Login;
