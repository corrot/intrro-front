import getUserLocale from "get-user-locale";

export const getDateTime = dateTimeString => {
  const dateTime = new Date(dateTimeString);
  const date = dateTime.toLocaleDateString(getUserLocale());
  const time = `${("0" + dateTime.getHours()).substr(-2)}:${(
    "0" + dateTime.getMinutes()
  ).substr(-2)}:${("0" + dateTime.getSeconds()).substr(-2)}`;
  return dateTimeString ? `${date} ${time}` : "";
};
