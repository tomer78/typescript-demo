/**
 * Created by tomer.a on 4/19/2016.
 */
export class Shape{
    private _canvas:HTMLCanvasElement;
    private _ctx:CanvasRenderingContext2D;

    //<editor-fold desc="Getters & Setters">
    get ctx():CanvasRenderingContext2D {
        return this._ctx;
    }
    set ctx(value:CanvasRenderingContext2D) {
        this._ctx = value;
    }
    get canvas():HTMLCanvasElement {
        return this._canvas;
    }
    set canvas(value:HTMLCanvasElement) {
        this._canvas = value;
    }
    //</editor-fold>

    //<editor-fold desc="Ctor">
    constructor() {
        this.canvas = <HTMLCanvasElement>document.getElementById("myCanvas");
        this.ctx = this.canvas.getContext("2d");
    }

}
