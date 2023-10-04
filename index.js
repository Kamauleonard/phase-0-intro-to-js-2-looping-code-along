function writeCards(names) {
    return names.map(name => `Thank you, ${name}, for the wonderful surprise gift!`);
}

// Function to count down from a given number
function countDown(startingNumber) {
    while (startingNumber >= 0) {
        console.log(startingNumber);
        startingNumber--;
    }
}
