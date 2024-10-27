import React from "react";
import Link from "next/link";
import { LayoutDashboard, Lightbulb, User, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LoginButton } from "@/components/auth/login-button";
import { currentUser } from "@/lib/auth";
import { logout } from "@/actions/logout";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ModeToggle } from "./ModeToggle";

const NavBar = async () => {
  const user = await currentUser();

  return (
    <div className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6 lg:px-8">
        <div className="flex items-center gap-6">
          <Link
            href="/"
            className="flex items-center gap-2 text-xl font-semibold text-foreground transition-colors hover:text-foreground/80"
          >
            <Lightbulb className="h-5 w-5 text-yellow-500" />
            <span className="hidden md:block">APP</span>
          </Link>

          <nav className="flex items-center gap-4">
            <Button
              variant="ghost"
              asChild
              className="flex items-center gap-2"
            >
              <Link href="/">
                <LayoutDashboard className="h-5 w-5" />
                <span>Dashboard</span>
              </Link>
            </Button>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <ModeToggle/>
          
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                  <Avatar className="h-10 w-10">
                    <AvatarImage
                      src={user.image || ""}
                      alt={user.name || "User avatar"}
                    />
                    <AvatarFallback className="bg-primary/10">
                      {user.name
                        ?.split(" ")
                        .map((n) => n[0])
                        .join("")
                        .toUpperCase() || "U"}
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">{user.name}</p>
                    <p className="text-xs leading-none text-muted-foreground">
                      {user.email}
                    </p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem asChild>
                    <Link href="/profile" className="cursor-pointer">
                      <User className="mr-2 h-4 w-4" />
                      <span>Profile</span>
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  className="text-red-600 focus:bg-red-100 dark:focus:bg-red-900/50 cursor-pointer"
                  asChild
                >
                  <form action={logout} className="w-full">
                    <button type="submit" className="flex w-full items-center">
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>Log out</span>
                    </button>
                  </form>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <LoginButton>
              <Button>
                Sign In
              </Button>
            </LoginButton>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;