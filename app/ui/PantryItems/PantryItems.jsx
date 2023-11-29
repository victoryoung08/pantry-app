"use server";
import RealtimePantryItems from "../RealtimePantryItems/RealtimePantryItems";
import supabase from "@/app/data/createBrowserClient";

export default async function PantryItems() {
  const { data: pantryItems } = await supabase.from("pantry").select();

  return <RealtimePantryItems items={pantryItems} className="w-full" />;
}
