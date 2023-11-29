"use client";
import supabase from "@/app/data/createBrowserClient";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import deleteRow from "@/app/data/deleteRow";
function RealtimePantryItems({ items }) {
  const router = useRouter();
  useEffect(() => {
    const channel = supabase
      .channel("pantry items")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "pantry" },
        (payload) => {
          console.log(payload);
          router.refresh();
        }
      )
      .subscribe();
    return () => {
      supabase.removeChannel(channel);
    };
  }, [supabase, router]);
  return (
    <>
      {items.map((item) => (
        <div key={item.id} className="w-full max-w-sm mb-4">
          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">{item.name}</h2>
              <div className="card-actions justify-end">
                <button
                  className="btn btn-outline"
                  onClick={() => deleteRow(item)}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default RealtimePantryItems;
