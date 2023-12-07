console.clear();

/*
1. Create the data for a small social media post. Create a const variable for each data point listed below.:
	- a title
	- a text
	- the number of likes
	- the user who created the post
	- a boolean called isReported
*/

// --v-- write your code here --v--

const myTitle = "Hi, there";
const myText = "Welcome ...";
const theNumberOfLikes = 35; // initial number of likes
const postCreator = "Daria Furman";
const isReported = true;

// --^-- write your code here --^--

/*
2. Log all variables to the console. Increase the likes by one and log the amount of likes again. Adapt your code from 1.1 if necessary.
*/

// --v-- write your code here --v--

console.log("myTitle: ", myTitle);
console.log("myText: ", myText);
console.log("Initial likes:", theNumberOfLikes);
const updatedLikes = theNumberOfLikes + 1; // increase likes by one
console.log("Updated likes:", updatedLikes);
console.log("postCreator: ", postCreator);
console.log("isReported: ", isReported);

// --^-- write your code here --^--
