import moment from "moment";


type DateFormat = 'time' | 'date' | 'date-time' | 'full-time' | 'date-month-year';


const parseDate = (date: number | string, param: DateFormat) => {
  const getZoneRange = moment().parseZone().utcOffset();

  const d = moment(date).subtract(getZoneRange, 'minutes');

  if (param === 'date-time') {
    return d.format('DD.MM.YYYY HH:mm');
  }
  if (param === 'full-time') {
    return d.format('HH:mm:ss');
  }
  if (param === 'date-month-year') {
    return d.format('D MMM YYYY')
  }
  return param === 'time'
    ? d.format('HH:mm')
    : d.format('DD.MM.YYYY'); // date
}

export default parseDate;
