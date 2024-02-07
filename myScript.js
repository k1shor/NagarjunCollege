console.log("HELLO WORLD");
document.write('"HELLO WORLD"');
document.write("'HELLO WORLD'");


let a = 5
document.write("<h1>" + a + "</h1><br>")

a = 'kishor'
document.write("<h1>" + a + "</h1>")

function print(){
    // document.write("HELLO WORLD")
    // document.getElementById("heading").innerHTML = "Hello world"
    window.confirm("Hi there")
    // input
    // let a = prompt("Enter a message")
    // form input
    let a = document.getElementById("input").value
    document.write(a)
}