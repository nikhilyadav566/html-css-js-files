// Post Request :->
//             A POST request is used to send data to a server (e.g., adding a new user, submitting a form).

async function helper(){

    let options = {
        method: 'POST',
        body: JSON.stringify({
            title: 'Nikhil',
            body: 'This is body',
            userId: 2004,
            weight: 60,
        }),
        headers:{
           'Content-type': 'application/json; charset=UTF-8',
        },
    };
    
    let content = await fetch('https://jsonplaceholder.typicode.com/posts', options);
    let response = content.json();
    return response;
    
    }
    
    async function utility() {
        let ans = await helper();
        console.log(ans);
    }
    
    utility();
    