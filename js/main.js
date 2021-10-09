//Jiahua Cui 100507387
//Rock Paper Scissors game

//waiting for DOM to load before animation
document.addEventListener("DOMContentLoaded", function () {
  let redDialogue = document.getElementById("red_dialogue");
  let red1 = document.getElementById("red1");
  let red2 = document.getElementById("red2");
  let red3 = document.getElementById("red3");
  let redWin = document.getElementById("red_win")
  let redLose = document.getElementById("red_lose")
  let blueDialogue = document.getElementById("blue_dialogue");
  let blue1 = document.getElementById("blue1");
  let blue2 = document.getElementById("blue2");
  let blueWin = document.getElementById("blue_win")
  let blueLose = document.getElementById("blue_lose")
  let battle = document.getElementById("battle");
  let redRock = document.getElementById("red_rock");
  let redPaper = document.getElementById("red_paper");
  let redScissors = document.getElementById("red_scissors");
  let blueRock = document.getElementById("blue_rock");
  let bluePaper = document.getElementById("blue_paper");
  let blueScissors = document.getElementById("blue_scissors");
  let question =document.getElementById("question")
  let red = document.getElementById("red");
  let blue = document.getElementById("blue")
  let redHealth = document.getElementById("red_green")
  let blueHealth = document.getElementById("blue_green")
  let rockText = document.getElementById("rock_text")
  let paperText = document.getElementById("paper_text")
  let scissorsText = document.getElementById("scissors_text")
  let tieText =document.getElementById("tie_text")
  let loseText =document.getElementById("lose_text")
  let winText =document.getElementById("win_text")
  let ko = document.getElementById("ko")
  let end = document.getElementById("end")


  //hiding all elements
  question.style.opacity = 0
  redRock.style.opacity = 0
  redPaper.style.opacity = 0
  redScissors.style.opacity = 0

  rockText.style.opacity = 0
  paperText.style.opacity = 0
  scissorsText.style.opacity = 0

  blueRock.style.opacity = 0;
  bluePaper.style.opacity = 0;
  blueScissors.style.opacity = 0;

  battle.style.display = "block"
  tieText.style.opacity = 0
  loseText.style.opacity = 0
  winText.style.opacity = 0
  end.style.display = "none"
  end.style.opacity = 0
  ko.style.display = 'none'
  ko.style.opacity = 0

  let blueScale 
  if(window.innerWidth < 815){
    blueScale = 1
  }else{
    blueScale = 2
  }
  

  //health bar reduce var
  let blueFull = parseInt(window.getComputedStyle(blueHealth).getPropertyValue("width"))
  let redFull = parseInt(window.getComputedStyle(redHealth).getPropertyValue("width"))
  let blueReduce = parseInt(blueFull/5)
  let redReduce = parseInt(redFull/5)

  console.log(blueFull,redFull,blueReduce,redReduce)


  //if blue wins

function winnerBlue(){
    gsap.to(blueWin,{opacity:1,duration:1})
}

 // if red wins

function winnerRed(){
    gsap.to(blueLose,{opacity:1,duration:1})
}


// function to evaluate outcome
  function eval(){

    //window.choice is global variable for the choice that the player chose
      let redMove = window.choice



    // red blue jumping animation
      gsap.timeline({})
      .to([red,blue],{y:-20,duration:0.2})
      .to([red,blue],{y:0,duration:0.2})
      .to([red,blue],{y:-20,duration:0.2})
      .to([red,blue],{y:0,duration:0.2})
      .to([red,blue],{y:-20,duration:0.2})
      .to([red,blue],{y:0,duration:0.2,onComplete: setTimeout(function(){

        
        // CPU random move
        let blueMove = [blueRock,bluePaper,blueScissors]
        const randomMove = Math.floor(Math.random()*2)


        let blueChoice

        if(randomMove == 0){
            blueChoice = "blue_rock"
        }else if(randomMove == 1){
            blueChoice = "blue_paper"
        }else if(randomMove == 2){
            blueChoice = "blue_scissors"
        }


        //only showing the random choice, hide everything else
        blueMove[randomMove].style.opacity = 1

        //shooting animation
        gsap.to(blueMove,{x:-window.innerWidth/5,duration:1,scale:blueScale})



        //player shooting animation
        if(redMove.id == "red_rock"){
            redMove.style.opacity = 1;
            gsap.to(redMove,{x:window.innerWidth/3.5,duration:0.8,scale:1})
            gsap.to(rockText,{x:30,opacity:1,duration:1,onComplete: setTimeout(function(){
                gsap.to(rockText,{opacity:0,duration:1})
            },2000)})
        }else if(redMove.id == "red_paper"){
            redMove.style.opacity = 1;
            gsap.to(redMove,{x:window.innerWidth/5,duration:1,scale:1})
            gsap.to(paperText,{x:10,opacity:1,duration:1,onComplete: setTimeout(function(){
                gsap.to(paperText,{opacity:0,duration:1})
            },2000)})
        }else if(redMove.id == "red_scissors"){
            redMove.style.opacity = 1;
            gsap.to(redMove,{x:window.innerWidth/8.5,duration:1,scale:1})
            gsap.to(scissorsText,{x:30,opacity:1,duration:1,onComplete: setTimeout(function(){
                gsap.to(scissorsText,{opacity:0,duration:1})
            },2000)})
        }

        let result

        //if statement to evaluate the result of the round
        if(blueChoice == "blue_rock" && redMove.id == "red_rock"){
            result = "tie"
        } else if(blueChoice == "blue_rock" && redMove.id == "red_paper"){
            result = "red win"
        } else if(blueChoice == "blue_rock" && redMove.id == "red_scissors"){
            result = "red lose"
        } else if(blueChoice == "blue_paper" && redMove.id == "red_rock"){
            result = "red lose"
        } else if(blueChoice == "blue_paper" && redMove.id == "red_paper"){
            result = "tie"
        } else if(blueChoice == "blue_paper" && redMove.id == "red_scissors"){
            result = "red win"
        } else if(blueChoice == "blue_scissors" && redMove.id == "red_rock"){
            result = "red win"
        } else if(blueChoice == "blue_scissors" && redMove.id == "red_paper"){
            result = "red lose"
        } else if(blueChoice == "blue_scissors" && redMove.id == "red_scissors"){
            result = "tie"
        }

        //delay reset function
        setTimeout(function(){

            //swtich block to switch outcome based on result of the round
            switch(result){

                case "tie":
                    gsap.to(tieText,{x:-20,opacity: 1,duration:0.5, onComplete: setTimeout(function(){gsap.to(tieText,{x: 0,opacity:0,duration:0.5})},1000)})
                    reset()
                    break;

                case "red win":
                    blueHealth.style.transformOrigin = "top right"
                    
                    gsap.to(blueHealth,{width: blueFull-blueReduce,duration:0.5})
                    gsap.to(winText,{x: -20, opacity: 1,duration:0.5, onComplete: setTimeout(function(){gsap.to(winText,{x:0,opacity:0,duration:0.5})},1000)})
                    gsap.to(blue,{x:50,duration:1,ease:"bounce.out",onComplete:function(){gsap.to(blue,{x:0,duration:0.5})}})
                    blueReduce = parseInt(blueReduce + blueFull/5)
                    if(blueReduce<blueFull){
                    reset()
                    break;
                }else{
                    end.style.display = "block"
                    ko.style.display = "block"
                    gsap.to(ko,{opacity:1,duration:0.5,onComplete:setTimeout(function(){
                        redDialogue.style.display = "block"
                        blueDialogue.style.display = "block"
                        gsap.timeline({})
                        .to([blueMove[randomMove],redMove],{opacity:0,duration:0.5})
                        .to(blueLose,{opacity:1,duration:0.5,delay:1})
                        .to(blueLose,{opacity:0,duration:0.5,delay:2.5})
                        .to(redWin,{opacity:1,duration:0.5,delay:1})
                        .to(redWin,{opacity:0,duration:0.5,delay:2.5})
                        .to(ko,{opacity:0,duration:0.5,delay:0.5})
                        .to(end,{opacity:1,duration:0.5,delay:1})
                    },1000)})
                    break;

                }

                case "red lose":
                    gsap.to(redHealth,{width: redFull-redReduce,duration:0.5})
                    gsap.to(loseText,{x: -20, opacity: 1,duration:0.5, onComplete: setTimeout(function(){gsap.to(loseText,{x: 0,opacity:0,duration:0.5})},1000)})
                    gsap.to(red,{x:-50,duration:1,ease:"bounce.out",onComplete:function(){gsap.to(red,{x:0,duration:0.5})}})
                    redReduce = parseInt(redReduce+redFull/5)
                    if(redReduce<redFull){
                    reset()
                    break;
                }else{
                    end.style.display = "block"
                    ko.style.display = "block"
                    gsap.to(ko,{opacity:1,duration:0.5,onComplete:setTimeout(function(){
                        redDialogue.style.display = "block"
                        blueDialogue.style.display = "block"
                        gsap.timeline({})
                        .to([blueMove[randomMove],redMove],{opacity:0,duration:0.5})
                        .to(blueWin,{opacity:1,duration:0.5,delay:1})
                        .to(blueWin,{opacity:0,duration:0.5,delay:2.5})
                        .to(redLose,{opacity:1,duration:0.5,delay:1})
                        .to(redLose,{opacity:0,duration:0.5,delay:2.5})
                        .to(ko,{opacity:0,duration:0.5,delay:0.5})
                        .to(end,{opacity:1,duration:0.5,delay:1})

                    },1000)})
                    break;

                }
            }

            //function to reset the round to choose weapons again
            function reset(){
                gsap.timeline({})
                .to([blueMove[randomMove],redMove],{opacity:0,duration:0.5,delay:0.5})
                .to(question,{x:0,y:0,scale:1,duration:0.1})
                .to([blueMove[0],blueMove[1],blueMove[2],redMove],{x:0,y:0,scale:1,duration:0.1,delay:0.2,
                    onComplete: setTimeout(choose,2000)
                })
            }

        },1200)



      },1300)})
  }


  // function to choose weapon
  function choose() {
    gsap.fromTo([redRock,redPaper,redScissors,question], { opacity: 0},{opacity:1, duration: 0.5 });

    redRock.style.zIndex = 15;
    redPaper.style.zIndex = 15;
    redScissors.style.zIndex = 15;
    red.style.zIndex = 20;
    let weapons = [redRock, redPaper, redScissors];
    let animating = false

    //loop through array to see which one is clicked
    for (let i = 0; i < weapons.length; i++) {
      weapons[i].onclick = 
      function () {
        if(!animating){
        animating = true
        setTimeout(eval,2000)
        window.choice = weapons[i]
        for (let j = 0; j < weapons.length; j++) {
          if (j != i) {
            gsap.to(weapons[j], { opacity: 0, duration: 0.5, onComplete: setTimeout(function(){
                gsap.to(weapons[i],{
                    scale: 0.5,
                    duration: 0.5,
                 
                })
                gsap.to(question,{
                    scale:0.5,
                    duration:0.5,
                 
                })
            },700) });
          }

          //move the choice to player
          setTimeout(function(){
            if(i==0){
                gsap.to(weapons[i],{x:100,y:100,duration:0.5,opacity:0,ease:"power1.in",onComplete: function(){setTimeout(function(){weapons[i].style.opacity = 0},100)}})
                gsap.to(question,{y:100,duration:0.5,opacity:0,ease:"power1.in",onComplete: function(){setTimeout(function(){question.style.opacity = 0},100)}})

            }else if(i==1){

                gsap.to(weapons[i],{x:0,y:100,duration:0.5,opacity:0,ease:"power1.in",onComplete: function(){setTimeout(function(){weapons[i].style.opacity = 0},100)}})
                gsap.to(question,{y:100,duration:0.5,opacity:0,ease:"power1.in",onComplete: function(){setTimeout(function(){question.style.opacity = 0},100)}})
            }else if(i == 2){
                
                gsap.to(weapons[i],{x:-100,y:100,duration:0.5,opacity:0,ease:"power1.in",onComplete: function(){setTimeout(function(){weapons[i].style.opacity = 0},100)}})
                gsap.to(question,{y:100,duration:0.5,opacity:0,ease:"power1.in",onComplete: function(){setTimeout(function(){
                    question.style.opacity = 0
                    aniamting = false
                },100)}})
            }

          },1200)




        }
    }
      }
    }


  }


  //dialogue animation at beginning
  function dialogue() {
    // //dialogue animation
    console.log("1")
    red1.style.opacity = 0
    red2.style.opacity = 0
    red3.style.opacity = 0
    redWin.style.opacity = 0
    redLose.style.opacity = 0
    blue1.style.opacity = 0
    blue2.style.opacity = 0
    blueWin.style.opacity = 0
    blueLose.style.opacity = 0
    battle.style.opacity = 0

    //set back to block after testing
    redDialogue.style.display = "block";
    blueDialogue.style.display = "block";



    gsap.timeline({})
    .to(red1,{opacity:1,duration:0.5,delay:1})
    .to(red1,{opacity:0,duration:0.5,delay:4})
    .to(blue1,{opacity:1,duration:0.5,delay:1})
    .to(blue1,{opacity:0,duration:0.5,delay:4})
    .to(red2,{opacity:1,duration:0.5,delay:1})
    .to(red2,{opacity:0,duration:0.5,delay:4})
    .to(blue2,{opacity:1,duration:0.5,delay:1})
    .to(blue2,{opacity:0,duration:0.5,delay:4})
    .to(red3,{opacity:1,duration:0.5,delay:1})
    .to(red3,{opacity:0,duration:0.5,delay:4})
    .to(battle,{opacity: 1, duration: 0.5, delay: 0.5})
    .to(battle,{opacity: 0, duration: 0.5, delay: 1})

    setTimeout(function(){battle.style.display="none"},32000)




    setTimeout(function(){redDialogue.style.display="none"},31000)



    setTimeout(function(){blueDialogue.style.display="none"},31000)




    //running the game function with a delay of 3.2s to finish animation
    setTimeout(choose, 32000);
  }

  dialogue();
});
