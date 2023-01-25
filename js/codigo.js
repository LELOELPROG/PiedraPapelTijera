function eleccion(opcion, player){
    if(opcion == 1){
        alert(player + " eligio 🪨");
    } else if(opcion == 2){
        alert(player + " eligio 📄");
    } else if(opcion == 3){
        alert(player + " eligio ✂️");
    } else {
        alert("Elección invalida pi pi pi");
    }; 
};


function fight(player, maquina){
    if(player == maquina){
        alert("Has empatado");
    } else if(player - maquina == 1 || player - maquina == -2){
        alert("Has ganado mrd");
        victorias = victorias + 1;
    } else{
        alert("Has perdido pi pi pi");
        derrotas = derrotas + 1;
    }
};

function randomNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function restablecerJugadas(){
    victorias = 0;
    derrotas = 0;
}

// 1 es piedra, 2 es papel y 3 es tijera
let jugador = 0;
let pc = 0;
let victorias = 0; 
let derrotas = 0; 


//alert("Elegiste " + jugador);

while(victorias < 3 && derrotas < 3){
    jugador = prompt("Elige: 1 para piedra🪨, 2 para papel📄 y 3 para tijera✂️ ");
    pc = randomNumber(1,3);
        eleccion(jugador, "jugador");
    
    if(jugador == 1 || jugador == 2 || jugador == 3){
        eleccion(pc, "La maquina");
        fight(jugador, pc);
    } else {
        alert("Presiona F5 para volver a jugar")
    };
}

alert("Has ganado " + victorias + " veces, y has perdido " + derrotas + " veces.");

