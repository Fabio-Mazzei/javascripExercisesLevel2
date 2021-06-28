/* Over The Road. Example: Given your house number address and length of street n, give the house number on the opposite side of the street.
overTheRoad(address, n)
overTheRoad(1, 3) = 6
overTheRoad(3, 3) = 4
overTheRoad(2, 3) = 5
overTheRoad(3, 5) = 8
Note about errors. If you are timing out, running out of memory, or get any kind of "error", read on. Both n and address could get upto 500 billion with over 200 random tests. If you try to store the addresses of 500 billion houses in a list then you will run out of memory and the tests will crash. This is not a kata problem so please don't post an issue. Similarly if the tests don't complete within 12 seconds then you also fail. To solve this, you need to think of a way to do the kata without making massive lists or huge for loops. Read the discourse for some inspiration. FUNDAMENTALSNUMBERSMATHEMATICSALGORITHMSPERFORMANCE */

let streetSideE = [], streetSideO = []
let houseNumber = 5
let streetLength = 3
let streetLengthDouble = (streetLength * 2) + 1

for (i = 1; i < streetLengthDouble; i++) {
    if (i % 2 === 0) {
        streetSideE.push(i)
    } else if (i % 2 === 1) {
        streetSideO.push(i)
    }
}

console.log(streetSideO)
streetSideEReversed = streetSideE.reverse()
console.log(streetSideEReversed)

let idx
if (houseNumber % 2 === 0) {
    idx = streetSideEReversed.indexOf(houseNumber)
    console.log("Number of the house: " + streetSideEReversed[idx])
    console.log("Number of the opposite house: " + streetSideO[idx])
} else {
    idx = streetSideO.indexOf(houseNumber)
    console.log("Number of the house: " + streetSideO[idx])
    console.log("Number of the opposite house: " + streetSideEReversed[idx])    
}