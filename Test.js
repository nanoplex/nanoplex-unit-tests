var Test = (function () {
    function Test(name, promise) {
        this.name = name;
        this._promise = promise;
        this._view = new View(name);
    }
    Test.prototype.run = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var startTime = performance.now();
            _this._promise.then(function () {
                _this._view.setResult(true, performance.now() - startTime);
                resolve();
            }).catch(function () {
                _this._view.setResult(false, performance.now() - startTime);
                reject();
            });
        });
    };
    return Test;
})();
//# sourceMappingURL=Test.js.map