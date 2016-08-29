var colorArr = ['#a17573', '#ccffff', '#ffb366', '#b3ff66', '#e6d836', '#ead8fa', '#7fffd4', '#d28c9a', '#ffe0d1', '#4d9c2d', '#c29bff', '#ff6768'];

$(function() {
	/*$('.content').on('click', function() {
         var rand = Math.floor(Math.random()*colorArr.length);
         var randColor = colorArr[rand];
         $(this).css('background', randColor);
	});*/

    var Square = function (node) {
        this.x = 0;
        this.y = 0;
        this.step = 10;
        this.node = node;
        this.setHandlers();
    };

    Square.prototype.setHandlers = function () {
        var keys = {
            37: "left",
            38: "up",
            39: "right",
            40: "down"
        };
        var that = this;
        document.addEventListener("keydown", function (e) {
            if (e.keyCode in keys) {
                that[keys[e.keyCode]](); 
                that.draw();
                var rand = Math.floor(Math.random()*colorArr.length);
                var randColor = colorArr[rand];
                $('.content').css('background', randColor);
            }
        }, false);
    };

    Square.prototype.left = function () {
        this.x -= this.step;
    };

    Square.prototype.right = function () {
        this.x += this.step;
    };

    Square.prototype.up = function () {
        this.y -= this.step;
    };

    Square.prototype.down = function () {
        this.y += this.step;
    };

    Square.prototype.draw = function () {
        this.node.style.left = this.x + "px";
        this.node.style.top = this.y + "px";
    };

    new Square(document.querySelector(".responsive-box"));

})