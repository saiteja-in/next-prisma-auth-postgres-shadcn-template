"use client";

import React, { useEffect, useState, Suspense } from "react";
import { ModeToggle } from "./ModeToggle";
import Link from "next/link";
import { LayoutDashboard, Lightbulb, User, LogOut, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LoginButton } from "@/components/auth/login-button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { logout } from "@/actions/logout";
import { useSession } from "next-auth/react"; // Add this import

const NavBar = () => {
  const { data: session, status } = useSession(); // Replace useCurrentUser with useSession
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Handle hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleLogout = async () => {
    try {
      setIsLoggingOut(true);
      await logout();
    } catch (error) {
      console.error("Logout failed:", error);
    } finally {
      setIsLoggingOut(false);
    }
  };

  // Don't render anything until client-side hydration is complete
  if (!mounted) {
    return null;
  }

  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6 lg:px-8">
        <div className="flex items-center gap-6">
          <Link
            href="/"
            className="flex items-center gap-2 text-xl font-semibold transition-colors hover:text-primary"
          >
            <Lightbulb className="h-6 w-6 text-yellow-500" />
            <span className="hidden md:block">APP</span>
          </Link>

          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              asChild
              className="flex items-center gap-2 hover:bg-accent"
            >
              <Link href="/">
                <LayoutDashboard className="h-4 w-4" />
                <span>Dashboard</span>
              </Link>
            </Button>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <ModeToggle />
          <Suspense fallback={<Loader2 className="h-4 w-4 animate-spin" />}>
            {status === "authenticated" && session?.user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="relative h-10 w-10 rounded-full"
                  >
                    <Avatar className="h-10 w-10">
                      {session.user.image ? (
                        <AvatarImage
                          src={session.user.image}
                          alt={session.user.name || "User avatar"}
                        />
                      ) : (
                        <AvatarFallback className="bg-primary/10">
                          {session.user.name?.substring(0, 2).toUpperCase() ?? "AA"}
                        </AvatarFallback>
                      )}
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">
                        {session.user.name}
                      </p>
                      <p className="text-xs leading-none text-muted-foreground">
                        {session.user.email}
                      </p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link href="/profile" className="flex items-center cursor-pointer">
                      <User className="mr-2 h-4 w-4" />
                      <span>Profile</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className="text-red-600 focus:text-red-600 focus:bg-red-50 dark:focus:bg-red-950"
                    onClick={handleLogout}
                    disabled={isLoggingOut}
                  >
                    <div className="flex items-center w-full">
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>{isLoggingOut ? "Logging out..." : "Log out"}</span>
                    </div>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : status === "loading" ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <LoginButton>
                <Button className="gap-2">
                  <User className="h-4 w-4" />
                  Sign In
                </Button>
              </LoginButton>
            )}
          </Suspense>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;