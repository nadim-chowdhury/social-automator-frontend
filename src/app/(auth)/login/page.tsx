"use client";

import { SignIn, useUser } from "@clerk/nextjs";

export default function Login() {
  const { user } = useUser();

  if (!user) return <SignIn />;

  return <div>Welcome!</div>;
}
