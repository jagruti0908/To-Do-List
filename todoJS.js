let btn = document.querySelector("button");
let inp = document.querySelector("input");
let ul = document.querySelector("ul");

btn.addEventListener("click", function () {
    

    let li = document.createElement("li");
    li.innerText = inp.value;
    if(inp.value==""){
        return;
    }
    let delBtn = document.createElement("button");
    delBtn.innerText = "Delete";
    delBtn.classList.add("del");

    li.appendChild(delBtn);

    ul.appendChild(li);
    inp.value = "";

})

ul.addEventListener("click", function(event){
    if(event.target.nodeName=="BUTTON"){
        event.target.parentElement.remove();
    }
    console.dir(event.target.nodeName);
   

})








