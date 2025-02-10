<script setup>
	import "./Calendar.scss";
	import Calendar from "./Calendar.js";
	import { ref,computed,inject } from "vue";
	import Day from "./Day/Day.vue";


	const days = ref(Calendar.GetDays());
	const month = ref(Calendar.GetMonth()) ;
	const year = ref(Calendar.GetYear())
	const active = ref([]);
	const open = ref(false)
	const get_days = computed(()=>days.value = Calendar.GetDays())
	const get_month = computed(()=>month.value = Calendar.GetMonth())
	const get_year = computed(()=>year.value = Calendar.GetYear())
	const date = inject("date")

	const Activate = (index) => {
		if (active.value.length < 2) {
			active.value.push(index);
		} else {
			active.value.splice(0);
		}

		if (active.value.length == 2 && active.value[0] > active.value[1]) {
			let tmp = active.value[0];
			active.value[0] = active.value[1];
			active.value[1] = tmp
		}
	};
	function Update(){
		Calendar.ChangeMonth()
		get_days.value
		get_month.value
		get_year.value
	}
	
</script>

<template>
	<div id="input_holder">
	<div id="date_input" v-on:mousedown="open=true">
		<p>Выберите дату...</p>
		<img src="../../../assets/icons/calendar.svg" alt="" />
	</div>
	<div id="calendar" v-if="open">
		<div id="prompt">
			<p>Выберите дату</p>
		</div>
		<div id="month_select">
			<div id="backward">
				<img src="../../../assets/icons/backward.svg" alt="" />
			</div>
			<p>{{ month }} {{ year }}</p>
			<div v-on:click="Update" id="forward">
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
			<div id="close" v-on:mousedown="open=false"><p>Отмена</p></div>
			<div id="confirm" v-on:mousedown="open=false"><p>Сохранить</p></div>
		</div>
	</div>
</div>
</template>
