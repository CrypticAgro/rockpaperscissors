let PlayerPoints = 0;
let ComputerPoints = 0;
let ComputerOption;
let PlayerOption;

function rps(PlayerNumber){

    if((PlayerPoints != 5) && (ComputerPoints != 5)){
        let placeholder = Math.floor((Math.random() * 3) + 1);

        console.log(placeholder);
        if(placeholder == 1){
            ComputerOption = "rock";
        }else if(placeholder == 2)
        {
            ComputerOption = "paper";
        }else if(placeholder == 3)
        {
            ComputerOption = "scissors";
        }
        if(PlayerNumber == 1){
            PlayerOption = "rock";
        }else if(PlayerNumber == 2)
        {
            PlayerOption = "paper";
        }else if(PlayerNumber == 3)
        {
            PlayerOption = "scissors";
        }

    winchecker(PlayerOption, ComputerOption)
    }
    else{
        if(PlayerPoints == 5){
            document.getElementById("ptext").innerHTML = "you won loser";
        }
        else if(ComputerPoints == 5)
        {
            document.getElementById("ptext").innerHTML = "you lost cry";
        }
        
    }
  
}



function winchecker(PlayerChoice, ComputerChoice){
    console.log(PlayerChoice)
    console.log(ComputerChoice)

    if(PlayerChoice === ComputerOption){
        document.getElementById("ptext").innerHTML = "draw"
    }else if((PlayerChoice === "rock") && (ComputerChoice === "paper"))
    {
        document.getElementById("ptext").innerHTML = "lost"
        ComputerPoints++  
    }else if((PlayerChoice === "rock") && (ComputerChoice === "scissors"))
    {
        document.getElementById("ptext").innerHTML = "win"
        PlayerPoints++  
    }else if((PlayerChoice === "paper") && (ComputerChoice === "rock"))
    {
        document.getElementById("ptext").innerHTML = "win"
        PlayerPoints++ 
    }else if((PlayerChoice === "paper") && (ComputerChoice === "scissors"))
    {
        document.getElementById("ptext").innerHTML = "lost"
        ComputerPoints++   
    }else if((PlayerChoice === "scissors") && (ComputerChoice === "paper"))
    {
        document.getElementById("ptext").innerHTML = "win"
        PlayerPoints++  
    }else if((PlayerChoice === "scissors") && (ComputerChoice === "rock"))
    {
        document.getElementById("ptext").innerHTML = "lost"
        ComputerPoints++  
    }else{
        document.getElementById("ptext").innerHTML = "cry"

    }

}