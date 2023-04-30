export const getShortDate = (date: Date) => {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  return `${year}-${month}-${day}`;
};

export const getMilliSeconds = (date: string, time: string) => {
  const timeInMs = (+time.split(':')[0] * 60 * 60 * 1000) + (+time.split(':')[1] * 60 * 1000);
  const milliSeconds = new Date(date).getTime() + timeInMs;
  return milliSeconds;
};
