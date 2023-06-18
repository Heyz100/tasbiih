
let initailValue = 0 ;

let back = document.querySelector("body")

let value = document.querySelector(".value")

let increment = document.querySelector(".increment")

let decrement = document.querySelector(".decrement")

let reset = document.querySelector(".reset")

// let buton = document.querySelector("button")

// buton.addEventListener("click", () =>{
//     if(initailValue == 5){
//         buton.style.color = "White"
//         buton.style.backgroundColor = "Gray"
//     }
//     else if (initailValue == 10){
//         buton.style.color = "white"
//         buton.style.backgroundColor = "rgb(154, 119, 190)"
//     }
// })

increment.addEventListener("click", () => {
    initailValue++;
    //change button 
    if(initailValue == 5){
        increment.style.color = "White"
        increment.style.backgroundColor = "rgb(211, 110, 43)"
    }
    else if (initailValue >= 10){
        increment.style.color = "white"
        increment.style.backgroundColor = "rgb(154, 119, 190)"
    }

     //change background color
    if(initailValue == 2){
        back.style.backgroundColor = "red"
       }
       else if (initailValue == 3){
        back.style.backgroundColor = "Green"
       }
       else if (initailValue == 4){
        back.style.backgroundColor = "yellow"
       }
       else if (initailValue == 5){
        back.style.backgroundColor = "orange"
       }
       else{
        back.style.backgroundColor = "rgb(100, 184, 184)"
       }


    //change value color as i was told to
    if(initailValue == 10){
        value.style.color = "blue"
       }
       else{
        value.style.color = "white"
       }
    value.innerHTML = initailValue;
   
})

decrement.addEventListener("click", () => {
    if(initailValue > 0){
    initailValue--;

    //change button color
    if(initailValue <= 10 ){
        decrement.style.color = "White"
        decrement.style.backgroundColor = "rgb(113, 155, 17)"
    }
    else if (initailValue > 10 ){
        decrement.style.color = "white"
        decrement.style.backgroundColor = "rgb(154, 119, 190)"
    }

    // change background color
    if(initailValue == 2){
        back.style.backgroundColor = "red"
       }
       else if (initailValue == 3){
        back.style.backgroundColor = "Green"
       }
       else if (initailValue == 4){
        back.style.backgroundColor = "yellow"
       }
       else if (initailValue == 5){
        back.style.backgroundColor = "orange"
       }
       else{
        back.style.backgroundColor = "rgb(100, 184, 184)"
       }


     //change valu color as i was per assing
    if(initailValue == 0){
        value.style.color = "Red"
    }
    else if (initailValue == 10){
        value.style.color = "Blue"
    }
    else{
        value.style.color = "white"
    }
    value.innerHTML = initailValue
    }
})

reset.addEventListener("click", () => {
    initailValue = 0;
    // change value color
    if(initailValue == 0){
        value.style.color = "Red"
    }
    value.innerHTML = initailValue;
})