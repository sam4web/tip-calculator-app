const tipAmountEle = document.getElementById("tip-amount");
const totalEle = document.getElementById("total");
const resetButton = document.getElementById("reset-button");
const tipOptions = document.getElementsByClassName("tip-option");

const errorElements = document.getElementsByClassName("error");
const errorDict = Array.from(errorElements).reduce((acc, el) => {
  const key = el.id.split("-")[0];
  acc[key] = el;
  return acc;
}, {});

let values = {};
let errors = {};
const requiredInputIds = ["bill", "tip", "people"];

function isValuesSet(values) {
  return requiredInputIds.every(
    (item) => values.hasOwnProperty(item) && values.item !== 0,
  );
}

const inputFields = Array.from(document.getElementsByTagName("input")).filter(
  (ele) => requiredInputIds.includes(ele.getAttribute("id")),
);

function removeActiveClassInTipOption(ele) {
  const activeTipOptions = [...document.getElementsByClassName("active")];
  if (activeTipOptions.length > 0) {
    if (ele) {
      const isOptionDoubleClick = activeTipOptions.includes(ele);
      if (isOptionDoubleClick) return;
    }
    activeTipOptions.forEach((ele) => ele.classList.remove("active"));
  }
}

Array.from(tipOptions).forEach((ele) => {
  ele.addEventListener("click", (e) => {
    removeActiveClassInTipOption(ele);
    const value = ele.innerHTML.trim().replace("%", "");
    handleInputChange("tip", value);
    ele.classList.add("active");
  });
});

resetButton.addEventListener("click", (e) => {
  e.target.setAttribute("disabled", true);
  inputFields.forEach((ele) => (ele.value = ""));
  removeActiveClassInTipOption();
  values = {};
});

function isValidNumber(value) {
  if (value == null) return false;
  const strValue = String(value).trim();
  return strValue !== "" && !isNaN(strValue) && isFinite(strValue);
}

function calculateResults(bill, tipPercent, people) {
  if (![bill, tipPercent, people].every((val) => Boolean(val)) || people <= 0) {
    console.log("empty");
    return { tipAmount: 0, total: 0 };
  }
  const totalTip = bill * (tipPercent / 100);
  const tipPerPerson = totalTip / people;
  const totalPerPerson = (bill + totalTip) / people;
  return {
    tipAmount: tipPerPerson.toFixed(2),
    total: totalPerPerson.toFixed(2),
  };
}

function checkErrors(errors) {
  const errorKeys = Object.keys(errors);
  if (errorKeys.length > 0) {
    errorKeys.forEach((error) => (errorDict[error].innerHTML = errors[error]));
  } else {
    Array.from(errorElements).forEach((ele) => (ele.innerHTML = ""));
  }
}

function toggleResetButton() {
  if (!isValuesSet(values)) resetButton.setAttribute("disabled", true);
  else resetButton.removeAttribute("disabled");
}

function handleInputChange(name, value) {
  errors = {};
  if (!requiredInputIds.includes(name)) return;
  if (name === "tip") removeActiveClassInTipOption();

  const numValue = Number(value);
  const isInvalid = !isValidNumber(value);
  values[name] = isInvalid || numValue === 0 ? 0 : numValue;
  if (isInvalid) errors[name] = "Not valid input.";
  else if (numValue === 0) errors[name] = "Can't be zero.";

  if (isValuesSet(values)) {
    const { bill, tip, people } = values;
    const { tipAmount, total } = calculateResults(bill, tip, people);
    tipAmountEle.innerHTML = `$${tipAmount}`;
    totalEle.innerHTML = `$${total}`;
  }

  checkErrors(errors);
  toggleResetButton();
}

inputFields.forEach((ele) =>
  ele.addEventListener("keyup", (e) => {
    const { name, value } = e.target;
    handleInputChange(name, value);
  }),
);

window.addEventListener("load", (e) => {
  toggleResetButton();
});
