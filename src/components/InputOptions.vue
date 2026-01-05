<template>
    <div>
        <div class="label-container">
            <label for="tip-input">Select Tip %</label>
            <p class="error" id="tip-error"></p>
        </div>
        <div class="tip-options">
            <button class="tip-option" type="button">5%</button>
            <button class="tip-option" type="button">10%</button>
            <button class="tip-option" type="button">15%</button>
            <button class="tip-option" type="button">25%</button>
            <button class="tip-option" type="button">50%</button>
            <input type="number" name="tip" id="tip" placeholder="Custom" />
        </div>
    </div>
</template>

<style scoped>
.tip-options {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 12px;
    margin-top: 14px;
    place-items: center;
    width: 100%;
}

.tip-options * {
    font-weight: bold;
    font-size: 20px;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    height: 45px;
    border-radius: 5px;
}

.tip-options button {
    text-align: center;
    padding: 8px 16px;
    height: 45px;
    color: var(--white);
    background-color: var(--green-900);
    transition:
        color 100ms linear,
        background-color 120ms linear;
}

.tip-options button:hover {
    background-color: var(--grey-200);
    color: var(--green-900);
}

.tip-options button.active {
    background-color: var(--green-400);
    color: var(--green-900);
}

.tip-options input {
    border: 2px solid transparent;
    background-color: var(--grey-50);
    transition: border-color 100ms linear;
    padding: 5px 10px;
}

.tip-options input:focus {
    border-color: var(--green-400);
}

.tip-options input::placeholder {
    font-size: 20px;
    color: var(--grey-500);
    text-align: center;
}

@media screen and (max-width: 760px) {
    .tip-options {
        grid-template-columns: repeat(2, 1fr);
    }
}
</style>
