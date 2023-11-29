import CurrentPantry from "../ui/RealtimePantryItems/RealtimePantryItems";
import AddToPantry from "../ui/addToPantry/AddToPantry";
import styles from "./dashboard.module.css";
import PantryItems from "../ui/PantryItems/PantryItems";

// server functions
import supabase from "../data/supabase";
import SearchPantry from "../ui/SearchPantry/SearchPantry";

function Dashboard() {
  return (
    <main className="flex">
      <SearchPantry />
      <div className="flex flex-col items-center flex-1 w-full">
        <h1>Current Pantry</h1>
        <PantryItems className="w-full" />
      </div>
      <div className="basis-1/3 flex  flex-col items-center">
        <AddToPantry />
      </div>
    </main>
  );
}

export default Dashboard;
