var Test = (function () {
    function Test(name, promise) {
        this.name = name;
        this._promise = promise;
        this._view = new View(name);
    }
    Test.prototype.run = function () {
        var _this = this;
        var startTime = performance.now();
        this._promise.then(function () { return _this._view.setResult(true, performance.now() - startTime); }).catch(function () { return _this._view.setResult(false, performance.now() - startTime); });
        return this;
    };
    return Test;
})();
//# sourceMappingURL=Test.js.map