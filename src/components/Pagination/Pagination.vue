<script setup>
	import "./Pagination.scss";
	import { defineProps, defineModel, ref } from "vue";
	const model = defineModel();
	const props = defineProps(["count", "page", "onPage","pageCount"]);

	function Update(newValue) {
		model.value = newValue;
	}

	const selected = ref(props.onPage);
	let pages =[props.page]
	if (props.page<3){
		for (let i =props.page-1;i>1;i--){
			pages.unshift(i)
		}
		for (let i = props.page+1;i<4;i++){
			pages.push(i)
		}
	}
	else if(!props.page<3||props.pageCount-props.pageCount<3){
		pages.unshift(props.page -1)
		pages.push(props.page+1)
	}
	else{
		for (let i =props.page-1;i>props.pageCount-3;i--){
			pages.unshift(i)
		}
		for (let i = props.page+1;i<props.pageCount;i++){
			pages.push(i)
		}
	}
	console.log(pages)
</script>

<template>
	<div  id="pagination">
        <div v-if="props.page<=2"  id="page_select">
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p>...</p>
            <p>{{ props.pageCount }}</p>
		</div>

		<div v-if="!(props.page<=2)||((props.pageCount-props.page)<=2)"  id="page_select">
            <p>1</p>
            <p>...</p>
            <p>{{ props.page-1 }}</p>
            <p>{{ props.page }}</p>
            <p>{{ props.page+1 }}</p>
            <p>...</p>
            <p>{{ props.pageCount }}</p>
		</div>

        <div v-if="props.pageCount-props.page<=2"  id="page_select">
            <p>1</p>
            <p>...</p>
            <p>{{ props.pageCount-2 }}</p>
            <p>{{ props.pageCount-1 }}</p>
            <p>{{ props.pageCount }}</p>
		</div>


		<div id="on_page">
			<p id="description">
				{{ 1 + selected * (props.page - 1) }} -
				{{ selected * props.page }} из {{ props.count }}
			</p>

			<p>Показывать</p>

			<select
				v-model="selected"
				v-on:change="Update(selected)"
				id=""
			>
				<option :value="10">10</option>
				<option :value="20">20</option>
				<option :value="30">30</option>
			</select>
		</div>
	</div>
</template>
