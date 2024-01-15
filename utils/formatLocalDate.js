export const formatLocalDate = (inputDate) => {
  const formattedDate = new Date(inputDate).toLocaleDateString(
    "en-US",
    {
      month: "2-digit",
      day: "2-digit",
      year: "2-digit",
    }
  );
  return formattedDate;
};
