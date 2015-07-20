class View {

    private _element: HTMLDivElement;

    constructor(name: string) {
        var el = document.createElement("div");
        el.className = "test layout horizontal center justified";
        el.innerHTML = "<p class='name'>" + name + "</p><section style='min-width:44px' class='layout vertical center'><img src='http://www.ramtrucks.com/shared/htmlcolorizer/images/colorizer/spinner_animation02.gif' alt='status' width='20'/><p class='time'></p></section>";

        el.setAttribute("untested", "");

        document.body.appendChild(el);

        this._element = el;
    }

    setResult(result: boolean, time: number) {
        var el = this._element,
            img = <HTMLScriptElement>el.querySelector("img"),
            t = <HTMLScriptElement>el.querySelector("p.time");

        el.removeAttribute("untested");
        el.removeAttribute("failed");
        el.removeAttribute("passed");

        img.src = (result)
            ? "/bower_components/nanoplex-unit-tests/check.svg"
            : "/bower_components/nanoplex-unit-tests/close.svg";

        t.innerHTML = time.toFixed(3) + " ms";
    }

}