const getTime = () => {
  var dt = new Date();

  const month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  var hours = dt.getHours();
  var AmOrPm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;
  var minutes = dt.getMinutes();

  var localTime = "Local Time " + hours + ":" + minutes + " " + AmOrPm;
  var timeWithDayMonth =
    month[dt.getMonth()] +
    " " +
    dt.getDay() +
    ", " +
    hours +
    ":" +
    minutes +
    " " +
    AmOrPm;

  return {
    localTime,
    timeWithDayMonth,
  };
};

export { getTime };
