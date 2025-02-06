<script setup>
	import "./Table.scss";
	import TableRow from "../TableRow/TableRow.vue";
	import { defineProps } from "vue";
	const props = defineProps(["rows"]);


	let programms = []
	for (let key  in props.rows){
		programms.push({"names":[]})
		if(props.rows[key].supplements.length>0 && "educational_programs" in props.rows[key].supplements[0]){
			
			for( let level in props.rows[key].supplements[0].educational_programs){
				let tmp = props.rows[key].supplements[0].educational_programs[level].edu_level.name
				if ((! programms[programms.length-1].names.includes(tmp)) ){
				programms[programms.length-1].names.push(tmp)
				}
			}
		}
	}
	console.log(programms)
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
				v-for="row in props.rows"
				:region="row.edu_org.region.name"
				:name="row.edu_org.full_name"
				:adress="row.edu_org.contact_info.post_address"
				:eduLevel="programms[props.rows.indexOf(row)]"
				
			/>
		</tbody>
	</table>
</template>
