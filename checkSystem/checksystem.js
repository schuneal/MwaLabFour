const os = require('os');
var numberOfCores = os.cpus().length;
var totalMemory = os.totalmem;

var myPromise = new Promise(function(resolve, reject){
    if(numberOfCores < 2){
        reject("Processor is not supported!!!");
    }
    else if(totalMemory < 4e9){
        reject("The app needs at least 4GB of RAM!!!")
    }
    else{
        resolve("System checked successfully!!!");
    }
});

var checkSystem = function(){
    myPromise.then((data)=>{
        console.log(data);
    }).catch((err)=>{
        console.log(err);
    })
};
checkSystem();
console.log("Checking the system...");

