<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useCalculatorStore } from "../stores/calculator";

const store = useCalculatorStore();
const { results, reset } = store;
const { isValidInput } = storeToRefs(store);
</script>

<template>
    <div class="result-section">
        <div class="result-item-container">
            <div class="result-item">
                <div class="result-label">
                    <p>Tip Amount</p>
                    <p>/ person</p>
                </div>
                <p id="tip-amount" class="result-value">
                    <template
                        v-if="results.tipAmount || results.tipAmount === 0"
                    >
                        ${{ results.tipAmount }}
                    </template>
                    <template v-else>$0.00</template>
                </p>
            </div>
            <div class="result-item">
                <div class="result-label">
                    <p>Total</p>
                    <p>/ person</p>
                </div>
                <p id="total" class="result-value">
                    <template v-if="results.total || results.total === 0">
                        ${{ results.total }}
                    </template>
                    <template v-else>$0.00</template>
                </p>
            </div>
        </div>
        <button
            id="reset-button"
            :disabled="!isValidInput"
            v-on:click="reset"
            type="button"
        >
            Reset
        </button>
    </div>
</template>

<style scoped>
.result-section {
    background-color: var(--green-900);
    border-radius: 14px;
    display: flex;
    padding: 40px 36px;
    flex-direction: column;
    justify-content: space-between;
}

.result-section .result-label p {
    font-weight: bold;
}

.result-section .result-label p:nth-of-type(1) {
    font-size: 16px;
    color: var(--white);
    margin-bottom: 0px;
}

.result-section .result-label p:nth-of-type(2) {
    font-size: 14px;
    color: var(--grey-400);
}

.result-section .result-value {
    color: var(--green-400);
}

.result-section .result-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}

.result-section .result-item:not(:last-child) {
    margin-bottom: 20px;
}

.result-section .result-value {
    font-size: 40px;
    font-weight: 700;
}

.result-section button {
    text-transform: uppercase;
    margin-top: auto;
    padding: 10px 15px;
    font-weight: bold;
    font-size: 18px;
    background-color: var(--green-400);
    color: var(--green-900);
    transition: background-color 100ms linear;
}

.result-section button:hover {
    background-color: var(--grey-200);
}

.result-section button:disabled {
    opacity: 25%;
    pointer-events: none;
}

@media screen and (max-width: 840px) {
    .result-section {
        padding: 30px 26px;
    }
}
</style>
