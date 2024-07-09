const formatDate = (date: Date) => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
  };
  return new Intl.DateTimeFormat("en-GB", options).format(date);
};

const isToday = (date: Date) => {
  const today = new Date();

  return (
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
  );
};

const DateTime = ({ date }: { date: Date }) => {
  if (isToday(date)) {
    return <span>Present</span>;
  }
  return <time dateTime={date.toISOString()}>{formatDate(date)}</time>;
};

export default DateTime;
