const resetButton = document.getElementById("reset-button");

let values = {};
const requiredInputIds = ["bill", "tip", "number-of-people"];

const inputFields = Array.from(document.getElementsByTagName("input")).filter(
  (ele) => requiredInputIds.includes(ele.getAttribute("id")),
);

Array.from(document.getElementsByClassName("tip-option")).forEach((ele) => {
  ele.addEventListener("click", (e) => {
    const activeTipOptions = [...document.getElementsByClassName("active")];
    if (activeTipOptions.length > 0) {
      const isOptionDoubleClick = activeTipOptions.includes(ele);
      if (isOptionDoubleClick) {
        return;
      }
      activeTipOptions.forEach((ele) => ele.classList.remove("active"));
    }
    const value = ele.innerHTML.trim().replace("%", "");
    handleInputChange("number-of-people", value);
    ele.classList.add("active");
  });
});

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
  const isInputFieldsEmpty = !inputFields.every((ele) => Boolean(ele.value));
  if (isInputFieldsEmpty) resetButton.setAttribute("disabled", true);
  else resetButton.removeAttribute("disabled");
}

function handleInputChange(name, value) {
  if (!requiredInputIds.includes(name)) return;

  if (!isValidNumber(value)) values[name] = 0;
  else values[name] = Number(value);

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
