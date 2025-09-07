document.getElementById("convertBtn").addEventListener("click", () => 
  {
  const tempInput = document.getElementById("temperatureInput").value;
  const fromUnit = document.getElementById("fromUnit").value;
  const toUnit = document.getElementById("toUnit").value;
  const resultDiv = document.getElementById("result");


  if (tempInput === "" || isNaN(tempInput)) 
  {
    resultDiv.textContent = "⚠ Please enter a valid number!";
    return;
  }

  const temp = parseFloat(tempInput);
  let celsius, fahrenheit, kelvin, converted;

  
  if (fromUnit === "C") 
  {
    celsius = temp;
  } 
  else if (fromUnit === "F") 
  {
    celsius = (temp - 32) * 5/9;
  } 
  else if (fromUnit === "K") 
  {
    celsius = temp - 273.15;
  }

  
  if (toUnit === "C") 
  {
    converted = celsius;
  } 
  else if (toUnit === "F") 
  {
    converted = (celsius * 9/5) + 32;
  } 
  else if (toUnit === "K") 
  {
    converted = celsius + 273.15;
  }

  resultDiv.innerHTML = `
     ${temp} ${fromUnit} = <strong>${converted.toFixed(2)} ${toUnit}</strong>
  `;
});
