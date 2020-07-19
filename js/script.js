//Paso #1
let post = document.getElementById("BotonPost");
let clear = document.getElementById("BotonClear");
let mark = document.getElementById("BotonMark");
let del = document.getElementById("BotonDelete");

//Paso #2
post.addEventListener("click", TodoPost);
mark.addEventListener("click", TodoMark);
clear.addEventListener("click", TodoClear);
del.addEventListener("click", TodoDelete);

//Paso #3
function TodoPost(e){
    e.preventDefault();
    var todo = document.getElementById("Texto").value;
    var list = document.getElementById("Lista");

    let currentListHTML = list.innerHTML;
    list.innerHTML = currentListHTML + '<input type = "checkbox" name="todo" /> ' + todo + '<br>';
}

function TodoMark(e){
    e.preventDefault();
    var todos = document.getElementsByName("todo");
    for(var i = 0; i < todos.length; i++){
        todos[i].checked = true;
    }
}

function TodoClear(e){
    e.preventDefault();
    var todos = document.getElementsByName("todo");
    for(var i = 0; i < todos.length; i++){
        todos[i].checked = false;
    }
}

function TodoDelete(e){
    e.preventDefault();
    var list = document.getElementById("Lista");
    list.innerHTML = "";
}
