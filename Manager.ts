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

    run(): Manager {
        this._tests.forEach(t => { t.run() });

        return this;
    }
}