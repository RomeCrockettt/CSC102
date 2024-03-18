// Nathan Rome Crockett 3/14/2024

function palindromeFun(){
    //console.log(palindromeTest("Tacocat"));
    //console.log(palindromeTest("Notpalindrome"));

    // Flag variable to test if the user wants to continue
    var bContinue = true;

    do{
        // prompt the user to enter a word
        var userInput = prompt("Enter a word to see if it is a palindrome: ");

        // Check to see if the users word is a palindrome
        var bIsPalindrome = palindromeTest(userInput);

        // Create a message for the user
        var message = "";
        
        // If the word is a palindrome, let the user know
        if (bIsPalindrome){
            // tell the user that their word is a palindrome
            message = userInput + " is a palindrome!";
        }

        // If the word is not a palindrome, let the user know
        else{
            // tell the user that their word is a palindrome
            message = userInput + " is not a palindrome!";
        }

        alert(message);

        // Prompt the user to see if they want to continue
        var answer = prompt("Do you want to continue? (y/n)");

        // Check the answer, if n, exit the loop
        if (answer == "n"){
            // Set out boolean loop monitor variable to false so that the loop will stop running when the while condition is tested
            bContinue = false;
        }
    } while (bContinue); // While bContinue is true, the loop will keep running, otherwise it will not
}

// This function will test a string to see if it is the same forwards and backwards
function palindromeTest(strToTest){
    // Remove the whitespace from the string and make it lowercase
    var strCleaned = strToTest.replace(/\s/g, "").toLowerCase();

    console.log("strCleaned=" + strCleaned)

    // Put the string into an array so we can easily reverse it
    var strArray = strCleaned.split("");

    // Pow lets reverse the order of the letters in the array
    var strReversedArray = strArray.reverse();

    // Put the array back into a string
    var strRev = strReversedArray.join("");

    console.log("strRev=" + strRev);

    // Test to see if the 2 strings are the same, both forwards and backwards
    // If the words are the same, the function will return true
    return strRev == strCleaned;
}