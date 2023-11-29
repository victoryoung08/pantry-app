import supabase from "./createBrowserClient";

export default async function deleteRow(item) {
  console.log("deleting...", item.name);
  console.log(item.id);
  const { data, error } = await supabase
    .from("pantry")
    .delete()
    .eq("id", `${item.id}`);
}
