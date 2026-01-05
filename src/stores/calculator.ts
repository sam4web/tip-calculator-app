import { defineStore } from "pinia";
import { computed, reactive } from "vue";

interface IInput {
  bill: number | null;
  tip: number | null;
  people: number | null;
}

interface IResult {
  tipAmount: number | null;
  total: number | null;
}

const initialInputState: IInput = {
  bill: null,
  tip: null,
  people: null,
};

const initialResultState: IResult = {
  tipAmount: null,
  total: null,
};

export const useCalculatorStore = defineStore("calculator", () => {
  const inputs = reactive<IInput>({ ...initialInputState });
  const results = reactive<IResult>({ ...initialResultState });

  const isValidInput = computed(() => {
    return Object.values(inputs).every(
      (val) => val !== null && !isNaN(val as number),
    );
  });

  function reset() {
    Object.assign(inputs, initialInputState);
    Object.assign(results, initialResultState);
  }

  function calculate() {
    const { bill, tip, people } = inputs;
    if (bill === null || tip === null || people === null) {
      Object.assign(results, initialResultState);
      return;
    }
    const sanitizedPeople = Math.floor(people);
    if (sanitizedPeople <= 0) {
      Object.assign(results, initialResultState);
      return;
    }
    const totalTip = bill * (tip / 100);
    const tipPerPerson = totalTip / sanitizedPeople;
    const totalPerPerson = (bill + totalTip) / sanitizedPeople;
    Object.assign(results, {
      tipAmount: tipPerPerson.toFixed(2),
      total: totalPerPerson.toFixed(2),
    });
  }

  return { isValidInput, results, inputs, reset, calculate };
});
