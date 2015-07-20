var Manager = (function () {
    function Manager() {
        document.addEventListener("click", function () {
            location.href = location.href;
        });
    }
    Manager.prototype.tests = function (tests) {
        this._tests = tests;
        return this;
    };
    Manager.prototype.run = function (index) {
        var _this = this;
        if (index === void 0) { index = 0; }
        return new Promise(function (resolve, reject) { return (_this._tests.length - 1 >= index) ? _this._tests[index].run().then(_this.run(index + 1).then(resolve)).catch(reject) : resolve(); });
    };
    return Manager;
})();
//# sourceMappingURL=Manager.js.map