let addBtn = document.querySelector("button");
let input = document.querySelector("input");

addBtn.addEventListener('click', ()=>{
    let btn = document.createElement("button");
    btn.innerText = input.value;
    btn.classList.add("todo-item");
    document.body.appendChild(btn);

    btn.addEventListener('click', ()=>{
        document.body.removeChild(btn);
    });

    input.value = "";
});