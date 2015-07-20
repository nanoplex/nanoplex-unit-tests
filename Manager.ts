class Manager {

    private _tests: Test[];

    constructor() {
        document.addEventListener("click",() => {
            location.href = location.href;
        });
    }

    tests(tests: Test[]): Manager {
        this._tests = tests;

        return this;
    }

    run(index = 0) {
        return new Promise((resolve, reject) =>
            (this._tests.length - 1 >= index)
                ? this._tests[index].run()
                    .then(this.run(index + 1)
                        .then(resolve))
                    .catch(reject)
                : resolve());
    }
}