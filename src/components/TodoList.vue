<template>
    <div class="todo-list"> 
        <h2>Todo List</h2>

        <ItemFilter 
            v-model="filterText"
            v-on:add="addNewItem"
        />

        <button v-on:click="addNewItem()" class="add">Add</button>
        <button v-on:click="reset()" class="reset">Reset</button>

        <p v-if="filteredItems.length === 0">No results</p>

        <ul>
            <li v-for="item in filteredItems">
                {{ item }}
                <button class="delete" v-on:click="deleteItem(item)" > 
                    X
                </button>
            </li>
        </ul>
    </div>
</template>

<script setup>
import ItemFilter from "./ItemFilter.vue";
import { ref, computed, watch, onMounted } from "vue";

const defaulItems = [
    "Apple",
    "Orange",
    "Bread",
    "Beer",
    "Milk"
]

onMounted(() => {
    const storedItems = localStorage.getItem("items");
    if(storedItems) {
        items.value = JSON.parse(storedItems);
    }
})

const items = ref([...defaulItems]);

const filterText = ref("");

const filteredItems = computed(() => {
    return items.value.filter(item => item.toLowerCase().includes(filterText.value.toLowerCase()));
});

const addNewItem = () => {
    if(filterText.value === "") return;
    if(items.value.includes(filterText.value)) return;
    items.value.push(filterText.value);
    filterText.value = "";
}

const deleteItem = (item) => {
    items.value.splice(items.value.indexOf(item), 1);
}

const reset = () => {
    items.value = [...defaulItems];
    console.log(items.value)
    filterText.value = "";
}

watch(items, () => {
  localStorage.setItem("items", JSON.stringify(items.value))
}, { deep: true })

</script>

<style scoped>
.todo-list {
  margin-top: 20px;
}
ul {
  list-style: none;
  padding: 0;
  width: 300px;
  margin-left: auto;
  margin-right: auto;
}
li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 5px;
  margin-bottom: 10px;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  height: 20px;
}
.delete {
  background: #e74c3c;
  border: none;
  padding: 4px 8px;
  border-radius: 6px;
}
</style>
