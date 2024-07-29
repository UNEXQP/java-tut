// String manipulation
function reverseString(str) {
    return str.split('').reverse().join('');
}

// Example usage:
console.log(reverseString("hello")); // Output: "olleh"


// count characters
function countCharacters(str) {
    return str.length;
}

// Example usage:
console.log(countCharacters("hello")); // Output: 5

// capitalize words
function capitalizeWords(sentence) {
    return sentence.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

// Example usage:
console.log(capitalizeWords("hello world")); // Output: "Hello World"

// Array Functions
// Find Maximum and Minimum:
function findMaximum(arr) {
    return Math.max(...arr);
}

function findMinimum(arr) {
    return Math.min(...arr);
}

// Example usage:
console.log(findMaximum([1, 2, 3, 4, 5])); // Output: 5
console.log(findMinimum([1, 2, 3, 4, 5])); // Output: 1


// Sum of Array:
function sumArray(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
}

// Example usage:
console.log(sumArray([1, 2, 3, 4, 5])); // Output: 15


// Filter Array:
function filterArray(arr, condition) {
    return arr.filter(condition);
}

// Example usage:
console.log(filterArray([1, 2, 3, 4, 5], num => num > 2)); // Output: [3, 4, 5]


// Mathematical Functions
// Factorial:
function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}

// Example usage:
console.log(factorial(5)); // Output: 120
// Prime Number Check:
function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;

    if (num % 2 === 0 || num % 3 === 0) return false;

    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
}

// Example usage:
console.log(isPrime(11)); // Output: true
console.log(isPrime(4));  // Output: false

// Fibonacci Sequence:
function fibonacci(n) {
    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib;
}

// Example usage:
console.log(fibonacci(10)); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]






