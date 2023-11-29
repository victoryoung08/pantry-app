"use client";

import { useState } from "react";
import supabase from "@/app/data/supabase";

function AddToPantry({ onAddItem }) {
  const [item, setItem] = useState("");
  const newItem = {
    name: item,
  };

  async function handleAddItem(e) {
    e.preventDefault();
    const { error } = await supabase.from("pantry").insert(newItem);
    setItem("");
  }
  return (
    <>
      <h3>Add item to Pantry</h3>
      <form onSubmit={handleAddItem}>
        <input
          type="text"
          placeholder="Item name"
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />
      </form>
    </>
  );
}

export default AddToPantry;
