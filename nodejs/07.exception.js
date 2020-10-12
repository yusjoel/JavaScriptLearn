function foo() {
    addlert("Allo?")
}

function bar(n) {
    if(isNaN(n))
        throw "Not a number";

    if(n > 10)
        throw "n > 10";

    if(n < 0)
        throw "n < 0"

    return n * n;
}

function baz() {
    try{
        foo()
    } catch (e) {
        throw e
    }
}

function main() {
    try {
        foo();
    } catch (e) {
        console.log(e);
    }

    try {
        bar("one");
    } catch (e) {
        console.log(e);
    }

    try {
       baz()
    } catch (e) {
        console.log(e);
    }
}

main();
//foo()
//bar()