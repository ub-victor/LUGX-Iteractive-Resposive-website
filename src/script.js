window.onload = function() {
     genWrapper(function* generator(){
        var tweets = yield $.getJSON("data/tweets.json");
        console.log(tweets);
        var friends = yield $.getJSON('data/friends.json');
        console.log(friends);
        var ytVids = yield $.getJSON('data/youtube.json');
        console.log(ytVids);
    });


function genWrapper(generator){
    // set up generator
    var myGen = generator();

    // create function to handle the yielded value  
    function handle(yielded){
        if(!yielded.done){
            yielded.value.then(function(data){
                return handle(myGen.next(data));
            });
        }
    }//end handle
    // return function , passing in myGen.next
    return handle(myGen.next()); 
}// end genWrapper

};