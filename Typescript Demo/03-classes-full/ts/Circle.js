var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./Shape", "./utils"], function (require, exports, Shape_1, utils_1) {
    var Circle = (function (_super) {
        __extends(Circle, _super);
        function Circle() {
            _super.call(this);
        }
        //<editor-fold desc="Public">
        Circle.prototype.Draw = function () {
            var radius = Math.random() * 400;
            var width = this.canvas.width;
            var height = this.canvas.height;
            this.ctx.beginPath();
            //center cool
            //this.ctx.arc(this.canvas.width/2, this.canvas.height/2, radius/20, 0, 2 * Math.PI, false);
            this.ctx.arc(Math.random() * width, Math.random() * height, radius, 0, 2 * Math.PI); //radius/10   height/2
            this.ctx.fillStyle = utils_1.Utils.getRandomColor();
            this.ctx.strokeStyle = utils_1.Utils.getRandomColor();
            this.ctx.fill();
            this.ctx.lineWidth = 5;
            this.ctx.stroke();
        };
        return Circle;
    })(Shape_1.Shape);
    exports.Circle = Circle;
});
//ctx.fillRect(20,20,150,100); 
//# sourceMappingURL=Circle.js.map