//optimize code

let todos=[];//state

// component function 
function addTodoComponent(todos,index){
   const div1 =  document.createElement('div');
   const h1=  document.createElement('h1');
   const todoDelButton = document.createElement('button')
   todoDelButton.innerHTML="Deletetodo"
   
   todoDelButton.setAttribute("onClick","deleteTodo(" + index+ ")");

   h1.innerHTML=todos.title
   div1.append(h1);
   div1.append(todoDelButton    )
   
   
   return div1;   
}

//function that modify state
function addTodo(){
    const input= document.querySelector("input");
    const todotext = input.value.trim()

    if(todotext===""){
        alert("todo is empty");
        return;
    }

    todos.push({title:todotext});

    render()
}

function delTodo(){
    todos.splice(0,1)

    render()
}

function deleteTodo(index){
    todos.splice(index,1);
    render();
}


//render   function
function render(){
        document.querySelector(".todoList").innerHTML="";
    
        for(let i=0;i< todos.length;i++){
        const element = addTodoComponent(todos[i],i)
        document.querySelector(".todoList").appendChild(element)
    }
    console.log(todos);
    
}