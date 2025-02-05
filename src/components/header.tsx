import { useAuth } from "@clerk/clerk-react";
import Container from "./container";
import LogoContainer from "./logo-container";
import { cn } from "@/lib/utils";
import NavigationRoutes from "./navigation-routes";
import { useEffect, useId, useState } from "react";
import { NavLink } from "react-router-dom";
import ProfileContainer from "./profile-container";
import ToggleContainer from "./toggle-container";

const Header = () => {
  const { userId } = useAuth();
  const [shadow, setShadow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header
      className={cn("w-full bg-gray-100 border-b shadow-md z-10 duration-150 transition-all ease-in-out fixed sha", shadow ? "shadow-sm" : "shadow-none")}
    >
      <Container className="">
        <div className="flex items-center gap-6 w-full">
          {/* logo section */}
          <LogoContainer />

          {/* navigation section */}
          <nav className="hidden md:flex items-center gap-6">
            <NavigationRoutes />

          </nav>

          {/* profile section */}
          <div className="ml-auto flex items-center gap-6">
            {/* profile */}
            {userId && (
              <NavLink
                to={"/generate"}
                className={({ isActive }) =>
                  cn(
                    "text-sm text-blue-700 hover:text-green-500 hidden sm:inline-flex", // Hide on sm and below
                    isActive && "font-bold text-green-500"
                  )
                }
              >
                <i className="fa-solid fa-user-tie"></i>
                <div className="w-1">
                  </div> Take an Interview
              </NavLink>
            )}

            <ProfileContainer />


            {/* mobile toggle section */}
            <ToggleContainer />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
