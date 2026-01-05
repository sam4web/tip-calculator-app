import { defineStore } from "pinia";
import { reactive } from "vue";

interface IValueState {
  bill: number | null;
  tip: number | null;
  people: number | null;
}

export const useCalculatorStore = defineStore("calculator", () => {
  const values = reactive<IValueState>({
    bill: null,
    tip: null,
    people: null,
  });

  return { values };
});
