/* Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2. Examples: a = "xyaabbbccccdefww" b = "xxxxyyyyabklmopq" longest(a, b) -> "abcdefklmopqwxy" a = "abcdefghijklmnopqrstuvwxyz" longest(a, a) -> "abcdefghijklmnopqrstuvwxyz" */

let strOne = "qwertylkjh"
let strTwo = "poiuytfghj"

let strOneSplit = strOne.split("")
let strTwoSplit = strTwo.split("")
let strArray = strOneSplit.concat(strTwoSplit)
let strArraySorted = strArray.sort()
let repeatedArray = []
let noRepeatedArray = []

i = 0
while (i < strArraySorted.length) {
    if (strArraySorted[i] == strArraySorted[i - 1]) {
        repeatedArray.push(strArraySorted[i])
    } else {
        noRepeatedArray.push(strArraySorted[i])
    }
    i++
}
noRepeatedSortedArray = noRepeatedArray.join()
console.log(noRepeatedSortedArray)