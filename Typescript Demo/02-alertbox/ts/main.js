var AlertBox = (function () {
    function AlertBox() {
    }
    AlertBox.prototype.show = function () {
        //TypeScript uses '<>' to surround casts
        var str = document.getElementById("Text1").value;
        alert("TextBox Value is " + str);
    };
    return AlertBox;
})();
window.onload = function () {
    var msb = new AlertBox();
    var btn1 = document.getElementById("Button1");
    btn1.onclick = function () {
        msb.show();
    };
};
//# sourceMappingURL=main.js.map