import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

async function DashboardLayout({ children }) {
  const supabase = createServerComponentClient({ cookies });
  console.log(supabase);
  return <>
  
  {children}</>;
}

export default DashboardLayout;
