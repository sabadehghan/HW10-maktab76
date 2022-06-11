// what is the output of the code below and why?

let promise = new Promise(function(resolve, reject){
        resolve(1);
        setTimeout(() => resolve(2), 1000);
});
promise.then(alert);





// ANSWER

// The output is: 1.
// The executor should call only one resolve or one reject.
// The second call to resolve is ignored, because only the first call of
//  reject/resolve is taken into account. Further calls are ignored.