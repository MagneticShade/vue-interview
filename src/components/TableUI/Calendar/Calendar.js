let date = new Date(),
year = date.getFullYear(),
monthN = date.getMonth();

let tmp = document.querySelector("#year")
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

GenerateDays()
export default {
    GenerateDays,
    month:months[monthN],
    year,
    days
}



