export class Rectangle{
    private _canvas:HTMLCanvasElement;
    private _ctx:CanvasRenderingContext2D;


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


    constructor(){
        this.canvas = <HTMLCanvasElement>document.getElementById("myCanvas");
        this.ctx = this.canvas.getContext("2d");
    }

    public Draw(){

        /* this.ctx.beginPath();
         this.ctx.arc(Math.random()*1000, Math.random()*1000, Math.random()*100, 0, 2 * Math.PI);
         this.ctx.stroke();*/

        var width:number = this.canvas.width;
        var height:number = this.canvas.height ;


        var rectX:number = Math.random()*width;
        var rectY:number = Math.random()*height;
        var rectW:number = Math.random()*width/5;
        var rectH:number = Math.random()*height/5;

        this.ctx.fillStyle= this.getRandomColor();
        this.ctx.fillRect(rectX,rectY,rectW,rectH);


    }

    private  getRandomColor():string {
        var letters = '0123456789ABCDEF'.split('');
        var color = '#';
        for (var i = 0; i < 6; i++ ) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

}