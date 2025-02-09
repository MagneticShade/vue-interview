<script setup>
    import "./TableUI.scss"
    import "./TableUI" 
    import Calendar from "./Calendar/Calendar.vue"
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
        <select name="" id="">

        </select>
        <Calendar  />
        <select name="" id="">
            
        </select>
    </div>
</template>