class Test {

    name: string;
    private _promise: any;
    private _view: View;

    constructor(name: string, promise: any) {
        this.name = name;
        this._promise = promise;
        this._view = new View(name);
    }

    run(): Test {
        var startTime = performance.now();

        this._promise
            .then(() => this._view.setResult(true, performance.now() - startTime))
            .catch(() => this._view.setResult(false, performance.now() - startTime));
        
        return this;
    }
}