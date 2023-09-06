function receivesAFunction(callback){
callback();
}

function returnsANamedFunction (){
 function namedFunction(){
   console.log ("Tenzin");
 }

 return namedFunction;
}

function returnsAnAnonymousFunction(){
    return function(){
        console.log("name");
    };  
}

const returnedFunction = returnsAnanonymousFunction();

returnedFunction();