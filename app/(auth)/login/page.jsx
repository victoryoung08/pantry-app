"use client";

import AuthForm from "../AuthForm";
import { useRouter } from "next/navigation";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
function Login() {
  const router = useRouter();
  const handleLogin = (e, email, password) => {
    e.preventDefault();
    const supabase = createClientComponentClient();
    const { data, error } = supabase.auth.signInWithPassword({
      email,
      password,
    });
    router.push("/dashboard");
  };
  return (
    <section className="h-screen flex flex-col justify-center item-center gap-8">
      <h2 className="text-center text-xl font-bold">Welcome back</h2>
      <AuthForm handleAuthSubmit={handleLogin} cta="Login" />
    </section>
  );
}

export default Login;
