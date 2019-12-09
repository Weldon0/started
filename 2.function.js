var foo = test()
var a = 'window'
function test() {
    console.log(a) // ? window
    this.a = 'function';
    var self = this
    var fa = self.a 
    return function () {
        console.log(this.a) // ? 
        console.log(self.a) // ?
        console.log(fa) // ?
    }
}
foo()