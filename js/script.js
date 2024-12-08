
let input = document.querySelector("#textarea");
let count = document.querySelector("#count");
let remaining = document.querySelector("#remaining");
const get = input.getAttribute("maxlength");

input.addEventListener("keyup", () => {
    count.innerHTML = input.value.length;
    remaining.innerHTML = get-input.value.length;


})

