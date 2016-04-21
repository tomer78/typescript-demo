import {Rectangle} from "./Rectangle";
import {Circle} from "./Circle";
import {IShape} from "./IShape";



enum ShapeType {Circle = 1, Rectangle = 2};
const numOfShapes:number = 5;

export class Painter {


    private _interval:number;
    private _currShapeType:ShapeType= ShapeType.Circle;


    constructor(private _paintBuffer:number) {

    }

    private drawAll() {
        //ctx.clearRect(0, 0, canvas.width, canvas.height);

        for (var i = 0; i < numOfShapes; i++) {
          this.drawShape();
        }
   }

    private drawShape():void
    {
        var shape:IShape;
        if (this._currShapeType === ShapeType.Circle)
        {
            shape  = new Circle();
        }
        if (this._currShapeType === ShapeType.Rectangle)
        {
            shape = new Rectangle();
        }
        shape.Draw();
        this.setNextShapeType();



    }

    private unitionSample(shape:Circle|Rectangle){
        console.log("unitionSample " + typeof shape );


    }

    private setNextShapeType(){
        if (this._currShapeType === ShapeType.Circle)
            this._currShapeType = ShapeType.Rectangle;
        else{
            if (this._currShapeType === ShapeType.Rectangle)
                this._currShapeType = ShapeType.Circle;

        }

    }


    Start():void {

        this._interval = setInterval(()=> {
            this.drawAll();
        }, this._paintBuffer);
    };

    Stop():void {
        clearInterval(this._interval);
        this._interval = null;
    }

    Toggle():void {
        if (this._interval)
            this.Stop();
        else
            this.Start();

    }





}