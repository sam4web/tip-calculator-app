<script setup lang="ts">
import { ref, watch } from "vue";

const emit = defineEmits<{
    (e: "update:value", value: number | null): void;
}>();

const props = defineProps<{
    value: number | null;
    title: string;
    name: string;
    icon: string;
}>();

const input = ref(props.value);
const error = ref("");

watch(input, (newVal) => {
    error.value = "";
    if (newVal === null || isNaN(newVal as number)) {
        emit("update:value", null);
        return;
    }
    if (newVal === 0) {
        error.value = "Can't be zero";
        emit("update:value", null);
        return;
    }
    emit("update:value", Number(newVal));
});

watch(
    () => props.value,
    (newVal) => {
        input.value = newVal;
    },
);
</script>

<template>
    <div class="field-wrapper">
        <div class="label-container">
            <label :for="props.name">{{ props.title }}</label>
            <p v-if="error" class="error-message">{{ error }}</p>
        </div>
        <div class="input-container" :class="{ error: error.length }">
            <img :src="props.icon" :alt="`${props.name}-icon`" />
            <input
                type="number"
                v-model.number="input"
                :name="props.name"
                :id="props.name"
                placeholder="0"
            />
        </div>
    </div>
</template>

<style scoped>
.field-wrapper {
    width: 100%;
}

.input-container {
    box-sizing: border-box;
    background-color: var(--grey-50);
    display: flex;
    align-items: center;
    padding: 4px 16px;
    border-radius: 5px;
    border: 2px solid transparent;
    transition: border-color 100ms linear;
}

.input-container.error {
    border-color: var(--error);
}

.input-container:focus-within {
    border-color: var(--green-400) !important;
}
</style>
