let timer = document.querySelector("#timer");
let start = document.querySelector("#start");
let stop = document.querySelector("#stop");
let reset = document.querySelector("#reset");

let myTime = {
  hour: "00",
  minute: "00",
  seconds: "00",
};

let seconds = 0;
function stopWatch() {
  seconds++;
  if (seconds < 60) {
    myTime.seconds = "" + seconds;
    if(myTime.seconds.length === 1) {
      myTime.seconds = "0" + myTime.seconds;;
    }
  } else {
    seconds = 0;
    myTime.seconds = 0;
    myTime.minute += 1;
    if (myTime.minute.length === 1) {
      myTime.minute = "0" + myTime.minute;
    }
    if (myTime.minute >= 60) {
      myTime.minute = 0;
      myTime.hour += 1;
      if (myTime.hour.length === 1) {
        myTime.hour = "0" + myTime.hour;
      }
    }
  }
  showData();
}

function showData() {
  timer.innerHTML = `${myTime.hour} : ${myTime.minute} : ${myTime.seconds}`;
}
window.addEventListener("load" , ()=>{
  clearInterval(timeInterval);
})

let timeInterval;
start.addEventListener("click", () => {
  timeInterval = setInterval(stopWatch, 1000);
});

stop.addEventListener("click", () => {
  clearInterval(timeInterval);
});

reset.addEventListener("click", () => {
  clearInterval(timeInterval);
  myTime.seconds = 0;
  myTime.minute = 0;
  myTime.hour = 0;
  showData();
});
