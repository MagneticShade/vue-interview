<script setup>
    import "./TableUI.scss"
    import Calendar from "./Calendar/Calendar.vue"
    const props = defineProps(["regions","districts","downloadlink","uiDisabled","linkready"])
    const regionsModel = defineModel("regionsModel")
    const districtsModel = defineModel("districtsModel")
    
    
    async function Download(){
		fetch(props.downloadlink).then((response)=>{
			return response.blob()
		}).then((file)=>{
            let tUrl = URL.createObjectURL(file);
            const tmp1 = document.createElement("a");
            tmp1.href = tUrl;
            tmp1.download = `downloaded_file.csv`;
            document.body.appendChild(tmp1);
            tmp1.click();
            URL.revokeObjectURL(tUrl);
            tmp1.remove();
		})
	}

</script>

<template>
    <div id="tableHeader">
        <h4>Таблица учреждений</h4>
            <div id="download" :class="props.linkready? '':'main_button_disabled'" v-on:click="props.linkready? Download:''"> 
                <img src="../../assets/icons/Icon.svg" alt="">
                <p>Скачать</p>
        </div>
    </div>
    
    <div id="sort">
        <select :disabled="props.uiDisabled" name="" id="" v-model="regionsModel" >
            <option value="">Все регионы</option>
            <option v-bind:value="region.id" v-for="region in props.regions.data">
                {{ region.name }}
            </option>
        </select>
        <Calendar  />
        <select :disabled="props.uiDisabled" name="" id="" v-model="districtsModel" >
            <option value="">Все федеральные округи</option>
                        <option v-bind:value="district.id" v-for="district in props.districts.data">
                {{ district.name }}
            </option>
        </select>
    </div>
</template>