<script setup>
    import "./App.scss"
	import Header from "./Header/Header.vue";
    import Table from "./Table/Table.vue";
    import TableUI from "./TableUI/TableUI.vue";
    import Pagination from "./Pagination/Pagination.vue";
    import Calendar from "./TableUI/Calendar/Calendar.vue";
    import Requests from "./Requests.js"
    import { onMounted, ref } from "vue";

    let res = ref({"data":[]})
    let schools = ref ({"data":{"list":[]}})  
    let distr = ref({"data":[]})

    onMounted(async()=>{
     res.value =  await   Requests.GetRegions()
     schools.value = await  Requests.GetSchools()
     distr.value = await  Requests.GetFederalDistricts()
     console.log(schools.value)
    })

    

</script>

<template>
	<Header />
    <main>
        <div id="container">
            <TableUI />
                <Table :rows="schools.data.list" />
            <Pagination />
        </div>
    </main>
    <Calendar/>
</template>
