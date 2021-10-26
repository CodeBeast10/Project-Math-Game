player1_gamertag= localStorage.getItem("player1_gamertag");
player2_gamertag= localStorage.getItem("player2_gamertag");
player1_gamescore= 0;
player2_gamescore= 0;
document.getElementById("player1_gamertag").innerHTML= player1_gamertag + ": "; 
document.getElementById("player2_gametag").innerHTML= player2_gamertag + ": ";
document.getElementById("player1_gamescore").innerHTML= player1_gamescore; 
document.getElementById("player2_gamescore").innerHTML= player2_gamescore;

document.getElementById("player_question").innerHTML= "question turn : " +  player1_gamertag; 
document.getElementById("player_answer").innerHTML=  "answer turn : " + player2_gamertag; 


function send() {
   number1= document.getElementById("number1").value;
   number2= document.getElementById("number2").value;
   actual_answer= parseInt(number1) * parseInt(number2);
   question_number= "<h4>" + number1+ " X " + number2 + "</h4>"; 
   inputbox= "<br> Answer : <input type='text' id='input_Tag' >";
    check_button= "<br> <br> <button class='btn btn-info' onclick='check() '> CHECK </button>";
    row= questionTag + inputbox + check_button; 
    document.getElementById("output").innerHTML= row; 
    document.getElementById("number1").value= ""; 
    document.getElementById("number2").value= "";
}

question_turn= "player1gamertag"; 
answer_turn= "playergamertag";

function check() {
    get_answer = document.getElementById("input_check_box").value;
    if(get_answer == actual_answer)
    {
    if(answer_turn == "player1_gamertag")
    {
    update_player1_gamescore = player1_gamescore +1;
    document.getElementById("player1_gamescore").innerHTML = update_player1_gamescore;
    }
    else
    {
    update_player2_gamescore = player2_gamescore +1;
    document.getElementById("player2_gamescore").innerHTML = update_player2_gamescore;
}
    
    
    }
} 

if(question_turn == "player1gamertag")
{
question_turn = "player2gamertag"
document.getElementById("player_question").innerHTML = "Question Turn - " + player2_gamername;
}
else
{
question_turn = "player1"
document.getElementById("player_question").innerHTML = "Question Turn - "+ player1_gamername;
}
