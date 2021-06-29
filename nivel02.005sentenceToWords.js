/* Write function splitSentence which will create a list of strings from a string. Example: "hello world" -> ["hello", "world"]. FUNDAMENTALS. */

splitSentence = (sentence) => {
    splitSentence = sentence.split(" ")
    return splitSentence
}
console.log(splitSentence("Split sentence, split sentence..."))