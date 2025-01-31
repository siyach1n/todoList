//updating code
// ctr =0;
// function counter(){
//     documSent.querySelectorAll(".todo")[2].innerHTML="Counter: "+ctr;
//     ctr=ctr+1;
// }
// setInterval(counter,1000)

//delete elements

// function deleteTodo(index){
//     const elements = document.getElementById("todo-"+index);
//     const parentElement= document.getElementById("todoParent")
//     parentElement.removeChild(elements)
// }

//adding elements

// const divEL = document.createElement("div");
// divEL.innerHTML="hi there"
// const parentEl= document.querySelector("body");
// parentEl.appendChild(divEL)

let ctr = 1;
function deleteTodo(index){
    // console.log('delete todo called'); 
    // const element =document.getElementById(index);
    // element.parentNode.removeChild(element)

    const elements = document.getElementById("todo-"+index);
    elements.parentNode.removeChild(elements);
    
}
function addTodo(){
    const getValueInput= document.querySelector("input");
    const inputValue=getValueInput.value;    

    const newDivEL=document.createElement("div");
    newDivEL.setAttribute("id","todo-"+ctr)

    newDivEL.innerHTML="<div>"+inputValue +'</div> <button onclick="deleteTodo('+ ctr +')">delete</button>';
    const parentEl=document.querySelector(".tododiv");
    parentEl.appendChild(newDivEL);
      ctr = ctr +1
    
}
