define(["require", "exports", "./Painter"], function (require, exports, Painter_1) {
    var painter = new Painter_1.Painter(10);
    painter.Start();
    var toggleBtn = document.getElementById("toggle-btn");
    toggleBtn.addEventListener("click", function () {
        painter.Toggle();
    });
});
//# sourceMappingURL=main.js.map