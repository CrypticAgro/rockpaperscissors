function rps(PlayerNumber){
    let winnertext; 
    let PlayerPoints;
    let ComputerPoints;
    while((PlayerPoints != 5) && (ComputerPoints != 5))
    {
        let placeholder = Math.floor((Math.random() * 3) + 1);
        let ComputerOption;
        let PlayerOption;
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
    
    }
    if(PlayerPoints == 5){
        return document.getElementById("ptext").innerHTML = "you won loser";
    }
    else if(ComputerPoints == 5)
    {
        return document.getElementById("ptext").innerHTML = "you lost cry";
    }
}

function winchecker(PlayerOption, ComputerOption){
    if(PlayerOption === ComputerOption){
        document.getElementById("ptext").innerHTML = "draw"
    }else if((PlayerOption === "rock") && (ComputerOption === "paper"))
    {
        document.getElementById("ptext").innerHTML = "lost"
        ComputerPoints += 1   
    }else if((PlayerOption = "rock") && (ComputerOption = "scissors"))
    {
        document.getElementById("ptext").innerHTML = "win"
        PlayerPoints += 1   
    }else if((PlayerOption = "paper") && (ComputerOption = "rock"))
    {
        document.getElementById("ptext").innerHTML = "win"
        PlayerPoints += 1   
    }else if((PlayerOption = "paper") && (ComputerOption = "scissors"))
    {
        document.getElementById("ptext").innerHTML = "lost"
        ComputerPoints += 1   
    }else if((PlayerOption = "scissors") && (ComputerOption = "paper"))
    {
        document.getElementById("ptext").innerHTML = "win"
        PlayerPoints += 1   
    }else if((PlayerOption = "scissors") && (ComputerOption = "rock"))
    {
        document.getElementById("ptext").innerHTML = "lost"
        ComputerPoints += 1   
    }else{
        document.getElementById("ptext").innerHTML = "cry"

    }

}