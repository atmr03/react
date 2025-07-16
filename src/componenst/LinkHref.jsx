import { Link } from "react-router-dom";

const LinkHref = (props) => {
  const { href, descripsi, type } = props;
  return (
    <>
      <div>
        <span>{descripsi}</span>
        <Link to={href} className="text-blue-600 px-1">
          {type === "login" ? "Register" : "Login"}
        </Link>
      </div>
    </>
  );
};

export default LinkHref;
