let playerText = document.getElementById('playerText')
let restartBtn = document.getElementById('restartBtn')
let boxes = Array.from(document.getElementsByClassName('box'))
let gameboard = document.getElementById('gameboard')
let WinnierMatrix = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
console.log(boxes)
let palyerX = "X"
let palyerY ="O"
let spaces = Array(9).fill(null)

let currentPlayer =palyerX

function addPlayer(e) {
    
    e.target.innerText = currentPlayer
    
    currentPlayer = current(currentPlayer)
    let box = document.getElementById(e.target.id)
   
    box.removeEventListener('click',addPlayer)
    spaces[e.currentTarget.id]=e.currentTarget.innerText
   const a = checkWin()
   if(a){
    playerText.innerText=`${e.currentTarget.innerText} win`
    console.log(a)
  
   }
   
    
   
}

function checkWin() {

    for(const condition of WinnierMatrix){
        let [a,b,c] = condition
        
        if(spaces[a] && (spaces[a] == spaces[b] && spaces[a] == spaces[c])){
            console.log(spaces[c],spaces[a],spaces[b])
            
            return spaces[a]
        }
    }
    return false
}


function current(player) {
    if(player==palyerX){
        return palyerY
    }else{
        return palyerX
    }
}

    function startGame (){
        boxes.forEach(box => box.addEventListener('click',addPlayer))
    }
    startGame()
   function a(){
        boxes.forEach(box => {
            box.innerHTML=""
        })
        startGame()
       console.log(boxes)
        spaces.fill(null)
       
   }
    restartBtn.addEventListener('click',a)

    







