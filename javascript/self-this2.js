var myObject = {
    foo: "bar",
    func: function() {
        var self = this;
        console.log("outer func:  this.foo = " + this.foo); // 1
        console.log("outer func:  self.foo = " + self.foo); // 1
        (function() {
            console.log("inner func:  this.foo = " + this.foo); // 2
            console.log("inner func:  self.foo = " + self.foo); // 1
        }());
    }
};
myObject.func();

/*
1. bar, because myObject.foo
2. undefined, because `this` doesn't refer to MyObject
*/