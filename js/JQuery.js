$("#BotonPost").click(function(e){
    e.preventDefault();
    let todo = $("#Texto").val();
    let list = $("#Lista");
    let element = $('<input type = "checkbox" class="todo"/> ' +todo+ '<br>');
    list.append(element);
});

$("#BotonMark").click(function(e){
    e.preventDefault();
    let todos = $(".todo");
    for(let i = 0; i<todos.length; i++){
        todos[i].checked = true;
    }
});

$("#BotonClear").click(function(e){
    e.preventDefault();
    let todos = $(".todo");
    for(let i = 0; i < todos.length; i++){
        todos[i].checked = false;
    }
});

$("#BotonDelete").click(function(e){
    e.preventDefault();
    let list = $("#Lista");
    list.text("");
})