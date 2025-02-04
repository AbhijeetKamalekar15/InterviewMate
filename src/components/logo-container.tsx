import { Link } from "react-router-dom";

const LogoContainer = () => {
  return (
    <Link to={"/"} className="">
      <img
        src="/assets/svg/logo.svg"
        alt=""
        className="min-w-10 min-h-10 object-contain"
      />
    </Link>
  );
};

export default LogoContainer;