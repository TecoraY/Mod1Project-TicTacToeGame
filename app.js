//on click functions for x and o image of x or o wil populate to screen 
//if x button or O button pressed
    //on click function=>
    //document.queryselector for images
    alert ("Welcome to TicTacToe. This is a two-player game. Player one is'X' and player two is 'O'. Simply choose a box and press your corresponding button. The first to get 3 in a row, column, or diagonal wins that round. The best of 5 wins! Remember to track your score at the bottom of the page! Let's begin!")
    const gameInstructions=()=>{
        let gameInfo=document.querySelector('.gameInfo')
        gameInfo.classList.toggle('initiateInfo')
    }
    
    let printX= document.querySelector('.playerox')
    let printO=document.querySelector('.playerox')
    //btn1
    let buttonX1= document.getElementById('btnx1')
    let buttonO1=document.getElementById('btno1')
    buttonX1.addEventListener("click", function (){
        printX.textContent="Player X";
        console.log("print player x")
    })
    buttonO1.addEventListener("click", function(){
        printO.textContent="Player O";
        console.log("print player o")
    })
    //btn2
    let buttonX2= document.getElementById('btnx2')
    let buttonO2=document.getElementById('btno2')
    buttonX2.addEventListener("click", function (){
        printX.textContent="Player X";
        console.log("print player x")
    })
    buttonO2.addEventListener("click", function(){
        printO.textContent="Player O";
        console.log("print player o")
    })
    //btn3
    let buttonX3= document.getElementById('btnx3')
    let buttonO3=document.getElementById('btno3')
    buttonX3.addEventListener("click", function (){
        printX.textContent="Player X";
        console.log("print player x")
    })
    buttonO3.addEventListener("click", function(){
        printO.textContent="Player O";
        console.log("print player o")
    })
    //btn4
    let buttonX4= document.getElementById('btnx4')
    let buttonO4=document.getElementById('btno4')
    buttonX4.addEventListener("click", function (){
        printX.textContent="Player X";
        console.log("print player x")
    })
    buttonO4.addEventListener("click", function(){
        printO.textContent="Player O";
        console.log("print player o")
    })
    //btn5
    let buttonX5= document.getElementById('btnx5')
    let buttonO5=document.getElementById('btno5')
    buttonX5.addEventListener("click", function (){
        printX.textContent="Player X";
        console.log("print player x")
    })
    buttonO5.addEventListener("click", function(){
        printO.textContent="Player O";
        console.log("print player o")
    })
    //btn6
    let buttonX6= document.getElementById('btnx6')
    let buttonO6=document.getElementById('btno6')
    buttonX6.addEventListener("click", function (){
        printX.textContent="Player X";
        console.log("print player x")
    })
    buttonO6.addEventListener("click", function(){
        printO.textContent="Player O";
        console.log("print player o")
    })
    //btn7
    let buttonX7= document.getElementById('btnx7')
    let buttonO7=document.getElementById('btno7')
    buttonX7.addEventListener("click", function (){
        printX.textContent="Player X";
        console.log("print player x")
    })
    buttonO7.addEventListener("click", function(){
        printO.textContent="Player O";
        console.log("print player o")
    })
    //btn8
    let buttonX8= document.getElementById('btnx8')
    let buttonO8=document.getElementById('btno8')
    buttonX8.addEventListener("click", function (){
        printX.textContent="Player X";
        console.log("print player x")
    })
    buttonO8.addEventListener("click", function(){
        printO.textContent="Player O";
        console.log("print player o")
    })
    //btn9
    let buttonX9= document.getElementById('btnx9')
    let buttonO9=document.getElementById('btno9')
    buttonX9.addEventListener("click", function (){
        printX.textContent="Player X";
        console.log("print player x")
    })
    buttonO9.addEventListener("click", function(){
        printO.textContent="Player O";
        console.log("print player o")
    })
  
    const playerX2= ()=>{
        let showX=document.querySelector('.playerx');
        showX.classList.toggle('initiatepx');
    }
    const playerX3= ()=>{
        let showX=document.querySelector('.playerx');
        showX.classList.toggle('initiatepx');
    }
    
    
    
    //display player x or o
    
    
    const displayX= () =>{
        let pickX= document.querySelector('.writeX');
        pickX.classList.toggle('initiateX');
         
    }
    const displayX2= () =>{
        let pickX= document.querySelector('.writeX2');
        pickX.classList.toggle('initiateX');
           
    }
    const displayX3= () =>{
        let pickX= document.querySelector('.writeX3');
        pickX.classList.toggle('initiateX');
         
        
    }
    const displayX4= () =>{
        let pickX= document.querySelector('.writeX4');
        pickX.classList.toggle('initiateX');
         
    }
    const displayX5= () =>{
        let pickX= document.querySelector('.writeX5');
        pickX.classList.toggle('initiateX');
         
    }
    const displayX6= () =>{
        let pickX= document.querySelector('.writeX6');
        pickX.classList.toggle('initiateX');
         
    }
    const displayX7= () =>{
        let pickX= document.querySelector('.writeX7');
        pickX.classList.toggle('initiateX');
         
    }
    const displayX8= () =>{
        let pickX= document.querySelector('.writeX8');
        pickX.classList.toggle('initiateX');
         
    }
    const displayX9= () =>{
        let pickX= document.querySelector('.writeX9');
        pickX.classList.toggle('initiateX');
         
    }
    const displayO= () =>{
        let pickO= document.querySelector('.writeO');
        pickO.classList.toggle('initiateO');
        
    }
    const displayO2= () =>{
        let pickO= document.querySelector('.writeO2');
        pickO.classList.toggle('initiateO');
        
    }
    const displayO3= () =>{
        let pickO= document.querySelector('.writeO3');
        pickO.classList.toggle('initiateO');
        
    }
    const displayO4= () =>{
        let pickO= document.querySelector('.writeO4');
        pickO.classList.toggle('initiateO');
        
    }
    const displayO5= () =>{
        let pickO= document.querySelector('.writeO5');
        pickO.classList.toggle('initiateO');
        
    }
    const displayO6= () =>{
        let pickO= document.querySelector('.writeO6');
        pickO.classList.toggle('initiateO');
        
    }
    const displayO7= () =>{
        let pickO= document.querySelector('.writeO7');
        pickO.classList.toggle('initiateO');
        
    }
    const displayO8= () =>{
        let pickO= document.querySelector('.writeO8');
        pickO.classList.toggle('initiateO');
        
    }
    const displayO9= () =>{
        let pickO= document.querySelector('.writeO9');
        pickO.classList.toggle('initiateO');
    }
//win text

const winner= document.querySelector('.winText');


//win combinations
function rowOne() {
    let box1 = document.getElementById("box1");
    let box2 = document.getElementById("box2");
    let box3 = document.getElementById("box3");
   // let texto=document.querySelector('.writeo').innerText;
   if (box1.innerText===box2.innerText && box2.innerText===box3.innerText){
        winner.innerText="YOU WON!" ;

            
    }             
}
function rowTwo(){
    let box4 = document.getElementById("box4");
    let box5 = document.getElementById("box5");
    let box6 = document.getElementById("box6");
    if (box4.innerText===box5.innerText && box5.innerText===box6.innerText){
        winner.innerText="YOU WON!";
     }
}
function rowThree(){
    let box7 = document.getElementById("box7");
    let box8 = document.getElementById("box8");
    let box9 = document.getElementById("box9");
    if (box7.innerText===box8.innerText && box8.innerText===box9.innerText){
        winner.innerText="YOU WON!";
     }
}
function colOne(){
    let box1 = document.getElementById("box1");
    let box4 = document.getElementById("box4");
    let box7 = document.getElementById("box7");
    if (box1.innerText===box4.innerText && box4.innerText===box7.innerText){
        winner.innerText="YOU WON!";
    }
}
function colTwo(){
    let box2 = document.getElementById("box2");
    let box5 = document.getElementById("box5");
    let box8 = document.getElementById("box8");
    if (box2.innerText===box5.innerText && box5.innerText===box8.innerText){
        winner.innerText="YOU WON!";
   }
}
function colThree(){
    let box3 = document.getElementById("box3");
    let box6 = document.getElementById("box6");
    let box9 = document.getElementById("box9");
    if (box3.innerText===box6.innerText && box6.innerText===box9.innerText){
        winner.innerText="YOU WON!";
    }
}

function diagOne(){
    let box1 = document.getElementById("box1");
    let box5 = document.getElementById("box5");
    let box9 = document.getElementById("box9");
    if (box1.innerText===box5.innerText && box5.innerText===box9.innerText){
        winner.innerText="YOU WON!";
    }
}

function diagThree(){
    let box3 = document.getElementById("box3");
    let box5 = document.getElementById("box5");
    let box7 = document.getElementById("box7");
    if (box3.innerText===box5.innerText && box5.innerText===box7.innerText){
        winner.innerText="YOU WON!";
    }
}
function tie(){
    let box1 = document.getElementById("box1");
    let box2 = document.getElementById("box2");
    let box3 = document.getElementById("box3");
    let box4 = document.getElementById("box4");
    let box5 = document.getElementById("box5");
    let box6 = document.getElementById("box6");
    let box7 = document.getElementById("box7");
    let box8 = document.getElementById("box8");
    let box9 = document.getElementById("box9");
    if ((box1 == 'X' || box1 == '0') && (box2 == 'X'
        || box2 == '0') && (box3 == 'X' || box3 == '0') &&
        (box4 == 'X' || box4 == '0') && (box5 == 'X' ||
        box5 == '0') && (box6 == 'X' || box6 == '0') &&
        (box7 == 'X' || box7 == '0') && (box8 == 'X' ||
        box8 == '0') && (box9 == 'X' || box9 == '0')) {
            console.log("tie")
        }
}
//boxes to be selected
/*box1 = document.getElementById("box1");
    let box2 = document.getElementById("box2");
    let box3 = document.getElementById("box3");
    let box4 = document.getElementById("box4");
    let box5 = document.getElementById("box5");
    let box6 = document.getElementById("box6");
    let box7 = document.getElementById("box7");
    let box8 = document.getElementById("box8");
    let box9 = document.getElementById("box9");*/
    
/////--------------------------------------------------------------------------------------------------------------------------------------------------//////
//score box
let pxButton=document.querySelector('.addX');
let poButton=document.querySelector('.addO');
let reset= document.querySelector('.reset');
let tieButton=document.querySelector('.tiebtn');
let xScore=0;
let oScore=0;
let tieScore=0;
let xNumber=document.querySelector('.xnumber');
let oNumber=document.querySelector('.onumber');
let tieNumber=document.querySelector('.tietally');
let gameOver= false;
let winScore= 5;
let overAnnounce=document.querySelector('.player');

pxButton.addEventListener("click", function(){
    if (!gameOver){
        xScore++;
        if (xScore===winScore){
            gameOver=true;
            if(gameOver===true){
                overAnnounce.textContent="GAME OVER"
            }
        }
        xNumber.textContent=xScore;
    } 
});
poButton.addEventListener("click", function(){
    if (!gameOver){
        oScore++;
        if (oScore===winScore){
            gameOver=true
            if(gameOver===true){
                overAnnounce.textContent="GAME OVER"
            }
        }
    oNumber.textContent=oScore;
    }
});
tieButton.addEventListener("click", function(){
    tieScore++;
    tieNumber.textContent=tieScore;
});

    










//game planning
//functionlogic:
        //if player one gets 3 in a row , diaganol, or column
            //then move on to score function
        //else if player 2 gets 3 ina row, diaganol, or column
            //then  move to score function
        //else tie 
        //will try to make a loop for each index with X or O. pulling from each individual box. 
        //const imgx ="https://th.bing.com/th/id/R.ec021608e851e893da1e8531fa498247?rik=N8F0Eo0aBDmS0A&riu=http%3a%2f%2fwww.pngall.com%2fwp-content%2fuploads%2f5%2fX-Letter-PNG-Image.png&ehk=YJKm7xXwZzGrosZTK5Psk5jGrO46tKykqARB309XEAQ%3d&risl=&pid=ImgRaw&r=0"
        //const imgo= "https://th.bing.com/th/id/R.b85f668ba966a277c5ad5ea977a3fab2?rik=XDE7DA6wO0ORZg&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fletter-o-png-letter-o-capital-letter-alphabet-abc-gold-723.png&ehk=pjFwNzQKtd4VZGCkIOPPUy0UcNgIveDC5lqYIvVxQLA%3d&risl=&pid=ImgRaw&r=0"
        //let x= imgx
        //let o= imgo


    //score to populate.
    //define player 1 score
    //define player 2 score
    //define winner of game
    

    //function logic:
        // if player one gets 3 x's in a row, 
            //before player 2 then player one wins the round
            
            //else if player 2 gets 3 in a row
            //then player 2 wins the round
            
            //else if neither player 2 or 1 gets 3 in a row 
            //then there has been a tie. 

    // who wins?
    // if the score is 2 to 1 or 2 wins and 1 tie then the person with 2 wins will win the game.
    //if there are 2 ties, or 3 ties, or 1 tie and each player has only won one game the game will
    //need to be replayed.

    //the screen should show a "player 2 won!" or "player one won!" at the end of the game.
    //if there is a tie, the screen should show that there is a tie. 
        
    //function logic:
    //if 3 rounds played and there are:
        // 2 ties, or 3 ties, or 1 tie and each player has only won one round
            //then the screen will announce that there was a tie
        //else if player one has won 2 rounds then 
            //console.log (player 1 won)
        //else if player 2 has won 2 rounds then
            //console.log(player 2 won)*/