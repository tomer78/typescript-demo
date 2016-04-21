define(["require", "exports"], function (require, exports) {
    var Circle = (function () {
        //</editor-fold>
        //<editor-fold desc="Ctor">
        function Circle() {
            this.canvas = document.getElementById("myCanvas");
            this.ctx = this.canvas.getContext("2d");
        }
        Object.defineProperty(Circle.prototype, "ctx", {
            //<editor-fold desc="Getters & Setters">
            get: function () {
                return this._ctx;
            },
            set: function (value) {
                this._ctx = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Circle.prototype, "canvas", {
            get: function () {
                return this._canvas;
            },
            set: function (value) {
                this._canvas = value;
            },
            enumerable: true,
            configurable: true
        });
        //</editor-fold>
        //<editor-fold desc="Public">
        Circle.prototype.Draw = function () {
            var radius = Math.random() * 300;
            var width = this.canvas.width;
            var height = this.canvas.height;
            this.ctx.beginPath();
            //center cool
            this.ctx.arc(this.canvas.width / 2, this.canvas.height / 2, radius / 20, 0, 2 * Math.PI, false);
            this.ctx.arc(Math.random() * width, Math.random() * height / 2, radius / 10, 0, 2 * Math.PI); //radius/100   height/2
            this.ctx.fillStyle = this.getRandomColor();
            this.ctx.strokeStyle = this.getRandomColor();
            this.ctx.fill();
            this.ctx.lineWidth = 5;
            this.ctx.stroke();
        };
        //</editor-fold>
        //<editor-fold desc="Private">
        Circle.prototype.getRandomColor = function () {
            var letters = '0123456789ABCDEF'.split('');
            var color = '#';
            for (var i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        };
        return Circle;
    })();
    exports.Circle = Circle;
});
//ctx.fillRect(20,20,150,100); 
//# sourceMappingURL=Circle.js.map