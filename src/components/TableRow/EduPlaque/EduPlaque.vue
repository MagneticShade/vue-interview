<script setup>
	import "./EduPlaque.scss";
    import { defineProps } from "vue";
    const props = defineProps(["name"])
</script>

<template>
	<div class="edu_plaque">
        <p>{{ props.name }}</p>
    </div>
</template>
