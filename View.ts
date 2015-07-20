class View {

    private _element: HTMLDivElement;

    constructor(name: string) {
        var el = document.createElement("div");
        el.className = "test layout horizontal center justified";
        el.innerHTML = "<p class='name'>" + name + "</p><section class='layout vertical center'><img alt='status'/><p class='time'></p></section>";

        el.setAttribute("untested", "");

        document.body.appendChild(el);

        this._element = el;
    }

    setResult(result:boolean, time: number) {
        var el = this._element,
            img = <HTMLScriptElement>el.querySelector("img"),
            t = <HTMLScriptElement>el.querySelector("p.time");

        el.removeAttribute("untested");
        el.removeAttribute("failed");
        el.removeAttribute("passed");

        img.src = (result) ? "/bower_components/nut/check.svg" : "/bower_components/nut/close.svg";

        t.innerHTML = time.toFixed(3) + " ms";
    }

}