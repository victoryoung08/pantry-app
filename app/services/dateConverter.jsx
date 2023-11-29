export default function convertDate(dateInput) {
  const date = new Date(dateInput);

  // Extract day and month from Date obj
  const day = date.getDay();
  const month = date.toLocaleString("default", { month: "short" });

  // Combine day and month
  const formattedDate = `${day} ${month}`;
  return formattedDate;
}
