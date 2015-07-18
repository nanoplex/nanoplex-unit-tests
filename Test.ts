declare var _result;

class Test {

    name: string;
    private _func: Function;
    private _view: View;

    constructor(name: string, testFunc: Function) {
        this.name = name;
        this._func = testFunc;
        this._view = new View(name);
    }

    run(): Test {
        var startTime = performance.now(),
            endTime: number;

        this._func();

        endTime = performance.now();

        this._view.setResult(endTime - startTime);

        _result = null;

        return this;
    }
}