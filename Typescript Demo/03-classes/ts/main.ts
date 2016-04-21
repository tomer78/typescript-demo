

import {Painter} from "./Painter";




var painter:Painter = new Painter(10)
painter.Start();



var toggleBtn:HTMLElement = document.getElementById("toggle-btn");
toggleBtn.addEventListener("click",function ()
{
    painter.Toggle();
});


