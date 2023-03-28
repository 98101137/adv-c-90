function addUser(){
    player_1 = document.getElementById("Player1_name_input").value;
    player_2 = document.getElementById("player2_name_input").value;

    localStorage.setItem("player_1",player_1);
    localStorage.setItem("player_2",player_2);

    window.location="index-game_page.html";
    }