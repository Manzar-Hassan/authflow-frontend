"use client";

import { SignIn } from "@manzar-hassan/authflow";
import { useRouter } from "next/navigation";
import React from "react";

const Page = () => {
  const router = useRouter();

  return (
    <>
      <SignIn
        onNavigate={(path) => router.push(path)}
        signUpPageUrl="/signup"
        homePageUrl="/"
      />
    </>
  );
};

export default Page;
