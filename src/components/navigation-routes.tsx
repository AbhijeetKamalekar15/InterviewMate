import { MainRoutes } from "@/lib/helpers";
import { cn } from "@/lib/utils";
import { NavLink } from "react-router-dom";

interface NavigationRoutesProps {
  isMobile?: boolean;
}

const NavigationRoutes = ({ isMobile = false }: NavigationRoutesProps) => {
  return (
    <ul className={cn("flex items-center gap-6", isMobile && "items-start flex-col gap-6")}>
      {MainRoutes.map((route) => (
        <NavLink
          key={route.href}
          to={route.href}
          className={({ isActive }) => cn("text-sm text-gray-500 flex items-center gap-2", isActive && "text-gray-800 font-bold ")}
        >
          {route.label === "Home" && <i className="fa-solid fa-house "></i>}
          {route.label === "Services" && <i className="fa-solid fa-concierge-bell"></i>}
          {route.label === "Contact Us" && <i className="fa-solid fa-envelope"></i>}
          {route.label === "How to Use" && <i className="fa-solid fa-info-circle"></i>}
          {route.label}
        </NavLink>
      ))}
    </ul>
  );
};

export default NavigationRoutes;
