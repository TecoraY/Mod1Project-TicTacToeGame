//on click functions for x and o image of x or o wil populate to screen 
//if x button or O button pressed
    //on click function=>
    //document.queryselector for images
    const displayX= () =>{
        let pickX= document.querySelector('.writeX')
        pickX.classList.toggle('initiateX')
    }
    const displayX2= () =>{
        let pickX= document.querySelector('.writeX2')
        pickX.classList.toggle('initiateX')  
    }
    const displayX3= () =>{
        let pickX= document.querySelector('.writeX3')
        pickX.classList.toggle('initiateX')
        
    }
    const displayX4= () =>{
        let pickX= document.querySelector('.x4')
        pickX.classList.toggle('initiateX')
    }
    const displayX5= () =>{
        let pickX= document.querySelector('.x5')
        pickX.classList.toggle('initiateX')
    }
    const displayX6= () =>{
        let pickX= document.querySelector('.x6')
        pickX.classList.toggle('initiateX')
    }
    const displayX7= () =>{
        let pickX= document.querySelector('.x7')
        pickX.classList.toggle('initiateX')
    }
    const displayX8= () =>{
        let pickX= document.querySelector('.x8')
        pickX.classList.toggle('initiateX')
    }
    const displayX9= () =>{
        let pickX= document.querySelector('.x9')
        pickX.classList.toggle('initiateX')
    }
    const displayO= () =>{
        let pickO= document.querySelector('.o')
        pickO.classList.toggle('initiateO')
    }
    const displayO2= () =>{
        let pickO= document.querySelector('.o2')
        pickO.classList.toggle('initiateO')
    }
    const displayO3= () =>{
        let pickO= document.querySelector('.o3')
        pickO.classList.toggle('initiateO')
    }
    const displayO4= () =>{
        let pickO= document.querySelector('.o4')
        pickO.classList.toggle('initiateO')
    }
    const displayO5= () =>{
        let pickO= document.querySelector('.o5')
        pickO.classList.toggle('initiateO')
    }
    const displayO6= () =>{
        let pickO= document.querySelector('.o6')
        pickO.classList.toggle('initiateO')
    }
    const displayO7= () =>{
        let pickO= document.querySelector('.o7')
        pickO.classList.toggle('initiateO')
    }
    const displayO8= () =>{
        let pickO= document.querySelector('.o8')
        pickO.classList.toggle('initiateO')
    }
    const displayO9= () =>{
        let pickO= document.querySelector('.o9')
        pickO.classList.toggle('initiateO')
    }

//define board as an array so that each index can be read for placement of X or O
function winFunc() {
 
    // Setting DOM to all boxes or input field
    
    let btnX1 = this.document.activeElement.getAttribute("btnx1");
    let btnX2 = this.document.activeElement.getAttribute("btnx2");
    let btnX3 = this.document.activeElement.getAttribute("btnx3");
   /* let b4 = document.getElementById("b4").value;
    let b5 = document.getElementById("b5").value;
    let b6 = document.getElementById("b6").value;
    let b7 = document.getElementById("b7").value;
    let b8 = document.getElementById("b8").value;
    let b9 = document.getElementById("b9").value;*/
 
    if ((btnX1)==(btnX2)&& (btnX2)==(btnX3)){
        console.log("winner");
    }
}








    //define O and X
const oMark= "O";
const xMark= "X";
console.log("hello");
/*winningOptions();

function winningOptions(){
    const xBox1=document.querySelector(".writeX");
    const xBox2=document.querySelector(".writeX2");
    const xBox3=document.querySelector(".writeX3");
    let a=xBox1;
    let b=xBox2;
    let c=xBox3;
        if (a==="X" && b==="X" && c==="X"){
        console.log("winner");
        }
}*/

    
/////--------------------------------------------------------------------------------------------------------------------------------------------------//////
   
   
   
   
    //how to let the computer know that 3 of the images are aligned diagnoally, horizontally, or vertically?
    //research possible ways to represent this in a function.
    //have to make an array of all possible winning combinations. Once have an array of the combinations then this must be applied to x and o or else draw. 
    //array should be an array of positions in the grid inhabited by a visble X or O. 

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