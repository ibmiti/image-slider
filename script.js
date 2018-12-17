var images = [        // Opening of an array
  "http://www.sololearn.com/uploads/slider/1.jpg",
  "http://www.sololearn.com/uploads/slider/2.jpg",
  "http://www.sololearn.com/uploads/slider/3.jpg",
  "http://www.sololearn.com/uploads/slider/1.jpg",
  "http://www.sololearn.com/uploads/slider/2.jpg",
  "http://www.sololearn.com/uploads/slider/3.jpg",
  "http://www.sololearn.com/uploads/slider/1.jpg"

];                     // Closing of an array

var num = 0;          // introducing num variable or object and giving it a value of 0 which will ultimately hold the current image


function next() {                      // creating new function which will used in the button of next
  var slider =
  document.getElementById('slider');   // selecting the id with the value of slider on the html doc
  num++                                // allowing num to be incremented automatically by 1
  if(num >= images.length) {           // checking the location of num within the images array
    num = 0;                           // starting the num at the 0 index of the array
  }
  slider.src = images[num];            // allowing num entry into images
}

function prev() {
  var slider =
  document.getElementById("slider");
  num--;                              // decrement's so allows the moving of left in the array
  if(num < 0 ) {                      // checking location while in array  if it is above starting point this allows us to num-- ( which is moving left back to the start of array if we click the button prev)
     num = images.length-1;           // this function allows us to decrement the length of the array
  }
  slider.src = images[num];           // allowing num entry into the image array
}
