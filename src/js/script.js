const resetButton = document.getElementById("reset-button");

let values = {};
const requiredInputIds = ["bill", "tip", "number-of-people"];

const inputFields = Array.from(document.getElementsByTagName("input")).filter(
  (ele) => requiredInputIds.includes(ele.getAttribute("id")),
);

Array.from(document.getElementsByClassName("tip-option")).forEach((ele) =>
  ele.addEventListener("click", (e) => {
    const value = e.target.innerHTML.trim().replace("%", "");
    handleInputChange("number-of-people", value);
  }),
);

resetButton.addEventListener("click", (e) => {
  e.target.setAttribute("disabled", true);
  inputFields.forEach((ele) => (ele.value = ""));
  values = {};
});

function isValidNumber(value) {
  if (value == null) return false;
  const strValue = String(value).trim();
  return strValue !== "" && !isNaN(strValue) && isFinite(strValue);
}

function toggleResetButton() {
  const isInputFieldsEmpty = !Array(
    values["number-of-people"],
    values["bill"],
  ).every((val) => Boolean(val));

  if (isInputFieldsEmpty) {
    resetButton.setAttribute("disabled", true);
  } else {
    resetButton.removeAttribute("disabled");
  }
}

function handleInputChange(name, value) {
  if (!requiredInputIds.includes(name)) {
    return;
  }
  if (!isValidNumber(value)) {
    values[name] = 0;
  }
  values[name] = Number(value);
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
