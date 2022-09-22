module.exports = (_date) => {
  const date = _date ? new Date(_date) : new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();
  const week = date.getDay();
  const timestamp = date.getTime();

  const formattedDate = `${date.getFullYear()}-${
    date.getMonth() + 1
  }-${date.getDate()}`;
  const time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  const dateTime = `${date} ${time}`;

  return {
    year,
    month,
    day,
    hour,
    minute,
    second,
    week,
    formattedDate,
    time,
    dateTime,
    timestamp,
    date,
  };
};
