"use client";

import { FC, useState } from "react";
import { Button } from "@/components/ui/Button";
import { signOut } from "next-auth/react";

interface SignOutButtonProps {}

const SignOutButton: FC<SignOutButtonProps> = ({}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const signUserOut = async () => {
    setIsLoading(true);
    try {
      await signOut();
    } catch (error) {
      // toast({
      //   title: "Error Signing out",
      //   message: "Please try again later",
      //   type: "Error",
      // });
    }
  };

  return (
    <Button onClick={signUserOut} isLoading={isLoading}>
      Sign In
    </Button>
  );
};

export default SignOutButton;
