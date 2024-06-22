let defuser = document.getElementById("defuser");
let timer = document.getElementById("timer");

let counter = 10
timer.textContent = counter;
let intervalId = setInterval(function() {
    if (counter > 0) {
        counter -= 1
        timer.textContent = counter
    } else {
        timer.textContent = "BOOM";
        clearInterval(intervalId)
    }
}, 1000);

defuser.addEventListener("keydown", function(event) {
    let defuserValue = defuser.value;
    if (defuserValue === "defuse" && event.key === "Enter" && counter !== 0) {
        timer.textContent = "You did it!"
        clearInterval(intervalId)
    }
})