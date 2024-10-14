import React from "react";
import { ModeToggle } from "./ModeToggle";
import Link from "next/link";
import { LayoutDashboard, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";

const NavBar = () => {
  return (
    <div className=" border-b py-4 ">
      <div className="container mx-auto flex items-center justify-between px-4 md:px-6 lg:px-8">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2 text-xl font-semibold text-gray-800 dark:text-gray-200">
            <Lightbulb className="h-5 w-5 text-yellow-500" />
            <span className="hidden md:block">APP</span>
          </Link>

          <nav className="flex items-center gap-4">
            <Button
              variant={"link"}
              asChild
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100"
            >
              <Link href="/">
                <LayoutDashboard className="h-5 w-5" /> Dashboard
              </Link>
            </Button>
          </nav>
        </div>

        <div className="flex items-center gap-5">
          <ModeToggle />
          <Button className="bg-blue-500 text-white hover:bg-blue-600 px-4 py-2 rounded-lg transition-colors duration-200">
            Sign Up
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
