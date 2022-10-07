var parent = {
    foo() {
        console.log('Hello from the Parent');
    }
}

var child = {
    foo() {
        super.foo();
        console.log('Hello from the Child');
    }
}

Object.setPrototypeOf(child, parent);
child.foo()