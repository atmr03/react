import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-neutral-700 text-white">
      <h1 className="text-4xl font-bold">404 NOT FOUNDS</h1>
      <p>{error.message || error.statusText}</p>
    </div>
  );
};

export default ErrorPage;
