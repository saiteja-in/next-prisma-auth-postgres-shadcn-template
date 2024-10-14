import { LoginButton } from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";
import React from "react";

const Home = () => {
  return (
    <main className="flex items-center justify-center">
      <LoginButton>
      <Button>Sign In</Button>
      </LoginButton>
    </main>
  );
};

export default Home;
