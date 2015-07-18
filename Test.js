var Test = (function () {
    function Test(name, testFunc) {
        this.name = name;
        this._func = testFunc;
        this._view = new View(name);
    }
    Test.prototype.run = function () {
        var startTime = performance.now(), endTime;
        this._func();
        endTime = performance.now();
        this._view.setResult(endTime - startTime);
        _result = null;
        return this;
    };
    return Test;
})();
//# sourceMappingURL=Test.js.map