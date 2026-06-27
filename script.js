
let inputname = document.querySelector(".input")
let amount = document.querySelector(".input2")
let add = document.querySelector(".btn-add")
let left = document.querySelector(".left")
let right = document.querySelector(".right")
let output = document.querySelector(".output")


console.log(inputname);

add.addEventListener("click", ()=>{
    let reason= inputname.value

    let amounts = amount.value

    // left.textContent = reason
    // right.textContent = "₹" +amounts

    inputname.value = " "
    amount.value = " "

    let html= `<div class="output">
                    <div class="left">${reason}</div>
                    <div class="right">₹${amounts}</div>
                </div>`

    output.insertAdjacentHTML("afterend", html)
    

})
