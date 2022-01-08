/*
You are given an integer N, followed by N lines of input (1 <= N <= 100). Each line of input contains one or several words separated with single spaces. Each word is a sequence of letters of English alphabet containing between 1 and 10 characters, inclusive. The total number of words in the input is between 1 and 100, inclusive.

Your task is to reverse the order of words in each line of input, while preserving the words themselves. The lines of your output should not have any trailing or leading spaces.

Example

input =
---------------
3
Hello World
Bye World
Useless World

output =
----------------
World Hello
World Bye
World Useless

*/
// split the intial input on every new line and create an array   
let intialSplitArray = input.split(/\n/)


//  if the first item in the array is a number then remove it from the array
if (!isNaN(intialSplitArray[0])) {
    intialSplitArray.splice(0, 1)
}


// iterate through each index of the array
// check to make sure its not a number, if it is a number it wont be included in the new array
// create a new array to split the items that have two words in one position of the array
// take the new array created for just this item and reverse the order of the words, then join back together, then remove any commas
// finally log out the results of each item
intialSplitArray.forEach(item => {
    if (isNaN(item)) {

        let oneWordArray = item.split(' ')
        let finalWord = oneWordArray.reverse().join().replace(/,/g, " ")

        console.log(finalWord)

    }
})


