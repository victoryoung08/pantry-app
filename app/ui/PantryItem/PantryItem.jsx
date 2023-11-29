import RemoveItemBtn from "../RemoveItemBtn/RemoveItemBtn";
import styles from "./PantryItem.module.css";
import convertDate from "@/app/services/dateConverter";
import deleteRow from "@/app/data/deleteRow";
export default function PantryItem({ item }) {
  const formattedDate = convertDate(item.created_at);
  return (
    // <div className="w-full border-[1px] p-2 rounded-lg flex justify-between items-center  hover: cursor-pointer hover:transition-[1000ms] hover:bg-violet-300 hover:text-white">
    //   <span>{item.name}</span>
    //   <span className="text-xs">{formattedDate}</span>
    // </div>
    <>
      <span>{item.name}</span>
      <RemoveItemBtn handleRemove={() => deleteRow("pantry", item)} />
    </>
  );
}
