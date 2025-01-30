//updating code
// ctr =0;
// function counter(){
//     documSent.querySelectorAll(".todo")[2].innerHTML="Counter: "+ctr;
//     ctr=ctr+1;
// }
// setInterval(counter,1000)

//delete elements

function deleteTodo(index){
    const elements = document.getElementById("todo-"+index);
    const parentElement= document.getElementById("todoParent")
    parentElement.removeChild(elements)
}

//adding elements

const divEL = document.createElement("div");
divEL.innerHTML="hi there"
const parentEl= document.querySelector("body");
parentEl.appendChild(divEL)

