<script setup>
	import "./Table.scss";
	import TableRow from "../TableRow/TableRow.vue";
	import { defineProps } from "vue";
	const props = defineProps(["rows"]);
</script>

<template>
	<table>
		<thead>
			<tr>
				<th id="region">
					<div class="row_container">
						<div id="checkbox">
							<input type="checkbox" name="" id="" />
							<p>Регион</p>
						</div>
						<img src="../../assets/icons/Sort.svg" alt="" />
					</div>
				</th>
				<th id="name">
					<div class="row_container">
						<p>Название</p>
						<img src="../../assets/icons/Sort.svg" alt="" />
					</div>
				</th>
				<th id="address">
					<div class="row_container">
						<p>Адрес</p>
						<img src="../../assets/icons/Sort.svg" alt="" />
					</div>
				</th>
				<th id="eduLevel">
					<div class="row_container">
						<p>Уровень образования</p>
						<img src="../../assets/icons/Sort.svg" alt="" />
					</div>
				</th>
			</tr>
		</thead>
		<tbody>
			<TableRow
				:region="row.supplements[0].edu_org.region.name"
				:name="row.supplements[0].edu_org.full_name"
				:adress="row.supplements[0].edu_org.contact_info.post_address"
				:eduLevel="row.supplements[0].educational_programs"
				v-for="row in props.rows"
			/>
		</tbody>
	</table>
</template>
