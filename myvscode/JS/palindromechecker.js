// Nathan Rome Crockett 3/14/2024
// !!!!! I changed the way this program worked fundamentally, by using the code from basics.html and game.html, there is an original version titled "palindromeold.html and palindromecheckerold.js" in the github if you need to test that!

function palindromeFun(){

        // Grab the text input by the user from the html page
        var userInput = document.getElementById("wordInput").value;

        // Check to see if the users word is a palindrome
        var bIsPalindrome = palindromeTest(userInput);

        // Create a message for the user
        var message = "";
        
        // If the word is a palindrome, let the user know
        if (bIsPalindrome){
            // tell the user that their word is a palindrome
            document.getElementById("palindromeResult").innerHTML = "Palindrome result: " + userInput + " is a palindrome!";
        }

        // If the word is not a palindrome, let the user know
        else{
            // tell the user that their word is a palindrome
            message = userInput + " is not a palindrome!";
            document.getElementById("palindromeResult").innerHTML = "Palindrome result: " + userInput + " is not a palindrome!";
        }

        console.log(message);

}

// This function will test a string to see if it is the same forwards and backwards
function palindromeTest(strToTest){
    // Remove the whitespace from the string and make it lowercase
    var strCleaned = strToTest.replace(/\s/g, "").toLowerCase();

    console.log("strCleaned=" + strCleaned)
    document.getElementById("inputWord").innerHTML = "Original word: " + strCleaned;

    // Put the string into an array so we can easily reverse it
    var strArray = strCleaned.split("");

    // Pow lets reverse the order of the letters in the array
    var strReversedArray = strArray.reverse();

    // Put the array back into a string
    var strRev = strReversedArray.join("");

    console.log("strRev=" + strRev);
    document.getElementById("reversedWord").innerHTML = "Reversed word: " + strRev;

    // Test to see if the 2 strings are the same, both forwards and backwards
    // If the words are the same, the function will return true
    return strRev == strCleaned;
}