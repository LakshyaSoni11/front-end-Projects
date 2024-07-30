let userScore = 0;
let compScore = 0;

const choices =document.querySelectorAll(".choice");// for determining the choices from all the elemen having class choice
const msg =document.querySelector(".start");
const uscore=document.querySelector("#user");
const cscore=document.querySelector("#comp");

const draw =()=>{
    console.log("its a tie");

}
const showwinner = (userWin)=>{
     if(userWin){
        console.log("you won");
        userScore++;
        uscore.innerHTML = userScore;
        msg.innerText= "Bingo you won";
        console.log("user score is ",userScore);
    }
    else{
        console.log("you loose");
        compScore +=1;
        cscore.innerHTML = compScore;
        msg.innerText = "Shit you Loose cmon try again";
        msg.style.backroundColor = "white";
        console.log("compueter score is ",compScore);
     }
}
const playGame =(userChoice)=>{
    console.log("user selected ",userChoice);
    const compChoice = getCompChoice();
    console.log("computer choice is ",compChoice);
    if (userChoice === compChoice){
        draw();
        msg.innerText ="its a tie!";
    }
    else{
        let userWin =true;
        if (userChoice === "rock"){
            userWin =compChoice === "paper" ? false : true;
        }
        else if(userChoice ==="paper"){
            userWin = compChoice === "scissors" ? false : true;
    }
    else {
        userWin = compChoice === "rock" ? false : true;
    }
    showwinner(userWin);
}
}


const getCompChoice =() =>{
    const options=["rock" , "paper" , "scissor"];
    const randNum = Math.floor(Math.random()*3);//will generatr number ranging from 0 to 2
    return options[randNum];
}
choices.forEach((choice) =>{
    choice.addEventListener("click",() =>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);//this includes the won statement function tie statement and a selected statement 
        // showwinner();
    });
});
