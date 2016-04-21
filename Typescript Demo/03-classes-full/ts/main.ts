

import {Circle} from "./Circle";
import {Rectangle} from "./Rectangle";
import {Painter} from "./Painter";


var painter = new Painter(100);
painter.Start();




var toggleBtn:HTMLElement = document.getElementById("toggle-btn");
toggleBtn.addEventListener("click",function ()
{
    painter.Toggle();
});


