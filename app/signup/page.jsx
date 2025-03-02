"use client";

import { SignUp } from "@manzar-hassan/authflow";
import { useRouter } from "next/navigation";
import React from "react";

const page = () => {
  const router = useRouter();

  return (
    <SignUp
      onNavigate={(path) => router.push(path)}
      signUpPageUrl="/signup"
      homePageUrl="/"
    />
  );
};

export default page;
