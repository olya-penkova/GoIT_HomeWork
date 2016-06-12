window.onload = init;

 var map;
 var ctxMap;

 var pl;
 var ctxPl;

 var drawBtn;
 var clearBtn;

 var gameWith = 800;
 var gameHeight = 500;



 var backgound = new Image;
 backgound.src = 'img/bg.jpg';

 var plBg = new Image;
 plBg.src = 'img/bird.png';

 function init() {
 	map = document.getElementById('map');
 	ctxMap = map.getContext('2d');

    pl = document.getElementById('player');
    ctxPl = pl.getContext('2d');

 	drawBtn = document.getElementById('drawBtn');
 	clearBtn = document.getElementById('clearBtn');

 	map.width = gameWith;
 	map.height = gameHeight;
 	pl.width = 324;
 	pl.height = 324;

    drawBtn.addEventListener('click', drawRect, false);
    clearBtn.addEventListener('click', clearRect, false);

    drawBg();
    drawPl();
 }

 function drawRect() {
    ctxMap.fillStyle = '#3D3D3D';
    ctxMap.fillRect(10, 10, 10, 10);
 }

 function clearRect() {
    ctxMap.clearRect(0, 0, 800, 500);
 }

 function drawBg() {
 	ctxMap.drawImage(backgound, 0, 0, 1600, 1000,
 		0, 0, gameWith, gameHeight);
 }

 function drawPl() {
 	ctxPl.drawImage(plBg, 0, 0, 324, 324,
 		0, 0, 324, 324);
 }