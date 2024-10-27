import { LoginButton } from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";
import React from "react";
import NavBar from "../_components/navbar";
import NextTopLoader from "nextjs-toploader";
import { currentUser } from "@/lib/auth";

const Home = async() => {
  const user=await currentUser()
  return (
    <main className="min-h-screen">
      <NavBar/>
      {user?.role}
    </main>
  );
};

export default Home;
