let input = document.getElementById("input");
let check = document.getElementById("check");

function age(){
    let a = parseInt(input.value);
    if(a >= 18) {
        check.innerText = "You are eligible for voting"
        check.style.backgroundColor = "green";
    }
    else {
        check.innerText = "You are not eligible for voting"
        check.style.backgroundColor = "red";
    }
}