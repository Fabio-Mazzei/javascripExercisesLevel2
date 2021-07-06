/* String ends with? Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).Examples: solution('abc', 'bc') // returns true | solution('abc', 'd') // returns false. FUNDAMENTALS STRINGS. */

let strEndCompare = (str, strToCompare) => {
    
    let arrStrReverse = str.split("")
        .reverse()
    let arrStrToCompareReverse = strToCompare.split("")
        .reverse()
    
    let strA = new Array()
    let strB = new Array()
    
    for (i = 0; i < arrStrReverse.length; i++) {
        if (arrStrReverse[i] === arrStrToCompareReverse[i]) {
            strA.push(arrStrReverse[i])
            strB.push(arrStrToCompareReverse[i])  
        } else {
            break
        }
    }
    
    strAReverse = strA.reverse()
        .join("")
    strBReverse = strB.reverse()
        .join("")
    
        if (strAReverse.length > 0) {
        console.log(true, strAReverse)
    } else {
        console.log(false, strAReverse)
    }
}

strEndCompare("string", "sting")