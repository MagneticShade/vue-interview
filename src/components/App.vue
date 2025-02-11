<script setup>
	import "./App.scss";
	import Header from "./Header/Header.vue";
	import Table from "./Table/Table.vue";
	import TableUI from "./TableUI/TableUI.vue";
	import Pagination from "./Pagination/Pagination.vue";
	import Requests from "./Requests.js";
	import { onMounted, ref, watchEffect, provide, computed,watch } from "vue";

	const recordsOnPage = ref(10);
	let backupRecordsOnPage=10
	const page = ref(1);
	let backupPage = 1
	const districtId = ref("");
	let backupDistrictId=''
	const regionId = ref("");
	let backupRegionId = ''
	const UpdatedAt = ref("");
	let backupUpdatedAt=''
	const regions = ref({});
	const schools = ref({});
	const distr = ref({});
	const download_link = ref("");
	const loaded = ref(false);

	const uiLoaded = ref(false);
	const uiDisabled = ref(true);

	const linkReady = ref(false)

	provide("date", UpdatedAt);
	provide("disabled",uiDisabled)

	watch([	recordsOnPage,
			districtId,
			regionId,
			UpdatedAt],()=>{
				page.value =1
			})

	watchEffect(async function Get() {
		uiDisabled.value = true;
		loaded.value = false;
		linkReady.value = false
		let response = await Requests.GetSchools(
			recordsOnPage,
			page,
			districtId,
			regionId,
			UpdatedAt
		);
		if (typeof response === "object") {
			setTimeout(() => {
				schools.value = response;
				generateDownloadLink.value;
				loaded.value = true;
				uiDisabled.value = false;
			}, 500);
			backupRecordsOnPage=recordsOnPage.value
			backupDistrictId = districtId.value
			backupPage = page.value
			backupRegionId = regionId.value
			backupUpdatedAt = UpdatedAt.value

		} else {
			if (response == 429) {
				setTimeout(() => {
					Get();
				}, 20000);
			}
			else{
			recordsOnPage.value= backupRecordsOnPage
			districtId.value = backupDistrictId
			page.value = backupPage
			UpdatedAt.value = backupUpdatedAt
			regionId.value = backupRegionId
			}
		}
	});

	const generateDownloadLink = computed(async () => {
		linkReady.value = false
		let response = await Requests.GetSchools(
			recordsOnPage,
			page,
			districtId,
			regionId,
			UpdatedAt,
			true
		);
		if(typeof response === "object"){
		download_link.value = response.data;
		linkReady.value = true
		}
	});

	onMounted(async () => {
		regions.value = await Requests.GetRegions();
		distr.value = await Requests.GetFederalDistricts();
		uiLoaded.value = true;
	});
</script>

<template>
	<Header />
	<main>
		<div id="container">
			<TableUI
				v-if="uiLoaded"
				:uiDisabled="uiDisabled"
				v-model:regionsModel="regionId"
				v-model:districtsModel="districtId"
				:districts="distr"
				:regions="regions"
				:download-link="download_link"
				:button-disabled="linkReady"
			/>
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
