import { Link } from "react-router-dom";

const LogoContainer = () => {
  return (
    <Link to={"/"} className="">
      <h2 className="font-extrabold bg-gray-300 p-1 rounded-full px-2 text-blue-700">🚀InterviewMate</h2>
    </Link>
  );
};

export default LogoContainer;