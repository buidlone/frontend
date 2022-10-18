export function getMonthsBetween(date1: string,date2: string, roundUpFractionalMonths: boolean)
{
    var startDate = new Date(date1);
    var endDate = new Date(date2);
    var inverse = false;
    if(date1 > date2)
    {
        startDate= new Date(date2);
        endDate= new Date(date1);
        inverse=true;
    }
    var yearsDifference=endDate.getFullYear()-startDate.getFullYear();
    var monthsDifference=endDate.getMonth()-startDate.getMonth();
    var daysDifference=endDate.getDate()-startDate.getDate();
    var monthCorrection=0;
    if(roundUpFractionalMonths===true && daysDifference>0)
    {
        monthCorrection=1;
    }
    else if(roundUpFractionalMonths!==true && daysDifference<0)
    {
        monthCorrection=-1;
    }
    return (inverse?-1:1)*(yearsDifference*12+monthsDifference+monthCorrection);
};