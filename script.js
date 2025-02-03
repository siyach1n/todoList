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
     //getting input from the text box and named as inputValue
    const value= document.querySelector("input").value;
        //create span and button element
    const spanEl = document.createElement("span");
    const buttonEl = document.createElement("button")
        //value to the elements 
    spanEl.innerHTML= value;
    buttonEl.innerHTML= "delete"

    // buttonEl.onclick=function(){
    //     deleteTodo('+ctr');
    // }
        //creating divel and append spanEl then buttonEl
    const divEl=document.createElement("div");
    divEl.setAttribute("id","todo-"+ctr)
    divEl.appendChild(spanEl);
    buttonEl.setAttribute("id","dl-btn")
    divEl.appendChild(buttonEl);
        //appending divEl to the body
    document.querySelector(".todolist").appendChild(divEl)


    ctr++
        // const inputValue=getValueInput.value;    

    //     //creating a div element and add id to it 
    // const newDivEL=document.createElement("div");
    // newDivEL.setAttribute("id","todo-"+ctr)
        
     
    // newDivEL.innerHTML="<div>"+inputValue +'</div> <button onclick="deleteTodo('+ ctr +')">delete</button>';
    // const parentEl=document.querySelector(".todolist");
    // parentEl.appendChild(newDivEL);
    //   ctr = ctr +1
    
}
