
import {Circle} from "./Circle";


enum ShapeType {Circle = 1, Rectangle = 2};
const NUM_OF_SHAPES:number = 10;

export class Painter {



    private _interval:number;
    private _currShapeType:ShapeType= ShapeType.Circle;


    constructor(private _paintBuffer:number) {

    }


    private drawAll() {
        //ctx.clearRect(0, 0, canvas.width, canvas.height);

        for (var i = 0; i < NUM_OF_SHAPES; i++) {
          this.drawShape();
        }




    }


    private drawShape():void
    {
        if (this._currShapeType === ShapeType.Circle)
        {
            var circle:Circle = new Circle();
            circle.Draw();
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