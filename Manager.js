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
    Manager.prototype.run = function () {
        this._tests.forEach(function (t) {
            t.run();
        });
        return this;
    };
    return Manager;
})();
//# sourceMappingURL=Manager.js.map