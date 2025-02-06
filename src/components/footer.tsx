import { FaGithub, FaLinkedin} from "react-icons/fa";

import Container from "./container";




const Footer = () => {
  return (
    <div className="w-full bg-gray-100">
      <Container>
        <footer className="">
          <div className="container mx-auto flex items-center justify-center space-y-4 md:flex-row md:space-y-0">
            <div className="flex gap-8">
              <a
                href="https://github.com/AbhijeetKamalekar15/AI-Mock-Interviewer"
                className="flex gap-1 text-sm text-gray-500 hover:text-gray-900"
                aria-label="GitHub"
                title="Give star for this project on GitHub" // Tooltip on hover
              >
                <FaGithub className="w-5 h-5" size={24} />
                Github
              </a>

              <a href="https://www.linkedin.com/in/abhijeet-kamalekar-1700852b9/" className="flex text-sm gap-1 text-gray-500 hover:text-gray-900" aria-label="LinkedIn">
                <FaLinkedin className="w-5 h-5" size={24} /> LinkedIn
              </a>

            </div>
          </div>
        </footer>
      </Container>
    </div>
  );
};

export default Footer;