<script setup>
    import "./Pagination.scss"
</script>

<template>
    <div id="pagination">
        <div id="page_select">
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p>...</p>
            <p>10</p>
        </div>

        <div id="on_page">
            <p id="description">
                {{ start }} - {{ end }} из {{ count }} 
            </p>

            <p>
                Показывать
            </p>

            <select name="" id="">
                <option value="10">10</option>
            </select>
        </div>
    </div>
</template>