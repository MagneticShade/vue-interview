<script setup>
	import "./Calendar.scss";
	import Calendar from "./Calendar.js";
	import { ref,computed,inject,watch } from "vue";
	import Day from "./Day/Day.vue";


	const days = ref(Calendar.GetDays());
	const month = ref(Calendar.GetMonth()) ;
	const year = ref(Calendar.GetYear())
	const active = ref("");
	const open = ref(false)
	const get_days = computed(()=>days.value = Calendar.GetDays())
	const get_month = computed(()=>month.value = Calendar.GetMonth())
	const get_year = computed(()=>year.value = Calendar.GetYear())
	const date = inject("date")
	const disabled = inject("disabled")

	const Activate = (index) => {
		active.value = index
	};

	function Save(){
		let tmp
		if(days.value[active.value].num<10){
			tmp= `0${days.value[active.value].num}`
		}
		else{
			tmp  = days.value[active.value].num
		}
		date.value=`${year.value}-${Calendar.GetMonthWithZero()}-${tmp}`
		open.value=false
	}

	function Displaydate(){
		let tmp
		if(days.value[active.value].num<10){
			tmp= `0${days.value[active.value].num}`
		}
		else{
			tmp  = days.value[active.value].num
		}
		return `${tmp}  ${Calendar.GetMonthAlt()} ${year.value}`
	}

	
	function Close(){
		open.value = false
		active.value = ''
		date.value = ''
	}

	function CalendarForward(){
		Calendar.ForwardMonth()
		Update()
	}
	function CalendarBackward(){
		Calendar.BacwardMonth()
		Update()
	}
	function Update(){
		get_days.value
		get_month.value
		get_year.value
		active.value=''
	}

	watch(disabled,()=>{
		if(disabled.value==true){
			open.value=false
			active.value = ''
		}
	})
	
</script>

<template>
	<div id="input_holder">
	<div id="date_input":class="disabled? 'disabled_input':''" v-on:mousedown="disabled? '':open=true">
		<p>{{date? Displaydate():"Выберите дату..."}}</p>
		<img src="../../../assets/icons/calendar.svg" alt="" />
	</div>
	<div id="calendar" v-if="open">
		<div id="prompt">
			<p>Выберите дату</p>
		</div>
		<div id="month_select">
			<div v-on:click="CalendarBackward" id="backward">
				<img src="../../../assets/icons/backward.svg" alt="" />
			</div>
			<p id="selected_date">{{ month }} {{ year }}</p>
			<div v-on:click="CalendarForward" id="forward">
				<img src="../../../assets/icons/forward.svg" alt="" />
			</div>
		</div>
		<div id="week_days">
			<p>ПН</p>
			<p>ВТ</p>
			<p>СР</p>
			<p>ЧТ</p>
			<p>ПТ</p>
			<p>СБ</p>
			<p>ВС</p>
		</div>
		<div id="days">
			<Day
				:day="day"
				:index="index"
				:-active-func="Activate"
				:active="active"
				v-for="(day, index) in days"
				ref="days_ref"
			/>
		</div>
		<div id="buttons">
			<div id="close" v-on:mousedown="Close"><p>Отмена</p></div>
			<div id="confirm" v-on:mousedown="Save"><p>Сохранить</p></div>
		</div>
	</div>
</div>
</template>
