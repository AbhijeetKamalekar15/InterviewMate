import LoaderPage from "@/routes/loader-page";
import { useAuth } from "@clerk/clerk-react"
import { Navigate } from "react-router";

const ProtectedRoutes = ({children}: {children: React.ReactNode}) => {
    const {isLoaded, isSignedIn} = useAuth();
    if(!isLoaded){
        return <LoaderPage/>
    }
    if(!isSignedIn){
        return <Navigate to={"/signin"} replace/>
    }
    return children;
}

export default ProtectedRoutes;