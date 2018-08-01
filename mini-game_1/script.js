//setup
let board = document.querySelector(".board")
let emoji = '😂';
let index = 12;
let objective = '💸';
let objectiveIndex = 0;
while(objectiveIndex==index){
  objectiveIndex = Math.floor(Math.random()*25);
}

for(let i=0; i<25; i++){
  let div = document.createElement("div");
  div.classList.add("cell");
  board.appendChild(div);
}

let startbtn = document.createElement("button");
startbtn.classList.add("start");
startbtn.innerText = "Start";
board.querySelectorAll("div")[12].appendChild(startbtn);

startbtn.addEventListener('click', ()=>{

  board.querySelectorAll("div")[12].innerText = emoji;
  board.querySelectorAll("div")[objectiveIndex].innerText = objective;

  //game
  document.addEventListener('keydown', (event)=>{
    //board.querySelectorAll("div")[0].innerText = event.keyCode;
    //remove penguin from old index
    board.querySelectorAll("div")[index].innerText = "";
    //add emoji to the new index  
    if(ok(index, event.keyCode)){   
      if(event.keyCode == 37){
        index--;
      }
      else if(event.keyCode == 39){
        index++;
      }
      else if(event.keyCode == 38){
        index-=5;
      }
      else if(event.keyCode == 40){
        index+=5;
      }

      if(index==objectiveIndex){
        while(objectiveIndex==index){
          objectiveIndex = Math.floor(Math.random()*25);
        }
        board.querySelectorAll("div")[objectiveIndex].innerText = objective;
      }
    } 
    board.querySelectorAll("div")[index].innerText = emoji;
  });

  let ok = (place, command)=>{
    if(command==37){
      if(place%5==0) return false;
      return true;
    }
    else if(command==39){
      if((place+1)%5==0) return false;
      return true;
    }
    else if(command==38){
      if(place<5) return false;
      return true;
    }
    else if(command==40){
      if(place>19) return false;
      return true;
    }
  };
});
