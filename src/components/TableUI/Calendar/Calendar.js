let date = new Date(),
year = date.getFullYear(),
monthN = date.getMonth();

const months = [
	"Январь",
	"Февраль",
	"Март",
	"Апрель",
	"Май",
	"Июнь",
	"Июль",
	"Август",
	"Сентябрь",
	"Октябрь",
	"Ноябрь",
	"Декабрь",
];

let days = []

function GenerateDays(){
    days=[]
    let prevMonthStart = new Date(year,monthN,0).getDay();
    let prevMonthEnd = new Date(year,monthN,0).getDate()
    let curMonthEnd = new Date(year,monthN+1,0).getDate();
    let curMonthLastWeekDay = new Date(year,monthN+1,curMonthEnd).getDay();

    for(let i = prevMonthStart; i>0;i--){
        days.push({"num":prevMonthEnd-i+1,"disabled":true})
    }

    for (let i = 1; i<=curMonthEnd;i++){
        days.push({"num":i,"disabled":false})
    }

    for (let i = curMonthLastWeekDay;i<=6;i++){
        days.push({"num":i-curMonthLastWeekDay+1,"disabled":true})
    }
}

function GetMonth(){
    return months[monthN]
}

function GetDays(){
    return days
}

function GetYear(){
    return year
}

function ChangeMonth(){
    
    monthN++
    if (monthN>11){
        monthN =0
        year++
    }
    GenerateDays()
}

GenerateDays();

export default {
    GenerateDays,
    ChangeMonth,
    GetMonth,
    GetYear,
    GetDays,
}



