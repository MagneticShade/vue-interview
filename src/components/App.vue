<script setup>
    import "./App.scss"
	import Header from "./Header/Header.vue";
    import Table from "./Table/Table.vue";
    import TableUI from "./TableUI/TableUI.vue";
    import Pagination from "./Pagination/Pagination.vue";
</script>

<template>
	<Header />
    <main>
        <div id="container">
            <TableUI />
            <Table />
            <Pagination />
        </div>
    </main>

</template>
