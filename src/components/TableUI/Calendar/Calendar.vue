<script setup>
	import "./Calendar.scss";
	import Calendar from "./Calendar.js";
	import { onMounted, ref, useTemplateRef } from "vue";
	import Day from "./Day/Day.vue";

	const days = ref(Calendar.days);
	const month = ref(Calendar.month);
	const year = ref(Calendar.year);
	const active = ref([]);

	Calendar.GenerateDays();

	const Activate = (index) => {
		console.log(active.value);
		if (active.value.length < 2) {
			active.value.push(index);
		} else {
			active.value.splice(0);
		}
	};
</script>

<template>
	<div id="date_input">
		<p>Выберите дату...</p>
		<img src="../../../assets/icons/calendar.svg" alt="" />
	</div>
	<div id="calendar">
		<div id="prompt">
			<p>Выберите дату</p>
		</div>
		<div id="month_select">
			<div id="backward">
				<img src="../../../assets/icons/forwardBackward.svg" alt="" />
			</div>
			<p>{{ month }} {{ year }}</p>
			<div id="forward">
				<img src="../../../assets/icons/forwardBackward.svg" alt="" />
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
			<div id="close"><p>Отмена</p></div>
			<div id="confirm"><p>Сохранить</p></div>
		</div>
	</div>
</template>
