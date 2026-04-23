<template>
	<HelloWorld />
	<Counter />
  <TodoList />
</template>

<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue';
import Counter from './components/Counter.vue';
import TodoList from './components/TodoList.vue';
</script>

<style lang="scss">
#app {
  text-align: center;
  margin-top: 60px;
}
</style>