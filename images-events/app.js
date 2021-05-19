//TDD 
// Make objects for each image - name, image, clicks - seen? ()
// constructor function ^^ ()
// create count variable ()
// counting guesses ONLY allowing a certain number and then you can't guess any more
// render two images - must be two different images
// - renders
// - pick goats
// you can click - listener
// when you click it counts AND renders new images
// stretch goal - make sure images don't repeat each round 
// wipe out data of results to start over - render the results
// Get global variables

// Global Variables: getting references to HTML
const result = document.getElementById("goat-clicks");
const boatGoats = document.getElementById("all_goats");
const rightGoatImg = document.getElementById("right_goat_img");
const leftGoatImg = document.getElementById("left_goat_img");
const rightGoatP = document.getElementById("left_goat_p");
const leftGoatP = document.getElementById("right_goat_p");

//to keep track of total clicks
let totalClicks = 0;

//keep track with whats going on with the left and right as they aren't the same
let leftGoat = null;
let rightGoat = null;

//create constructor function
const GoatPictures = function(name, imagePath) {
    this.name = name;
    this.imagePath = imagePath;
    this.clicks = 0;
    this.timesShown = 0;
//pushes all of the variables into an array
    GoatPictures.allImages.push(this)
}
//added a property to the goat pictures constructor function that is an array
GoatPictures.allImages = [];

const renderGoats = function() {
    //use right/left global variables for the img and the p to stick the goats on the page
    
}
