/*

const origScore = document.querySelector('#score');
let score = 0;
if (isTouching(avatar, coin)) {
    score++;         
}; 

const getScore = () =>{
    let inputValue = document.getElementById("score").value; 
    document.getElementById("score").innerHTML = 5; 
};

*/

const scoreLabel = document.querySelector('#score');

let scoreCount = 0;
if (isTouching(avatar, coin)) {
    scoreCount++;
};
scoreLabel.textContent = scoreCount;