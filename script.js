function manipulateArray() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([1, 2, 3, 4]);
        }, 3000);
    }).then((array) => {
        const evenNumbers = array.filter(num => num % 2 === 0);
        setTimeout(() => {
            document.getElementById('output').textContent = evenNumbers.join(',');
        }, 1000);
        
        return evenNumbers.map(num => num * 2);
    }).then((multiplied) => {
        setTimeout(() => {
            document.getElementById('output').textContent = multiplied.join(',');
        }, 2000);
    });
}