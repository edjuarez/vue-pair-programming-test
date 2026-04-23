<template>
    <div class="todo-list"> 
        <h2>Todo List</h2>

        <input 
            type="text" 
            id="fname" 
            name="fname"
            placeholder="Filter items..." v-model="filterText" 
        />

        <button class="add"v-on:click="addNewItem()" >
            Add
        </button>
        <button v-on:click="reset()" >
            Reset
        </button>

        <p v-if="filteredItems.length === 0"> No results </p>

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
})

</script>

<style scoped>
.todo-list {
  margin-top: 20px;
}
input {
  margin-bottom: 10px;
  padding: 6px;
}
ul {
  list-style: none;
  padding: 0;
  width: 100px;
  margin-left: auto;
  margin-right: auto;
}
li {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #f7f7f7;
  padding: 8px;
  border-radius: 6px;
  margin-bottom: 8px;
}
.delete {
  background: #e74c3c;
  border: none;
  padding: 4px 8px;
  border-radius: 6px;
}
</style>
