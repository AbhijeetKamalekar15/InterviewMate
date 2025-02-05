import { useAuth, UserButton } from "@clerk/clerk-react"
import { Loader } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const ProfileContainer = () => {
    const { isSignedIn, isLoaded } = useAuth();

    if (isLoaded) {
        <div className="flex items-center">
            <Loader className="min-w-4 min-h-4 animate-spin text-emerald-500" />
        </div>
    }
    return (
        <div className="flex items-center gap-6">
            {isSignedIn ? <UserButton afterSignOutUrl="/"/> : <Link to={"/signin"}><Button size={"sm"} className="bg-blue-600 text-white rounded-lg hover:bg-teal-600 transition">Get Started</Button></Link>}
        </div>
    )
}

export default ProfileContainer