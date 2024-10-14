import React from "react";
import { ModeToggle } from "./ModeToggle";
import Link from "next/link";
import { LayoutDashboard, Lightbulb, Loader2Icon } from "lucide-react";
import { Button } from "@/components/ui/button";

const NavBar = () => {
  return (
    <div className="border-b py-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2 text-xl">
            <Lightbulb />
            <div className="hidden md:block">APP</div>
          </Link>

          <div className="flex items-center gap-2">
            <Button
              variant={"link"}
              asChild
              className="flex items-center justify-center gap-2"
            >
              <Link href={"/"}>
                <LayoutDashboard className="h-4 w-4" /> Dashboard
              </Link>
            </Button>
          </div>
        </div>

        <div className="flex items-center justify-between gap-5">
          <div className="flex w-40 items-center justify-center">
            <Button>Sign Up</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
