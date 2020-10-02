function RandomNumber(){
    randomNumber1 = Math.round(Math.random()*5)+1

    randomNumber2 = Math.round(Math.random()*5)+1

    element1 = document.getElementsByClassName("img1")[0]
    element2 = document.getElementsByClassName("img2")[0]


    for(var n=1;n<=6;n++){
        if(randomNumber1==n){
            element1.src = ("images/dice"+n+".png");
        }
        if(randomNumber2==n){
            element2.src = ("images/dice"+n+".png");
        }
        element3 = document.querySelector("h1")

        if(randomNumber1>randomNumber2){
        element3.innerHTML = "Player 1 Wins"
        }

        if(randomNumber1<randomNumber2){
            element3.innerHTML = "Player 2 Wins"
        }

        if(randomNumber1==randomNumber2){
            element3.innerHTML = "It's a Draw"
        }
    }
   
}
