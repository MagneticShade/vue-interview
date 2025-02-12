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

const months_alt = [
	"Января",
	"Февраля",
	"Марта",
	"Апреля",
	"Мая",
	"Июня",
	"Июля",
	"Августа",
	"Сентября",
	"Октября",
	"Ноября",
	"Декабря",
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

    for (let i = 1;days.length<42;i++){
        days.push({"num":i,"disabled":true})
        console.log("aaa")
    }
}

function GetMonth(){
    return months[monthN]
}

function GetMonthAlt(){
    return  months_alt[monthN]
}

function GetDays(){
    return days
}

function GetYear(){
    return year
}

function ForwardMonth(){
    
    monthN++
    if (monthN>11){
        monthN =0
        year++
    }
    GenerateDays()
}

function BacwardMonth(){
    monthN--
    if (monthN<0){
        monthN =11
        year--
    }
    GenerateDays()
}

GenerateDays();

function GetMonthWithZero(){
    if(monthN+1<10){
        return `0${monthN+1}`
    }
    else{
        return monthN
    }
}

export default {
    GenerateDays,
    ForwardMonth,
    BacwardMonth,
    GetMonth,
    GetMonthAlt,
    GetYear,
    GetDays,
    GetMonthWithZero
}



