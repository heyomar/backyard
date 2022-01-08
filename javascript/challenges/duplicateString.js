// 1st,
// - take the input data and split where there are newlines into an array
// - now that the string is in an array we can more easily manipulate the data
  
  const dataArray = input.split(/\n/);

  
// 2nd,
// - extract the number we need to duplicate the word in the dataArray
// - extract the word we are duplicating from the dataArray
  
  let multi = dataArray[0].valueOf();
  let wordToDuplicate = dataArray[1].toString();

  
// 3rd,
// - create an empty variable and set it to an empty string
  
  let finalString = '';
  
  
// 4th,
// - create a while loop to iterate the number of times we need to duplicate the string
// - then after add a copy of the string we add a newline character
// - finally console log the output
  
  while(multi > 0){
    finalString += wordToDuplicate
    finalString += "\n";
    multi--
  }
  
  console.log(finalString);