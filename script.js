//your JS code here. If required.
// your JS code here. If required.

const output = document.getElementById("output");

// Given array
const arr = [1, 2, 3, 4];

// Initial promise: resolves after 3 seconds
function initialPromise() {
    return new Promise((resolve) => {
        setTimeout(() => resolve(arr), 3000);
    });
}

 // First transformation: filter out odd numbers
        function filterOddNumbers(numbers) {
            return new Promise((resolve) => {
                setTimeout(() => {
                    const evens = numbers.filter(num => num % 2 === 0);
                    output.innerText = `After filtering odd numbers: [${evens.join(", ")}]`;
                    resolve(evens);
                }, 1000)

            });
        }

        // Second transformation: multiply even numbers by 2
        function multiplyByTwo(numbers) {
            return new Promise((resolve) => {
                setTimeout(() => {
                    const multiplied = numbers.map(num => num * 2);
                    output.innerText += `\nAfter multiplying by 2: [${multiplied.join(", ")}]`;
                    resolve(multiplied);
                }, 2000);
            });
        }


// Chaining the promises
initialPromise()
    .then(filterOddNumbers)
    .then(multiplyByTwo)
    .catch(err => {
        output.innerText = "Error: " + err;
    });