import { LoginButton } from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";
import React from "react";
import NavBar from "../_components/navbar";
import NextTopLoader from "nextjs-toploader";

const Home = () => {
  return (
    <main className="min-h-screen">
      {/* <LoginButton>
        <Button>Sign In</Button>
      </LoginButton> */}
      <NavBar/>
      This is the home page
    </main>
  );
};

export default Home;
