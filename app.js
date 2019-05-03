var startDate = new Date(2019, 4, 1); // Setting to May 1st, 2019
var startingPushups = 5;

// roughly copied from here: https://stackoverflow.com/questions/3224834/get-difference-between-2-dates-in-javascript#3224854
var daysSinceDate = function(date) {
  var firstDate = new Date(date);
  var now = new Date();
  var timeDifference = Math.abs(now.getTime() - firstDate.getTime());
  var daysSince = Math.floor(timeDifference / (1000 * 3600 * 24));
  return daysSince;
};

// every 10 days, pushups go up by 1
var pushupsDue = function() {
  var daysSince = daysSinceDate(startDate);
  var pushupsDue = Math.floor(5 * (0.1 * daysSince));
  console.log(`Pushups due ${pushupsDue}`);
  return pushupsDue > 5 ? pushupsDue : 18;
};

var setFavicon = function() {
  var url = "https://dummyimage.com/32/ffffff/000000/?text=";
  var iphoneUrl = "https://dummyimage.com/256/ffffff/000000/?text=";
  var number = pushupsDue();
  var link =
    document.querySelector("link[rel*='icon']") ||
    document.createElement("link");
  link.type = "image/x-icon";
  link.rel = "shortcut icon";
  link.href = url + number;
  document.getElementsByTagName("head")[0].appendChild(link);
  var link2 = document.createElement("link");
  link2.rel = "apple-touch-icon";
  link2.href = iphoneUrl + number;
  document.getElementsByTagName("head")[0].appendChild(link2);
};

new Vue({
  el: "#app",
  data: {
    startDate: startDate,
    displayStartDate: startDate.toDateString(),
    daysSince: daysSinceDate(startDate),
    pushups: pushupsDue()
  },
  mounted() {
    setFavicon();
  }
});
