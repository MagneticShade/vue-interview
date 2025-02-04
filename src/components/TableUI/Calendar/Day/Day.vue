<script setup>
	import { defineProps, ref } from "vue";
	import "./Day.scss";
	const props = defineProps(["day","active","index","ActiveFunc"]);
	const active = ref(props.active);
    const id = props.index

    function CheckActive(){
        if (!props.day.disabled){
            for (let key in active.value){
                if (active.value[key] ==props.index){
                    return true
                }
            }  
        }
        return false
    }

    function CheckSemiActive(){
        if(active.value.length==2){
           if( active.value[0]<props.index&& props.index<active.value[1]){
            return true
           }
        }
        return false
    }
</script>
<template>
		<div class="day"
			v-on:mousedown="props.ActiveFunc(id)"
			v-bind:class="[
				props.day.disabled ? 'inactive_day' : '',
			    CheckActive() ? 'active_day' : '',
                CheckSemiActive()? 'semi_active_day':'',

			]"
		>
			{{ props.day.num }}
		</div>
</template>
