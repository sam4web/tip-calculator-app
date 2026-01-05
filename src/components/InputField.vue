<script setup lang="ts">
const props = defineProps({
    title: { type: String, required: true },
    name: { type: String, required: true },
    icon: { type: String, required: true },
});
</script>

<template>
    <div class="field-wrapper">
        <div class="label-container">
            <label :for="props.name">{{ props.title }}</label>
            <p class="error"></p>
        </div>
        <div class="input-container">
            <img :src="props.icon" :alt="`${props.name}-icon`" />
            <input
                type="number"
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

.input-container:focus-within {
    border-color: var(--green-400);
}
</style>
