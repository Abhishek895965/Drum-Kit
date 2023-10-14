// Create an array of dice image file names
var diceImages = [
    "dice1.png",
    "dice2.png",
    "dice3.png",
    "dice4.png",
    "dice5.png",
    "dice6.png"
];

// Create variables for the random numbers of both players
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

// Use randomNumber1 to select a random dice image for Player 1 from the array
var selectedImage1 = diceImages[randomNumber1 - 1]; // Subtract 1 to account for array indexing

// Use randomNumber2 to select a random dice image for Player 2 from the array
var selectedImage2 = diceImages[randomNumber2 - 1]; // Subtract 1 to account for array indexing

// Set the src attributes of the left and right <img> elements to the selected images
document.querySelector(".img1").src = "images/" + selectedImage1;
document.querySelector(".img2").src = "images/" + selectedImage2;

// Get a reference to the <h1> element
var resultText = document.querySelector("h1");

// Compare the dice rolls and update the <h1> text accordingly
if (randomNumber1 > randomNumber2) {
    resultText.textContent = "Player 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
    resultText.textContent = "Player 2 Wins!";
} else {
    resultText.textContent = "It's a Draw!";
}
