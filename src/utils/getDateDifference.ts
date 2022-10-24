export function dateDiff(date1: string, date2: string) {

  var startDate = new Date(date1)
  var endDate = new Date(date2)

  if (startDate > endDate) {

        var dtmp = endDate;
        endDate = startDate;
        startDate = dtmp
  }
  var startYear = startDate.getFullYear();
  var startMonth = startDate.getMonth();
  var startDay = startDate.getDate();

  var endYear = endDate.getFullYear();
  var endMonth = endDate.getMonth();
  var endDay = endDate.getDate();

  // Calculating February based on end year as it might be a leep year which might influence the number of days.
  var february = (endYear % 4 == 0 && endYear % 100 != 0) || endYear % 400 == 0 ? 29 : 28;
  var daysOfMonth = [31, february, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  var startDateNotPassedInEndYear = (endMonth < startMonth) || endMonth == startMonth && endDay < startDay;
  var years = endYear - startYear - (startDateNotPassedInEndYear ? 1 : 0);

  var months = (12 + endMonth - startMonth - (endDay < startDay ? 1 : 0)) % 12;

  // (12 + ...) % 12 makes sure index is always between 0 and 11
  var days = startDay <= endDay ? endDay - startDay : daysOfMonth[(12 + endMonth - 1) % 12] - startDay + endDay;

  var rounded_months = days >= 15 ? months + 1 : months;
 
  var years_and_months = years + Number((rounded_months/12).toFixed(1))

  return {
    years: years,
    months: months,
    days: days,
    rounded_months: rounded_months,
    years_and_months: years_and_months
  };
}