//   Type 3. Getting the resolved Values with await

//  To obtain the resolved values, you need to use await inside the async function:

async function utility() {
    let Patnatemp = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Patna temperature is above 25 degree");
        }, 4000);
    });

    let Bhabuatemp = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Bhabua temperature is above 30 degree");
        }, 5000);
    });

    let PT = await Patnatemp;  // Waits 4 seconds, then gets the resolved value
    let BT = await Bhabuatemp; // Waits another 5 seconds after the first completes

    return [PT, BT];           // Returns the resolved values
}

utility().then(result => console.log(result));
// Total execution time: 9 seconds (4s + 5s)

//  Note:-> 
//  In this sequential approach, the second await waits for the first to complete. The total time becomes 9 seconds.


//  Type 4th. Parallel Version Using Promise.all() i.e is faster.

async function utility() {
    let Patnatemp = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Patna temperature is above 25 degree");
        }, 4000);
    });

    let Bhabuatemp = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Bhabua temperature is above 30 degree");
        }, 5000);
    });

    let [PT, BT] = await Promise.all([Patnatemp, Bhabuatemp]); // Runs both promises in parallel

    return [PT, BT];
}

utility().then(result => console.log(result));
// Total execution time: 5 seconds (max of 4s and 5s)


//  Promise.all() takes an array of Promises and returns a new Promise that resolves when all of them resolve.
//  This allows both Promises to run in parallel. The overall wait time is the maximum of the two durations (i.e., 5 seconds).