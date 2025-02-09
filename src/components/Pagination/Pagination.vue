<script setup>
	import "./Pagination.scss";
	import { defineProps, defineModel, computed,defineEmits } from "vue";
	const onPageModel = defineModel("onPageModel");
	const emit = defineEmits(['update:pageModelValue'])
	const props = defineProps(["count", "page", "onPage","pageCount"]); 
	const onPageValue = computed({
		get(){
			return props.onPage
		},
		set(newValue){
			onPageModel.value = newValue;
		}
		
	})

	const pageModelValue = computed({
		get(){
			return props.page
		},
		set(newValue){
			emit("update:pageModelValue",newValue)
		}
	})


	onPageModel.value = props.onPage
	let pages =[pageModelValue.value]
	if (pageModelValue.value<3){
		for (let i =pageModelValue.value-1;i>=1;i--){
			pages.unshift(i)
		}
		for (let i = pageModelValue.value+1;i<4;i++){
			pages.push(i)
		}
		pages.push("...")
		pages.push(props.pageCount)
	}
	else if(!(pageModelValue.value<3)&&!(props.pageCount-pageModelValue.value<3)){
		pages.unshift(pageModelValue.value -1)
		pages.push(pageModelValue.value+1)
		pages.unshift("...")
		pages.unshift(1)
		pages.push("...")
		pages.push(props.pageCount)
	}
	else{
		for (let i =pageModelValue.value-1;i>props.pageCount-3;i--){
			pages.unshift(i)
		}
		for (let i = pageModelValue.value+1;i<props.pageCount;i++){
			pages.push(i)
		}

		pages.unshift("...")
		pages.unshift(1)
	}
</script>

<template>
	<div  id="pagination">
        <div id="page_select">
            <p v-for="page in pages" v-on:click="pageModelValue=page">
				{{page}}
			</p>
		</div>


		<div id="on_page">
			<p id="description">
				{{ 1 + onPageValue * (props.page - 1) }} -
				{{ onPageValue * props.page }} из {{ props.count }}
			</p>

			<p>Показывать</p>

			<select
				v-model="onPageModel"
				id=""
			>
				<option :value="10">10</option>
				<option :value="20">20</option>
				<option :value="30">30</option>
			</select>
		</div>
	</div>
</template>
