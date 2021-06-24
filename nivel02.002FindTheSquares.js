/* Find the Squares. Complete the function that takes an odd integer (0 < n < 1000000) which is the difference between two consecutive perfect squares, and return these squares as a string in the format "bigger-smaller". Examples: 9  -->  "25-16" | 5  -->  "9-4" | 7  -->  "16-9" */

let oddNumber = 687

for (i = 0; i <= 1000000; i++) {
    var square = Math.pow(i, 2)
    var previousSquare = Math.pow(i - 1, 2)

    if (square - previousSquare == oddNumber) {
        var perfectSquares = String(previousSquare + "-" + square)
        var numbers = String(i - 1 + "-" + i)
    }
}
console.log(perfectSquares, numbers)
console.log(typeof(perfectSquares))