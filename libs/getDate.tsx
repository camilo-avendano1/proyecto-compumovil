//date -> dd-mm-yy
//hout -> hh:mm
export const getDate = (date: string, hour: string) => {
  const [day, month, year] = date.split("-").map(Number);
  const [hours, minutes] = hour.split(":").map(Number);

  return new Date(2000 + year, month - 1, day, hours, minutes);
};
