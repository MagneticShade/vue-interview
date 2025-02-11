<script setup>
	import { defineProps, ref } from "vue";
	import "./Day.scss";
	const props = defineProps(["day","active","index","ActiveFunc"]);
    

    function CheckActive(){
        if (!props.day.disabled){
                return (props.active ==props.index)
            }  
        return false
    }

</script>
<template>
		<div class="day"
			v-on:mousedown="props.ActiveFunc(props.index)"
			v-bind:class="[
				props.day.disabled ? 'inactive_day' : '',
			    CheckActive() ? 'active_day' : '',
			]"
		>
			<p>{{ props.day.num }} </p>
		</div>
</template>
