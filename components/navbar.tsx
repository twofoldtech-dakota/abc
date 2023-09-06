import MobileSidebar from "@/components/mobile-sidebar";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import { Menu } from "lucide-react";
import { ModeToggle } from "./mode-toggle";

const Navbar = () => {
return (
    <div className="flex items-center p-4">
        <MobileSidebar />
        <div className="flex content-center justify-end w-full gap-1">
            <ModeToggle />
            <UserButton afterSignOutUrl="/"/>
        </div>
    </div>
);
}

export default Navbar;