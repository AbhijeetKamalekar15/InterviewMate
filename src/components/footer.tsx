import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"; // Import Lucide icons
import { Link } from "react-router-dom";
import { MainRoutes } from "@/lib/helpers";
import Container from "./container";

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  hoverColor: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon, hoverColor }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`hover:${hoverColor}`}
    >
      {icon}
    </a>
  );
};

interface FooterLinkProps {
  to: string;
  children: React.ReactNode;
}

const FooterLink: React.FC<FooterLinkProps> = ({ to, children }) => {
  return (
    <li>
      <Link
        to={to}
        className="hover:underline  hover:text-gray-100"
      >
        {children}
      </Link>
    </li>
  );
};

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