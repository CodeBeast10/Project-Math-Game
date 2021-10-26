function addgamer() {
    player1_gamertag= document.getElementById("player1_gamertag_input").value  ; 
    player2_gamertag= document.getElementById("player2_gamertag_input").value  ; 
    localStorage.setItem("player1_gamertag", player1_gamertag); 
    localStorage.setItem("player2_gamertag", player2_gamertag); 
    window.location="quiz_game_page.html"; 
}

