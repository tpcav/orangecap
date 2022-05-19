// Source for setting up live clock in Javascript
// https://www.youtube.com/watch?v=HyhVjHGb19k&t=12s

// Date
function renderTime() {

  var mydate = new Date();
  var year = mydate.getYear();
    
    if (year<1000) {
      year += 1900
    } 

    var day = mydate.getDay();
    var month = mydate.getMonth();
    var daym = mydate.getDate();
    var dayarray = new Array ("Sunday","Monday","Tuesday","Wednesday","Thrusday","Friday","Saturday");
    var montharray = new Array ("January","Febuary","March","April","May","June","July","August","September","October","November","December")

// Time
var currentTime = new Date ();
var h = currentTime.getHours();
var m = currentTime.getMinutes();
var s = currentTime.getSeconds();
    
    // Formatting for Time
    if (h == 24) {
      h = 0;
    } else if (h > 12) {
      h = h - 0;
    }

    if (h < 10) {
      h = "0" + h;
    }

    if (m < 10) {
      m = "0" + m;
    }

    if (s < 10) {
      s = "0" + s;
    }

    // Formatting for entire clock
    var myClock = document.getElementById("clockDisplay");
    myClock.textContent = "" +dayarray[day]+ " " +daym+ " " +montharray[month]+ " " +year+ " | " +h+ ":" +m+ ":" +s;
    myClock.innerText = "" +dayarray[day]+ " " +daym+ " " +montharray[month]+ " " +year+ " | " +h+ ":" +m+ ":" +s;
    
    setTimeout("renderTime()", 1000);

}
renderTime();