class AlertBox
{


    show()
    {
        //TypeScript uses '<>' to surround casts
        var str = (<HTMLTextAreaElement>document.getElementById("Text1")).value;
        alert("TextBox Value is " +str);




    }
}


window.onload = () =>
{
    var msb = new AlertBox();
    var btn1:HTMLElement = document.getElementById("Button1");
    btn1.onclick= function ()
    {
        msb.show();
    }
};