var myImage = document.getElementById("backgroundPic");

var imageArray = ["images/background1.jpg", "images/background2.jpg", "images/background3.jpg", "images/background4.jpg", "images/background5.jpg"];

var imageIndex = 1;

function changeImage() {
	myImage.setAttribute("src",imageArray[imageIndex]);
	imageIndex++;
	if (imageIndex >= imageArray.length) {
		imageIndex = 0;
	}
}

setInterval(changeImage,4000);

  
// set the date we're counting down to
var target_date = new Date("Jun 05, 2015").getTime();

// variables for time units
var days, hours, minutes, seconds;

// get tag element
var countdown = document.getElementById("countdown");

// update the tag with id "countdown" every 1 second
setInterval(function () {

    // find the amount of "seconds" between now and target
    var current_date = new Date().getTime();
    var seconds_left = (target_date - current_date) / 1000;

    // do some time calculations
    days = parseInt(seconds_left / 86400);
    seconds_left = seconds_left % 86400;
    
    hours = parseInt(seconds_left / 3600);
    seconds_left = seconds_left % 3600;
    
    minutes = parseInt(seconds_left / 60);
    seconds = parseInt(seconds_left % 60);
    
    // format countdown string + set tag value
    countdown.innerHTML = days + " d, " + hours + " h, " 
	+ minutes + " m, " + seconds + " s";   

}, 1000);

