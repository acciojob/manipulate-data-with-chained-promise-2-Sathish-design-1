function manipulateArray() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([1, 2, 3, 4]);
        }, 3000);
    }).then((array) => {
        const evenNumbers = array.filter(num => num % 2 === 0);
        return new Promise((resolve) => {
            setTimeout(() => {
                document.getElementById('output').textContent = evenNumbers.join(',');
                resolve(evenNumbers); // Resolve with even numbers
            }, 1000);
        });
    }).then((evenNumbers) => {
        return new Promise((resolve) => {
            const multiplied = evenNumbers.map(num => num * 2);
            setTimeout(() => {
                document.getElementById('output').textContent = multiplied.join(',');
                resolve(multiplied); // Resolve with the multiplied array
            }, 2000);
        });
    });
}

document.addEventListener("DOMContentLoaded", manipulateArray);