// Add your javascript here
// Don't forget to add it into respective layouts where this js file is needed

$(document).ready(function() {
  AOS.init( {
    // uncomment below for on-scroll animations to played only once
    // once: true  
  }); // initialize animate on scroll library
});

// Smooth scroll for links with hashes
$('a.smooth-scroll')
.click(function(event) {
  // On-page links
  if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
    && 
    location.hostname == this.hostname
  ) {
    // Figure out element to scroll to
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    // Does a scroll target exist?
    if (target.length) {
// Only prevent default if animation is actually gonna happen
event.preventDefault();
$('html, body').animate({
  scrollTop: target.offset().top
}, 1000, function() {
  // Callback after animation
  // Must change focus!
  var $target = $(target);
  $target.focus();
  if ($target.is(":focus")) { // Checking if the target was focused
    return false;
  } else {
    $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
    $target.focus(); // Set focus again
  };
});
    }
  }
});

// date time make only javascript  
  function startTime()  
  {  
var today = new Date();  
var h = today.getHours();  
var m = today.getMinutes();  
var s = today.getSeconds();  
			var ampm = h >= 12 ? 'PM' : 'AM';
var d = new Date();  
var n = d.getDate();  
var month = new Array();  
month[0] = "JANUARY";  
month[1] = "FEBRUARY";  
month[2] = "MARCH";  
month[3] = "APRIL";  
month[4] = "MAY";  
month[5] = "JUNE";  
month[6] = "JULY";  
month[7] = "AUGUST";  
month[8] = "SEPTEMBER";  
month[9] = "OCTOBER";  
month[10] = "NOVEMBER";  
month[11] = "DECEMBER";  
var t = month[d.getMonth()];  
var y = d.getFullYear();  
m = checkTime(m);  
s = checkTime(s);  
document.getElementById('txt')  
    .innerHTML = n + " " + t + " " + y + " " + h + ":" + m + ":" + s + " " + ampm;  
var t = setTimeout(function ()  
{  
    startTime()  
}, 500);  
  }  
  
  function checkTime(i)  
  {  
if(i < 10)  
{  
    i = "0" + i  
}; // add zero in front of numbers < 10  
return i;  
  } 
