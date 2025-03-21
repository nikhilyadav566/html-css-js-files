// fetchAPI:->
//          The Fetch API is used in JavaScript to get data from a server or send data to a server. It is a modern way to make network requests (like loading data from an API).
//               OR
//         The Fetch API is a modern, promise-based way to make HTTP requests (GET, POST, etc.) in JavaScript. It allows you to fetch resources from servers asynchronously, making it a better alternative to XMLHttpRequest.

//  fetch means received or get something .
//  In JavaScript, fetch() is used to retrieve data from a server (like an API) over the internet. It helps us get things like weather updates, news, or user data from a database.

//1.  API of weather

async function weather(){
    let temp = await fetch('https://goweather.herokuapp.com/weather/MDS');
    let output = console.log(temp.json());   //  json :-> stands form JavaScript Object Notation.
}



//2.

async function api(){
let content = fetch('https://jsonplaceholder.typicode.com/posts/1');
content.then((response) => {
    console.log(response.status);
    console.log(response.ok);
    console.log(response.headers);
    return response.json();
  }).then((result) => console.log(result));

}

  // 3.

  async function utility(){
    let todo =  await fetch('https://jsonplaceholder.typicode.com/todos/1');
    let output = await todo.json();
    console.log(output);

}