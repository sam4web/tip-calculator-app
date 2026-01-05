<script setup lang="ts">
import { toRaw, watch } from "vue";
import { useCalculatorStore } from "../stores/calculator";
import InputField from "./InputField.vue";
import InputOptions from "./InputOptions.vue";

const store = useCalculatorStore();
watch(
    () => store.values,
    (newValues) => {
        console.log("Values changed:", toRaw(newValues));
    },
    { deep: true, immediate: true },
);
</script>

<template>
    <div class="input-section">
        <InputField
            @update:value="(val) => (store.values.bill = val)"
            :value="store.values.bill"
            title="Bill"
            name="bill"
            icon="/images/icon-dollar.svg"
        />
        <InputOptions />
        <InputField
            :value="store.values.people"
            title="Number of people"
            name="people"
            icon="/images/icon-person.svg"
        />
    </div>
</template>

<style>
.label-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 15px;
    font-weight: bold;
    margin-bottom: 7px;
    gap: 2px;
}

.label-container label {
    color: var(--grey-500);
}

.label-container .error-message {
    color: var(--error);
}

.input-section {
    padding: 15px;
    padding-bottom: 23px;
}

.input-section > div:not(:last-child) {
    margin-bottom: 38px;
}

@media screen and (max-width: 840px) {
    .input-section {
        padding: 10px;
        padding-bottom: 18px;
    }
}
</style>
