"use client";

import { cn } from "@/lib/utils";
import { DrumstickIcon, Dumbbell, LayoutDashboard, Settings } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const routes = [
    {
        label: "Dashboard",
        icon: LayoutDashboard,
        href: "/dashboard",
        color: "text-sky-500"
    },
    {
        label: "Training",
        icon: Dumbbell,
        href: "/training",
        color: "text-sky-500"
    },
    {
        label: "Nutrition",
        icon: DrumstickIcon,
        href: "/nutrition",
        color: "text-sky-500"
    },
    {
        label: "Settings",
        icon: Settings,
        href: "/settings",
        color: "text-sky-500"
    },
];

const Sidebar = () => {
    const pathname = usePathname();
    return (
        <div className="space-y-4 py-4 flex flex-col h-full text-white">
            <div className="px-3 py-2 flex-1">
                <Link href="/dashboard" className="flex items-center pl-3 mb-14">
                    <div className="relative w-8 h-8 mr-4">
                        <Image
                        fill
                        alt="Logo"
                        src="/vercel.svg"
                        />
                    </div>
                    <h1 className="text-2xl font-bold text-black dark:text-white">
                        ABC
                    </h1>
                </Link>
                <div className="space-y-1">
                    {routes.map((route, index) => (
                        <Link 
                            href={route.href}
                            key={index}
                            className={cn("text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:bg-gray-700 rounded-lg transition text-black dark:text-white hover:text-white dark:hover:text-white", 
                            pathname === route.href ? "bg-gray-700 text-white" : "")}
                        >
                            <div className="flex items-center flex-1">
                                <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                                {route.label}
                            </div>
                        </Link>    
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Sidebar;