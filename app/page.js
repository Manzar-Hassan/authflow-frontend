'use client'

import { Card } from "@manzar-hassan/authflow";
import { useRouter } from "next/navigation";
import React from "react";

const page = () => {

    const router = useRouter();

  return (
    <Card
      title="Authflow"
      description="Creating Authflow is Amazing"
      onNavigate={(path) => router.push(path)}
    />
  )
};

export default page;
