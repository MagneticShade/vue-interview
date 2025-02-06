<script setup>
	import "./TableRow.scss"
	import { defineProps } from "vue";
	import EduPlaque from "./EduPlaque/EduPlaque.vue";
	
	const props = defineProps(["region", "name", "adress", "eduLevel"]);
</script>

<template>
	<tr>
		<td class="region">
			<div class="row_container">
				<div id="checkbox">
					<input type="checkbox" name="" id="" />
					<p>{{ props.region }}</p>
				</div>
			</div>
		</td>
		<td class="name">
			<div class="row_container">
				<p>{{ props.name }}</p>
			</div>
		</td>
		<td class="address">
			<div class="row_container">
				<p>{{ props.adress }}</p>
			</div>
		</td>
		<td class="edu_level">
			<div class="row_container">
				<EduPlaque v-if="props.eduLevel" v-for="level in props.eduLevel.names" :name="level" />
			</div>
		</td>
	</tr>
</template>
