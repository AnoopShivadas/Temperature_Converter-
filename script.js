// script.js

document.getElementById("convert-btn").addEventListener("click", () => {
  const tempInput = parseFloat(document.getElementById("temp-input").value);
  const unit = document.getElementById("unit-select").value;
  const output1 = document.getElementById("output-1");
  const output2 = document.getElementById("output-2");

  if (isNaN(tempInput)) {
    output1.textContent = "Please enter a valid number.";
    output2.textContent = "";
    return;
  }

  let val1, val2;
  let label1, label2;

  switch (unit) {
    case "celsius":
      val1 = (tempInput * 9) / 5 + 32;
      val2 = tempInput + 273.15;
      label1 = `${val1.toFixed(2)} °F`;
      label2 = `${val2.toFixed(2)} K`;
      break;
    case "fahrenheit":
      val1 = ((tempInput - 32) * 5) / 9;
      val2 = ((tempInput - 32) * 5) / 9 + 273.15;
      label1 = `${val1.toFixed(2)} °C`;
      label2 = `${val2.toFixed(2)} K`;
      break;
    case "kelvin":
      val1 = tempInput - 273.15;
      val2 = ((tempInput - 273.15) * 9) / 5 + 32;
      label1 = `${val1.toFixed(2)} °C`;
      label2 = `${val2.toFixed(2)} °F`;
      break;
  }

  output1.textContent = label1;
  output2.textContent = label2;
});

document.getElementById("clear-btn").addEventListener("click", () => {
  document.getElementById("temp-input").value = "";
  document.getElementById("unit-select").value = "celsius";
  document.getElementById("output-1").textContent = "";
  document.getElementById("output-2").textContent = "";
});
