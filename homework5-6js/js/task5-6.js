var start = document.querySelector('.start');
var stop = document.querySelector('.stop');
var cont = document.querySelector('.cont');
var clear = document.querySelector('.clear');
var h = 0;
var m = 0;
var s = 0;
var ml = 0;

function lpad(n, z, width) {
  z = z || '0';
  n = n + '';
  return n.length >= width ? n : new Array(width - n.length + 1).join( z ) + n;
}
var time = document.querySelector('.time');
time.innerHTML = lpad(h,'0',2) + ':' + lpad(m,'0',2) + ':' + lpad(s,'0',2);

var mlSeconds = document.querySelector('.mlseconds');
mlSeconds.innerHTML = '0';

var mlSecondsID;
var sId;
var mId;
var hId;

function startStop() {
    start.style.display='none';
    stop.style.display='inline-block';
}

function mlSecStart() {
     mlSecondsID = setInterval(
        function () {
            ml = (ml + 1) % 1000;
            mlSeconds.innerHTML = ml;
}, 1);

     sId = setInterval(
        function() {
            s = (s + 1) % 60;
            time.innerHTML = lpad(h,'0',2) + ':' + lpad(m,'0',2) + ':' + lpad(s,'0',2);     
    }, 1000);
     
     
     mId = setInterval(
        function() {
             m = (m + 1) % 60;
            time.innerHTML = lpad(h,'0',2) + ':' + lpad(m,'0',2) + ':' + lpad(s,'0',2);
        }, 60000);
     
     hId = setInterval(
        function() {
            h = (h +1) % 24;
            time.innerHTML = lpad(h,'0',2) + ':' + lpad(m,'0',2) + ':' + lpad(s,'0',2);
        }, 3600000);
}

function timeStop() {
    clearInterval(mlSecondsID);
    clearInterval(sId);
    clearInterval(mId);
    clearInterval(hId);
    time.innerHTML = lpad(h,'0',2) + ':' + lpad(m,'0',2) + ':' + lpad(s,'0',2);
    mlSeconds.innerHTML = ml;
}

function stopCont() {
    stop.style.display='none';
    cont.style.display='inline-block';
}

function contStop() {
    cont.style.display='none';
    stop.style.display='inline-block';
}

function contStart() {
    cont.style.display='none';
    stop.style.display='none';
    start.style.display='inline-block';
}

function clearTime() {
    clearInterval(mlSecondsID);
    clearInterval(sId);
    clearInterval(mId);
    clearInterval(hId);
    ml=0;
    s=0;
    m=0;
    h=0;
    time.innerHTML = lpad(h,'0',2) + ':' + lpad(m,'0',2) + ':' + lpad(s,'0',2);
    mlSeconds.innerHTML = ml;
} 

start.addEventListener("click", mlSecStart);
start.addEventListener("click", startStop);
stop.addEventListener("click", timeStop);
stop.addEventListener("click", stopCont);
cont.addEventListener("click", mlSecStart);
cont.addEventListener("click", contStop);
clear.addEventListener("click", clearTime);
clear.addEventListener("click", contStart);


