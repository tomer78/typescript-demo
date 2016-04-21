define(["require", "exports", "./utils"], function (require, exports, utils_1) {
    var Rectangle = (function () {
        function Rectangle() {
            this.canvas = document.getElementById("myCanvas");
            this.ctx = this.canvas.getContext("2d");
        }
        Object.defineProperty(Rectangle.prototype, "ctx", {
            get: function () {
                return this._ctx;
            },
            set: function (value) {
                this._ctx = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Rectangle.prototype, "canvas", {
            get: function () {
                return this._canvas;
            },
            set: function (value) {
                this._canvas = value;
            },
            enumerable: true,
            configurable: true
        });
        Rectangle.prototype.Draw = function () {
            /* this.ctx.beginPath();
             this.ctx.arc(Math.random()*1000, Math.random()*1000, Math.random()*100, 0, 2 * Math.PI);
             this.ctx.stroke();*/
            var width = this.canvas.width;
            var height = this.canvas.height;
            var rectX = Math.random() * width;
            var rectY = Math.random() * height;
            var rectW = Math.random() * width / 5;
            var rectH = Math.random() * height / 5;
            this.ctx.fillStyle = utils_1.Utils.getRandomColor();
            this.ctx.fillRect(rectX, rectY, rectW, rectH);
        };
        return Rectangle;
    })();
    exports.Rectangle = Rectangle;
});
//# sourceMappingURL=Rectangle.js.map