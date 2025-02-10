<script setup>
    import "./TableUI.scss"
    import "./TableUI" 
    import Calendar from "./Calendar/Calendar.vue"
    import {computed} from "vue"
    const props = defineProps(["regions","districts"])
    const regionsModel = defineModel("regionsModel")
    const districtsModel = defineModel("districtsModel")

    // const regionsValue = computed({
	// 	get(){
	// 		return props.regions
	// 	},
	// 	set(newValue){
	// 		regions.value = newValue;
	// 	}
		
	// })

	// const districtsValue = computed({
	// 	get(){
	// 		return props.districts
	// 	},
	// 	set(newValue){
	// 		districts.value = newValue
	// 	}
	// })

</script>

<template>
    <div id="tableHeader">
        <h4>Таблица учреждений</h4>
        <div id="searchDownload">
            <input  type="text" name="" id="search">
            <div id="download"> 
                <img src="../../assets/icons/Icon.svg" alt="">
                <p>Скачать</p>
            </div>
        </div>
    </div>
    
    <div id="sort">
        <select name="" id="" v-model="regionsModel" >
            <option v-bind:value="region.id" v-for="region in props.regions.data">
                {{ region.name }}
            </option>
        </select>
        <Calendar  />
        <select name="" id="" v-model="districtsModel">
                        <option v-bind:value="district.id" v-for="district in props.districts.data">
                {{ district.name }}
            </option>
        </select>
    </div>
</template>