sumHome = 0;
sumGuest = 0;
let homeS = document.getElementById('home');
let guestS = document.getElementById('guest');
function btnh1(){
     sumHome += 1;
     homeS.innerHTML = sumHome;
    
}
function btnh2(){
     sumHome += 2;
     homeS.innerHTML = sumHome;
}
function btnh3(){
     sumHome += 3;
     homeS.innerHTML = sumHome;
}
function btng1(){
    sumGuest += 1;
    guestS.innerHTML = sumGuest;
}
function btng2(){
    sumGuest += 2;
    guestS.innerHTML = sumGuest;
}
function btng3(){
    sumGuest += 3;
    guestS.innerHTML = sumGuest;
}
function newGame(){
    sumHome = 0;
    sumGuest = 0;
    homeS.innerHTML = 0;
    guestS.innerHTML = 0;
}