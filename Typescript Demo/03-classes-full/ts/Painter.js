define(["require", "exports", "./Rectangle", "./Circle"], function (require, exports, Rectangle_1, Circle_1) {
    var ShapeType;
    (function (ShapeType) {
        ShapeType[ShapeType["Circle"] = 1] = "Circle";
        ShapeType[ShapeType["Rectangle"] = 2] = "Rectangle";
    })(ShapeType || (ShapeType = {}));
    ;
    var numOfShapes = 5;
    var Painter = (function () {
        function Painter(_paintBuffer) {
            this._paintBuffer = _paintBuffer;
            this._currShapeType = ShapeType.Circle;
        }
        Painter.prototype.drawAll = function () {
            //ctx.clearRect(0, 0, canvas.width, canvas.height);
            for (var i = 0; i < numOfShapes; i++) {
                this.drawShape();
            }
        };
        Painter.prototype.drawShape = function () {
            var shape;
            if (this._currShapeType === ShapeType.Circle) {
                shape = new Circle_1.Circle();
            }
            if (this._currShapeType === ShapeType.Rectangle) {
                shape = new Rectangle_1.Rectangle();
            }
            shape.Draw();
            this.setNextShapeType();
        };
        Painter.prototype.unitionSample = function (shape) {
            console.log("unitionSample " + typeof shape);
        };
        Painter.prototype.setNextShapeType = function () {
            if (this._currShapeType === ShapeType.Circle)
                this._currShapeType = ShapeType.Rectangle;
            else {
                if (this._currShapeType === ShapeType.Rectangle)
                    this._currShapeType = ShapeType.Circle;
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