/* Fizz Buzz. Return an array containing the numbers from 1 to N, where N is the parametered value. Replace certain values however if any of the following conditions are met:
If the value is a multiple of 3: use the value "Fizz" instead
If the value is a multiple of 5: use the value "Buzz" instead
If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead
N will never be less than 1.
Method calling example:
fizzbuzz(3) -->  [1, 2, "Fizz"]
ALGORITHMS FUNDAMENTALS NUMBERS ARRAYS */

function fizzBuzz(number) {
    arr = new Array
    for (i = 1; i <= number; i++) {
        arr.push(i)
    }
    if (arr.length % 3 === 0 && arr.length % 5 === 0) {
        arr.pop()
        arr.push("FizzBuzz")
    } else if (arr.length % 3 === 0) {
        arr.pop()
        arr.push("Fizz")
    } else if (arr.length % 5 === 0) {
        arr.pop()
        arr.push("Buzz")
    }
    console.log(arr)
}
fizzBuzz(5)