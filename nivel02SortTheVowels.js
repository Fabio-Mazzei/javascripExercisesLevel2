/* Sort the Vowels! In this exercise, we want to sort the vowels in a special format. Task: Write a function which takes a input string s and return a string in the following way:
                  C|                          R|
                  |O                          n|
                  D|                          d|
   "Codewars" =>  |E       "Rnd Te5T"  =>      |
                  W|                          T|
                  |A                          |e
                  R|                          5|
                  S|                          T|
Notes: List all the Vowels on the right side of | List every character except Vowels on the left side of | Case doesn't matter Each line is seperated with \n Invalid input ( undefined / null / integer ) should return an empty string. FUNDAMENTALS */

let str = "Vowels on the right side of the line."

for (i = 0; i < str.length; i++) {
    if (str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u" || str[i] === "A" || str[i] === "E" || str[i] === "I" || str[i] === "O" || str[i] === "U") {
        console.log("|" + str[i] + "\n")
    } else {
        console.log(str[i] + "|\n")
    }
}