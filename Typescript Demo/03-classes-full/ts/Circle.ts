import {Shape} from "./Shape";
import {Utils} from "./utils";
export class Circle extends Shape{


    constructor(){
        super();
    }

    //<editor-fold desc="Public">
    public Draw() {

        var radius:number = Math.random() * 400;
        var width:number = this.canvas.width;
        var height:number = this.canvas.height;


        this.ctx.beginPath();

        //center cool
        //this.ctx.arc(this.canvas.width/2, this.canvas.height/2, radius/20, 0, 2 * Math.PI, false);

        this.ctx.arc(Math.random() * width, Math.random() * height, radius, 0, 2 * Math.PI); //radius/10   height/2
        this.ctx.fillStyle = Utils.getRandomColor();
        this.ctx.strokeStyle = Utils.getRandomColor();
        this.ctx.fill();
        this.ctx.lineWidth = 5;
        this.ctx.stroke();


    }
    //</editor-fold>

    //<editor-fold desc="Private">

    //</editor-fold>
}


//ctx.fillRect(20,20,150,100);