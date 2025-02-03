<script setup>
	import { defineProps, ref } from "vue";
	import "./Day.scss";
	const props = defineProps(["day","active","index","ActiveFunc"]);
	const active = ref(props.active);
    const id = props.index
    function Check(){
        if (!props.day.disabled){
            
            for (let key in active.value){
                if (active.value[key] ==props.index){
                    return true
                }
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
			    Check() ? 'active_day' : '',
			]"
		>
			{{ props.day.num }}
		</div>
</template>
