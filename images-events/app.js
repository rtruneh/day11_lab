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
const bothGoats = document.getElementById("all_goats");
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
};

//added a property to the goat pictures constructor function that is an array
GoatPictures.allImages = [];

const renderGoats = function() {
    //use right/left global variables for the img and the p to stick the goats on the page.
    leftGoatImg.src = leftGoat.imagePath;
    rightGoatImg.src = rightGoat.imagePath;
    rightGoatP.textContent = rightGoat.name;
    leftGoatP.textContent = leftGoat.name;
};

//function that will randomly selects two goats
function goatPicker() {
    //picks goat pictures at random by giving them separate index numbers
    let leftIndex = Math.floor(Math.random() * GoatPictures.allImages.length)
    console.log(GoatPictures.allImages)
    console.log(leftIndex)
    let rightIndex = Math.floor(Math.random() * GoatPictures.allImages.length)
    console.log(rightIndex)
    //first and second goat should not be the same
    //while they are the same, run the right one again for another picture
    while (rightIndex === leftIndex) {
    rightIndex = Math.floor(Math.random() * GoatPictures.allImages.length)
    console.log(rightIndex)
}
// attached the image to an index number to help the function run
leftGoat = GoatPictures.allImages[leftIndex];
rightGoat = GoatPictures.allImages[rightIndex];
};

//display vote count function 
function displayVoteCount(){
    result.innerHTML = '';
    let h2 = document.createElement('h2')
    h2.textContent = 'Goat Likes'
    result.appendChild(h2);
    for (let goat of GoatPictures.allImages){
        const li = document.createElement('li')
        li.textContent = `${goat.name}: ${goat.clicks}`
        result.appendChild(li)    }
};

//when a picture is clicked, handle the result of that click
function handleClick(event){
    console.log(event.target)
    const clickedTarget = event.target;
    //id helps to keep track of which picture is clicked 
    const id = clickedTarget.id
//compare left and right goat to what was clicked on to make sure vote is counted
//vote 10x's or less
if (totalClicks < 10){
    if (id === 'left_goat_img' || id === 'right_goat_img'){
        //increment votes total
        //if they click on left image add a point
        if (id === 'left_goat_img'){
        leftGoat.clicks++;
        //if not add it to the right
        } else {
            rightGoat.clicks++
        }
        //with each vote add to the total
        totalClicks++;
        leftGoat.timesShown++;
        rightGoat.timesShown++;
        //need it to go through and run through the functions
        goatPicker();
        renderGoats();
}    
}

//once they've voted 10 times
if (totalClicks === 10){
    bothGoats.removeEventListener('click', handleClick);
    displayVoteCount()
}
};

//create a new instance of a goat picture from constructor
new GoatPictures('Bunny Goat', 'assets/bunny-goat.png');
new GoatPictures('Cool Goat', 'assets/cool-goat.jpeg');
new GoatPictures('Cruisin Goat', 'assets/cruisin-goat.jpeg');
new GoatPictures('Float Your Goat', 'assets/float-your-goat.jpeg');
new GoatPictures('Goat Away', 'assets/goat-away.jpeg');
new GoatPictures('Goat out of Hand', 'assets/goat-out-of-hand.jpeg');
new GoatPictures('Kissing Goat', 'assets/kissing-goat.jpeg');
new GoatPictures('Lucky Goat', 'assets/lucky-goat.jpeg');
new GoatPictures('Sassy Goat', 'assets/sassy-goat.jpeg');
new GoatPictures('Smiling Goat', 'assets/smiling-goat.jpeg');
new GoatPictures('Sweater Goat', 'assets/sweater-goat.jpeg');

//event listener to all goats div ('type of event', function to happen at event)
bothGoats.addEventListener('click', handleClick);

goatPicker();
console.log('left goat', leftGoat)


renderGoats();
