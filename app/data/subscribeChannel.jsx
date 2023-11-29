"use client";
import { useRouter } from "next/navigation";
import supabase from "@/app/data/supabase";

export default function subscribeChannel() {
  const router = useRouter();
  const channel = supabase
    .channel("pantry items")
    .on(
      "postgres_changes",
      { event: "*", schema: "public", table: `${table}` },
      (payload) => {
        console.log("listening!!!!");
        router.refresh();
      }
    )
    .subscribe();
  return;
}
