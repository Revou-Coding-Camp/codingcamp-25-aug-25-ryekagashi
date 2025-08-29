console.log("Hello, world!");

//greet();

function greet() {
    let username = prompt("Tolong masukkan namamu:");
    document.getElementById('username').innerText = username;
}