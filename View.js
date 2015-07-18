var View = (function () {
    function View(name) {
        var el = document.createElement("div");
        el.className = "test layout horizontal center justified";
        el.innerHTML = "<p class='name'>" + name + "</p><section class='layout vertical center'><img alt='status'/><p class='time'></p></section>";
        el.setAttribute("untested", "");
        document.body.appendChild(el);
        this._element = el;
    }
    View.prototype.setResult = function (time) {
        var el = this._element, img = el.querySelector("img"), t = el.querySelector("p.time");
        el.removeAttribute("untested");
        el.removeAttribute("failed");
        el.removeAttribute("passed");
        img.src = (_result) ? "/nut/check.svg" : "/nut/close.svg";
        t.innerHTML = time.toFixed(3) + " ms";
    };
    return View;
})();
//# sourceMappingURL=View.js.map