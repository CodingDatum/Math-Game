var playing = false;
var score;
var action;
var timeremaining;
var correctAnswer;
//like an empty string??

// if we click the button
document.getElementById("startreset").onclick = function(){
    
    if(playing==true){ //if we are playing
        location.reload(); // this javascript code reloads the page
    }else{ //if we are not playing
        playing = true;
        score = 0; //set score to 0
        document.getElementById("scorevalue").innerHTML = score;
        show("time");
        timeremaining = 60;
        document.getElementById("timeremaininglive").innerHTML = timeremaining;
        document.getElementById("startreset").innerHTML="Reset Game";
        hide("gameover");
        startCountdown(); // and we code this function at the bottom of the script
        generateQA();
        
    }
    
}
for(i=1;i<5;i++){
    
    document.getElementById("box"+i).onclick=function(){
        if(playing == true){
            if(this.innerHTML == correctAnswer){
                score +=1;
                document.getElementById("scorevalue").innerHTML = score;
                hide("incorrect");
                show("correct");
                setTimeout(function(){
                    hide("correct");
                }, 1000)
                generateQA();
            }else{
                hide("correct");
                show("incorrect");
                setTimeout(function(){
                    hide("incorrect");
                }, 1000)
            }
        }
    }
}

        //reduce time by 1 sec
            //time left?
                //yes = continue
                //no = gameover
        //change button to reset
        //generate new Q and Q



//if we click an answer box:
    //if we are playing
        //correct?
            //yes
                //increase score
                //show correct box for 1 second
                // generate new set of Q nd A's
            //no
                //show try again box for one second



function startCountdown(){
    
    
    action = setInterval(function(){
        
        timeremaining -=1;
        document.getElementById("timeremaininglive").innerHTML = timeremaining;
        if(timeremaining == 0){
            stopCountdown();
            show("gameover");
            document.getElementById("gameover").innerHTML = "<p> GAME OVER!</p> <p> Your score is: " + score + "!</p>";
            hide("time");
            hide("correct");
            hide("incorrect");
            playing = false;
            document.getElementById("startreset").innerHTML = "Start Game!"
        }
        
    }, 1000);

function stopCountdown(){
    clearInterval(action);
}
    
}
function hide(id){
    document.getElementById(id).style.display = "none";
}
function show(id){
    document.getElementById(id).style.display = "block";
}
function generateQA(){
    var x = 1 + (Math.round(Math.random()*9));
    var y = 1 + (Math.round(Math.random()*9));
    
    correctAnswer = x * y;
    
    document.getElementById("question").innerHTML = x + " X " + y;
    
    var correctPosition = 1 + (Math.round(Math.random()*3));
    
    document.getElementById("box"+correctPosition).innerHTML = correctAnswer;
    
    var answers = [correctAnswer];
    
    for(i=1;i<5;i++){
        if(i != correctPosition){
            var wrongAnswer;
            do{
               wrongAnswer = (1+(Math.round(Math.random()*9))*(1+(Math.round(Math.random()*9))))
            }
            while(answers.indexOf(wrongAnswer)>-1){
                
            }
            document.getElementById("box"+i).innerHTML = wrongAnswer;
            answers.push(wrongAnswer);
        }
    }
}