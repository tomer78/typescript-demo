define(["require", "exports"], function (require, exports) {
    /**
     * Created by tomer.a on 4/19/2016.
     */
    var Shape = (function () {
        //</editor-fold>
        //<editor-fold desc="Ctor">
        function Shape() {
            this.canvas = document.getElementById("myCanvas");
            this.ctx = this.canvas.getContext("2d");
        }
        Object.defineProperty(Shape.prototype, "ctx", {
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
        Object.defineProperty(Shape.prototype, "canvas", {
            get: function () {
                return this._canvas;
            },
            set: function (value) {
                this._canvas = value;
            },
            enumerable: true,
            configurable: true
        });
        return Shape;
    })();
    exports.Shape = Shape;
});
//# sourceMappingURL=Shape.js.map