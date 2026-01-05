<script setup lang="ts">
import InputSection from "./components/InputSection.vue";
import Logo from "./components/Logo.vue";
import ResultSection from "./components/ResultSection.vue";
</script>

<template>
    <main>
        <Logo />
        <div class="calculator-container">
            <InputSection />
            <ResultSection />
        </div>
    </main>
</template>

<style>
*,
*::before,
*::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    position: relative;
    font-family: "Space Mono", monospace;
    font-weight: 400;
    background-color: var(--grey-200);
}

main {
    min-height: 100vh;
    width: 100%;
    padding: 40px 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

img {
    max-width: 100%;
    height: auto;
}

input {
    font: inherit;
    outline: none;
    background-color: transparent;
    text-align: right;
    flex: 1;
    width: 100%;
    min-width: 0;
    font-weight: bold;
    font-size: 24px !important;
    border: none;
    color: var(--green-900);
}

input:focus::placeholder {
    color: transparent !important;
}

input::placeholder {
    color: var(--grey-400);
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

input[type="number"] {
    -moz-appearance: textfield;
}

button {
    border-radius: 5px;
    border: none;
    font: inherit;
}

button:hover {
    cursor: pointer;
}

.calculator-container {
    padding: 30px 26px;
    width: 100%;
    max-width: 910px;
    margin-top: 48px;
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(2, 1fr);
    background-color: var(--white);
    border-radius: 18px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
}

@media screen and (max-width: 840px) {
    .calculator-container {
        margin-top: 26px;
        padding: 26px 18px;
        gap: 10px;
    }
}

@media screen and (max-width: 760px) {
    .calculator-container {
        max-width: 460px;
        grid-template-columns: 1fr;
        gap: 20px;
    }

    main {
        padding: 40px 0;
        padding-bottom: 20px;
    }
}
</style>
