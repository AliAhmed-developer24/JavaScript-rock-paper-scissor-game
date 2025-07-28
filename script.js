var userScore=0;
var botScore=0;

function play(userChoice){
    var cards=document.querySelectorAll(".card");
    cards.forEach(card => card.style.pointerEvents="auto");

    var choices=['rock','scissors','paper'];
    var botChoice= choices[Math.floor(Math.random() * 3)];
    var message = '';

     if(userChoice === botChoice){
        message = "😐 It's a draw! Both chose " + userChoice;
     }

     else if(
        (userChoice === 'rock' && botChoice === 'scissors') ||
        (userChoice === 'paper' && botChoice === 'rock') ||
        (userChoice === 'scissors' && botChoice === 'paper') 
    ){
        userScore++;
        message = '✅ You Win! ' + userChoice + 'beats' + botChoice;
    }else{
        botScore++;
        message = `❌ You Lose! ${botChoice} beats ${userChoice} `
    }
    
    document.getElementById("user-score").textContent=userScore;
    document.getElementById("bot-score").textContent=botScore;
    document.getElementById("message").textContent=message;

    setTimeout(() => {
        cards.forEach(card => card.style.pointerEvents="none");
        document.getElementById("message").textContent="Make your move!";
    },2000);
}

// var sum = a => a; console.log("hello");
// var sum = (a,b) => a + b; console.log(sum(2,3));

// var numbers=[1,2,3,4,5]
// numbers.forEach(function(num){
//     console.log(num);
// })

// var cards=document.querySelectorAll(".card");
// for(var i=0;i<cards.length;i++){
//     console.log(cards[i]);
//     var pTag=cards[i].querySelector("p");
//     console.log(pTag.textContent);
    
// }

