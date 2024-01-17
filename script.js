// Get the element to be animated
var ellyzaHeading = document.getElementById('colorChangingText');

// Array of colors to loop through
var colors = ['gray', 'white',];

// Index to track the current color
var colorIndex = 0;

// Function to change the color
function changeColor() {
    ellyzaHeading.style.color = colors[colorIndex];

    // Increment colorIndex and loop back to 0 when reaching the end
    colorIndex = (colorIndex + 1) % colors.length;
}

// Set interval to change color every 2 seconds (adjust as needed)
setInterval(changeColor, 1000);
