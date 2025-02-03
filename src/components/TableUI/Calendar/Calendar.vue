<script setup>
	import "./Calendar.scss";
    import Calendar from "./Calendar.js"
    const month = ref(Calendar.month)
	// const days = ref(Calendar.days)
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
                <img src="../../../assets/icons/forwardBackward.svg" alt="">
            </div>
			<p>{{ month }}</p>
			<div id="forward">
                <img src="../../../assets/icons/forwardBackward.svg" alt="">
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
			<div v-for="day in days">
				{{ day }}
			</div>
		</div>
		<div id="buttons">
			<div id="close"><p>Отмена</p></div>
			<div id="confirm"><p>Сохранить</p></div>
		</div>
	</div>
</template>
