/* Credit Card Mask. Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it. Your task is to write a function maskify, which changes all but the last four characters into '#'.
Examples:
maskify("4556364607935616") == "############5616"
maskify(     "64607935616") ==      "#######5616"
maskify(               "1") ==                "1"
maskify(                "") ==                 ""
// "What was the name of your first pet?"
maskify("Skippy")                                   == "##ippy"
maskify("Nananananananananananananananana Batman!") == "####################################man!"
ALGORITHMS UTILITIES STRINGS. */

maskfy = (char) => {
    let arrChar
    strChar = String(char)
    arrChar = strChar.split("")
    for (i = 0; i < arrChar.length; i++) {
        if (i < arrChar.length - 4) {
            hiddenChar = arrChar.splice(i, 1, "#")
        }
    }
    return arrChar.join("")    
}
console.log(maskfy("4892-7589-3509-7542"))