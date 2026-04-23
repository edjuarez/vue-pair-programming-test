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
    const emit = defineEmits(["update:modelValue", "add"]);
    const localValue = ref(props.modelValue);
    const emitFilter = () => {
        emit("update:modelValue", localValue.value);
    }
</script>