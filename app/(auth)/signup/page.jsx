"use client";
import { useRouter } from "next/navigation";
import AuthForm from "../AuthForm";
import { createBrowserClient } from "@supabase/ssr";

async function Signup() {
  const router = useRouter();
  const handleSignup = async (e, email, password) => {
    e.preventDefault();
    const supabase = createBrowserClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    );
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });
    if (error) {
      console.log(error);
    }
    if (data) {
      console.log("sign up successful!");
      router.push("/verify");
    }
  };
  return (
    <section className="h-screen flex flex-col justify-center item-center gap-8">
      <h2 className="text-center text-xl font-bold">
        Get started with the Pantry
      </h2>
      <AuthForm handleAuthSubmit={handleSignup} cta="Get Started" />
    </section>
  );
}

export default Signup;
