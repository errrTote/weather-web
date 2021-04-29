const weeksDay = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado",];
const months = ["ENE", "FEB", "MAR", "ABR", "MAY", "JUN", "JUL", "AGO", "SEP", "OCT", "NOV", "DIC"];
export const getReadableDate = (format = "DD/MM/YYYY") => {
  const baseDate = new Date();
  const day = baseDate.getDate();
  const monthDigit = baseDate.getMonth() + 1;
  const month = monthDigit < 10 ? `0${monthDigit}` : monthDigit;
  const year = baseDate.getFullYear();
  let date = ""
  date = format.replace(/(d|D)+/gi, day);
  date = date.replace(/(m|M)+/gi, month);
  date = date.replace(/(y|Y)+/gi, year);
  return date;
}

export const getMoment = () => {
  const base = new Date();
  const hours = base.getHours() < 10 ? `0${base.getHours()}` : base.getHours();
  const minutes = base.getMinutes() < 10 ? `0${base.getMinutes()}` : base.getMinutes();
  const day = weeksDay[base.getDay()];
  const moment = `${hours}:${minutes} ${day}`;
  return moment;
}

export const getWeek = () => {
  const base = new Date();
  base.setDate(base.getDate() + 1)
  const week = [];
  for (let i = 0; i < 5; i++) {
    week.push({
      day: weeksDay[base.getDay()],
      date: base.getDate(),
      month: months[base.getMonth()]
    });
    base.setDate(base.getDate() + 1)
  }
  return week;
}
