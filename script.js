// script.js

function wait(ms, value) {
  return new Promise(resolve => {
    setTimeout(() => resolve(value), ms);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const output = document.getElementById("output");

  const arr = [1, 2, 3, 4];  // Given array

  wait(3000, arr)
    .then((numbers) => {

      return wait(1000, numbers.filter(num => num % 2 === 0));
    })
    .then((evenNumbers) => {
      output.innerText = evenNumbers.join(", ");   // Display [2, 4]

      return wait(2000, evenNumbers.map(num => num * 2));
    })
    .then((finalArray) => {
      output.innerText = finalArray.join(", ");    // Display [4, 8]
    })
    .catch((err) => {
      output.innerText = "Error: " + err;
    });
});