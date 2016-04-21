define(["require", "exports", "./Circle"], function (require, exports, Circle_1) {
    var ShapeType;
    (function (ShapeType) {
        ShapeType[ShapeType["Circle"] = 1] = "Circle";
        ShapeType[ShapeType["Rectangle"] = 2] = "Rectangle";
    })(ShapeType || (ShapeType = {}));
    ;
    var NUM_OF_SHAPES = 10;
    var Painter = (function () {
        function Painter(_paintBuffer) {
            this._paintBuffer = _paintBuffer;
            this._currShapeType = ShapeType.Circle;
        }
        Painter.prototype.drawAll = function () {
            //ctx.clearRect(0, 0, canvas.width, canvas.height);
            for (var i = 0; i < NUM_OF_SHAPES; i++) {
                this.drawShape();
            }
        };
        Painter.prototype.drawShape = function () {
            if (this._currShapeType === ShapeType.Circle) {
                var circle = new Circle_1.Circle();
                circle.Draw();
            }
        };
        Painter.prototype.Start = function () {
            var _this = this;
            this._interval = setInterval(function () {
                _this.drawAll();
            }, this._paintBuffer);
        };
        ;
        Painter.prototype.Stop = function () {
            clearInterval(this._interval);
            this._interval = null;
        };
        Painter.prototype.Toggle = function () {
            if (this._interval)
                this.Stop();
            else
                this.Start();
        };
        return Painter;
    })();
    exports.Painter = Painter;
});
//# sourceMappingURL=Painter.js.map