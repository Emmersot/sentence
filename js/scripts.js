$(document).ready(function() {
  const userSentence = prompt("enter a sentence");
  console.log(userSentence);

  //1st function: create a function that will take the first and last letter of the sentence, capitalize them, and return this as a new string.
  function uppercaseFirstLastLetter (sentence) {
    const firstLetter = sentence.charAt(0).toUpperCase();
    const lastLetter = sentence.charAt(sentence.length - 1).toUpperCase();
    
    return firstLetter + lastLetter;
  }
  
  // 2nd function: Create another function that will reverse the order of these two letters and return the result.
  function uppercaseLastFirstLetter (firstLast) {
    const lastLetter = firstLast.charAt(firstLast.length - 1).toUpperCase();
    const firstLetter = firstLast.charAt(0);

    return lastLetter + firstLetter;
  }

  // 3rd function: calls the other two functions you've just created. For example, if I enter the sentence "I am a sentence", it should enter your first function (which should output "IE"), then call your second function, passing in the output value from the previous. It would return "EI" to me.

  function uppercase (sentence) {
    const firstLast = uppercaseFirstLastLetter (sentence);
    const lastFirst = uppercaseLastFirstLetter(firstLast);

    //Add code to your third function to concatenate the new two-letter string together with the original phrase. It should add the two-letter string at the end, forming the final result "I am a sentenceEI."

    return sentence + lastFirst;
  }
  
  //Create a fourth function to count the number of letters in the original sentence, divide it by two (rounding down if necessary), and output the letter at this index. Concatenate this letter at the beginning of the original sentence. For example, if "I am a sentence" is my original input, and it has 15 total characters in it. If I divide this by 2, I get 7.5, which rounds down to 7. The letter at the 7th position in the sentence is "s". So my final result is "sI am a sentenceEI".

  function count (sentence) {
    const firstLast = uppercaseFirstLastLetter (sentence);
    const lastFirst = uppercaseLastFirstLetter(firstLast)
    const length = sentence.length;
    const divide = length / 2;
    const letter = sentence.charAt(divide);

    return letter + sentence + lastFirst;
  }
  
  //Take the final result and reverse it: "IEecnetnes a ma ls".
  
  function reverse (sentence) {
    return sentence.split("").reverse().join("");
  }

  
  console.log(uppercase(userSentence));
  console.log(count(userSentence));
  console.log(reverse(count(userSentence)));

});
