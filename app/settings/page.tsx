import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const page = async () => {
  const session = await auth();
  console.log(session);
  return (
    <div className="items-center justify-center min-h-screen">
      <div className="flex flex-col gap-3">
        <p>Role: {session?.user?.role}</p>
        <p>Email: {session?.user?.email}</p>
        <p>Name: {session?.user?.name}</p>
        <p>OAuth: {session?.user?.isOAuth}</p>
        <p>Image: {session?.user?.image}</p>
        <Avatar>
          {session?.user?.image ? (
            <AvatarImage src={session.user.image} />
          ) : (
            <AvatarFallback>
              {session?.user?.name?.substring(0, 2).toUpperCase() ?? "AA"}
            </AvatarFallback>
          )}
        </Avatar>
      </div>
      <form
        action={async () => {
          "use server";
          await signOut({ redirectTo: "/auth/login" });
        }}
      >
        <Button type="submit">Sign out</Button>
      </form>
    </div>
  );
};

export default page;
