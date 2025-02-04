import { Link } from "react-router-dom";

const LogoContainer = () => {
  return (
    <Link to={"/"} className="">
      <h2 className="font-semibold bg-gray-200 p-1 rounded-md text-blue-700">🚀InterviewMate</h2>
    </Link>
  );
};

export default LogoContainer;