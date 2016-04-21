    export class Circle {



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
        //</editor-fold>

        //<editor-fold desc="Public">
        public Draw() {

            var radius:number = Math.random() * 300;
            var width:number = this.canvas.width;
            var height:number = this.canvas.height;


            this.ctx.beginPath();

            //center cool
            this.ctx.arc(this.canvas.width/2, this.canvas.height/2, radius/20, 0, 2 * Math.PI, false);

            this.ctx.arc(Math.random() * width, Math.random() * height/2, radius/10, 0, 2 * Math.PI); //radius/100   height/2
            this.ctx.fillStyle = this.getRandomColor();
            this.ctx.strokeStyle = this.getRandomColor();
            this.ctx.fill();
            this.ctx.lineWidth = 5;
            this.ctx.stroke();




        }
        //</editor-fold>

        //<editor-fold desc="Private">
        private  getRandomColor():string {
            var letters = '0123456789ABCDEF'.split('');
            var color = '#';
            for (var i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }
        private _canvas:HTMLCanvasElement;
        private _ctx:CanvasRenderingContext2D;
        //</editor-fold>
    }


    //ctx.fillRect(20,20,150,100);