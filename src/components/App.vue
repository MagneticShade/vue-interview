<script setup>
	import "./App.scss";
	import Header from "./Header/Header.vue";
	import Table from "./Table/Table.vue";
	import TableUI from "./TableUI/TableUI.vue";
	import Pagination from "./Pagination/Pagination.vue";
	import Requests from "./Requests.js";
	import { onMounted, ref, watchEffect,provide } from "vue";

	const recordsOnPage = ref(10);
	const page = ref(1);
	const districtId = ref("");
	const regionId = ref("");
	const UpdatedAt = ref("");
	// const dowload = ref("")
	const regions = ref({});
	const schools = ref({});
	const distr = ref({});
    const drop = ref(false)

	const loaded = ref(false);

    const uiLoaded = ref(false)

	provide("date",UpdatedAt)

    watchEffect(async () => {
		loaded.value = false;
		let response = await Requests.GetSchools(
			recordsOnPage,
			page,
			districtId,
			regionId,
			UpdatedAt
		);
		schools.value = response;
		loaded.value = true;
	});

	onMounted(async () => {
		regions.value = await Requests.GetRegions();
		distr.value = await Requests.GetFederalDistricts();
        uiLoaded.value = true
	});
</script>

<template>
        <div v-if="drop" id="backdrop" v-on:click="drop=false">
        
    </div>
	<Header />
	<main>
		<div id="container">
			<TableUI v-if="uiLoaded" v-model:regionsModel="regionId" v-model:districtsModel="districtId" :districts="distr" :regions="regions"/>
			<Table v-if="loaded" :rows="schools.data.list" />
			<Pagination
				v-if="loaded"
				:count="schools.data.total_count"
				:page="schools.data.page"
				:onPage="recordsOnPage"
				:pageCount="schools.data.pages_count"
				v-model:onPageModel="recordsOnPage"
				v-model:pageModelValue="page"
			/>
		</div>
	</main>


</template>
