<template>
        <input 
            type="text" 
            id="name"
            placeholder="Filter items..."
            v-model="localValue"
            v-on:input="emitFilter" 
        />
</template>

<script setup>
    import { ref, watch } from "vue";
    const props = defineProps({ modelValue: String });
    const emit = defineEmits(["update:modelValue"]);
    const localValue = ref(props.modelValue);

    watch(() => props.modelValue, (newValue) => {
        localValue.value = newValue;
    });

    const emitFilter = () => {
        emit("update:modelValue", localValue.value);
    }
</script>

<style>
input {
    padding: 5px 5px;
    margin-bottom: 10px;
    border: 2px solid #e0e0e0;
    border-radius: 8px;
    height: 20px;
}
</style>