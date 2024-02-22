// Nathan Rome Crockett 2/22/24
// Track the interval ID with a variable
var intervalId = 0;
// This function will start moving our image around
function startMoveImage(){
    // Create a variable that points to our HTML meme image
    var memeHook = document.getElementById("memeImage");

    memeHook.style.right = 0 + "px";


    intervalId = setInterval(function(){
        // Create a variable to hold the new x coordinate, based on the browser window's size
        var newX = randomNumber(window.innerWidth);
        
        // Create a variable to hold the new y coordinate, based on the browser window's size
        var newY = randomNumber(window.innerHeight);
        
        // Lets change the location of our image
        memeHook.style.left = newX + "px";
        memeHook.style.top = newY + "px";

        console.log("x: " + memeHook.style.left + " top: " + memeHook.style.top);
    }, 1000); // The setInterval function has two paramters, the latter of which is time, every value is a millisecond
}

// create the function to stop the image from moving
function stopMoveImage(){
    // Call the built in JavaScript function to clear the interval, stop the image from moving
    clearInterval(intervalId);
    // Create a variable that points to our HTML meme image, again
    var memeHook = document.getElementById("memeImage");

    // Adjust the image back to its original style
    memeHook.style.left = "35%";
    memeHook.style.top = "25%";
    memeHook.style.right = "35%";

}

// Create a function to generate our coordinate randomly, with the paramter "dimensions" for adjusting the random number based on window size.
function randomNumber(dimensions){
    // This function will return a random coordinate back to the code that called it
    return Math.floor(Math.random() * dimensions * .65);
}

    