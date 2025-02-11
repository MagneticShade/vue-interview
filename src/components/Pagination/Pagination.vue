<script setup>
	import "./Pagination.scss";
	import { defineProps, defineModel, computed, defineEmits } from "vue";
	const onPageModel = defineModel("onPageModel");
	const emit = defineEmits(["update:pageModelValue"]);
	const props = defineProps(["count", "page", "onPage", "pageCount"]);
	const onPageValue = computed({
		get() {
			return props.onPage;
		},
		set(newValue) {
			onPageModel.value = newValue;
		},
	});

	const pageModelValue = computed({
		get() {
			return props.page;
		},
		set(newValue) {
			emit("update:pageModelValue", newValue);
		},
	});

	onPageModel.value = props.onPage;
	let pages = [pageModelValue.value];
	if(props.count>1){
	if (pageModelValue.value < 3) {
		for (let i = pageModelValue.value - 1; i >= 1; i--) {
			pages.unshift(i);
		}
		for (let i = pageModelValue.value + 1; i < 4; i++) {
			pages.push(i);
		}
		pages.push("...");
		pages.push(props.pageCount);
	} else if (
		!(pageModelValue.value < 3) &&
		!(props.pageCount - pageModelValue.value < 3)
	) {
		pages.unshift(pageModelValue.value - 1);
		pages.push(pageModelValue.value + 1);
		pages.unshift("...");
		pages.unshift(1);
		pages.push("...");
		pages.push(props.pageCount);
	} else {
		for (let i = pageModelValue.value - 1; i > props.pageCount - 3; i--) {
			pages.unshift(i);
		}
		for (let i = pageModelValue.value + 1; i < props.pageCount; i++) {
			pages.push(i);
		}

		pages.unshift("...");
		pages.unshift(1);
	}
}
</script>

<template>
	<div id="pagination">
		<div id="page_select">
			<div id="page_backward" v-on:click="pageModelValue-1>0?pageModelValue=pageModelValue-1:''">
				<img src="../../assets/icons/backward.svg" alt="">
			</div>
			<div id="pages_holder">
			<div  v-for="page in pages" v-on:click="page=='...'?'':pageModelValue = page" v-bind:class="[page==pageModelValue? 'selected':'',page=='...'?'':'page_container']">
				<p>{{ page }}</p>
				
			</div>
			</div>
			<div id="page_forward" v-on:click="pageModelValue+1<props.count?pageModelValue=pageModelValue+1:''">
				<img src="../../assets/icons/forward.svg" alt="">
			</div>
		</div>

		<div id="on_page">
			<p id="description">
				{{ 1 + onPageValue * (props.page - 1) }} -
				{{ onPageValue * props.page }} из {{ props.count }}
			</p>
			<div id="on_page_selector">
				<p>Показывать</p>

				<select v-model="onPageModel" id="">
					<option :value="10">10</option>
					<option :value="20">20</option>
					<option :value="30">30</option>
				</select>
			</div>
		</div>
	</div>
</template>
