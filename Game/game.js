
let Container = document.getElementById('Container');
let items=document.querySelectorAll(".item");

var cell = new Array(9);

for (var i=0; i<9; i++) {
cell[i] = 0;
}

 
 
function Place(value) {
  if (cell[value] == 0) {
    items[value].innerHTML="X";
    cell[value] = 1;
    if (Check() == true) {
    
	let result = document.createElement("h1")
    result.innerText ="Congrats!!! You won"
	Container.appendChild(result)
    GameOver();
    }
    else {
      CheckNobody();
      ComputerTurn();
      CheckNobody();
    }
  }
}

function ComputerTurn() {
   

  for (i= Math.floor(Math.random()*8); i<9; i++) {
    if (cell[i] == 0){
	PutHere = i;
	   }
     }
  items[PutHere].innerHTML="O";
   cell[PutHere] = 2;
  
  if (Check() == true) {
    let result = document.createElement("h1")
    result.innerText ="Your opponent won"
	Container.appendChild(result)
    GameOver();
  }
 
}

function Check() {
  if (cell[0] == cell[1] && cell[1] == cell[2] && cell[2] > 0) 
    return true; 
  if (cell[3] == cell[4] && cell[4] == cell[5] && cell[5] > 0) 
    return true;
  if (cell[6] == cell[7] && cell[7] == cell[8] && cell[8] > 0) 
    return true;
  if (cell[6] == cell[3] && cell[3] == cell[0] && cell[0] > 0)
    return true;
  if (cell[7] == cell[4] && cell[4] == cell[1] && cell[1] > 0) 
    return true;
  if (cell[8] == cell[5] && cell[5] == cell[2] && cell[2] > 0) 
    return true;
  if (cell[6] == cell[4] && cell[4] == cell[2] && cell[2] > 0) 
    return true;
  if (cell[0] == cell[4] && cell[4] == cell[8] && cell[8] > 0)
    return true;
}

function CheckNobody() {
  no = false;
  for (i=0; i<9; i++) 

  if (cell[i] == 0) {
  no = true;
  }
}

function GameOver() {
  for (i=0; i<9; i++) 
  {
    cell[i] = 0;
    items[i].innerHTML='';
  }
}
