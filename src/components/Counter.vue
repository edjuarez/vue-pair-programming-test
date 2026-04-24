<template>
	<h1>Counter</h1>
	<p>Current Count: {{ count }}</p>
	<button @click="increment" class="increment">Increment</button>
	<button @click="decrement" class="decrement">Decrement</button>
	<button v-on:click="reset()" >Reset </button>
</template>

<script setup lang="ts">

import { ref, watch, onMounted } from 'vue';

onMounted(() => {
	const storedCount = localStorage.getItem('count');
	console.log('storedCount', storedCount);
	if(storedCount) {
		count.value = parseInt(storedCount);
	}
})

const count = ref(0);
function increment() {
	count.value++;
}
function decrement() {
	count.value--;
}
function reset() {
	count.value = 0;
}

watch(count, () => {
	localStorage.setItem('count', count.value.toString());
})

</script>

<style scoped lang="scss">
h1 {
	font-size: 2em;
	margin-bottom: 10px;
}

button {
	margin: 5px;
	padding: 10px;
	font-size: 1em;
}
</style>