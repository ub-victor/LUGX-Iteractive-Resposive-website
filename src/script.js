window.onload = function() {
    function* gen(){
        var x = yield  'pear' ;
        var y = yield 'banana';
        var z = yield 'apple';
        return x + y + z;
    }
    var myGen = gen();
    console.log(myGen.next());
    console.log(myGen.next(10));
    console.log(myGen.next(5));
    console.log(myGen.next(3)); 
    
}