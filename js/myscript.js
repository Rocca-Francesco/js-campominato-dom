/*************************
 *                       *
 *        ON LOAD        *
 *                       *
 *************************/

// collego il mio bottone per iniziare il gioco
const playBtn = document.getElementById("play");
// prendo la mia griglia
const gridEl = document.getElementById("grid");
// creo una variabile per associare la quantità di celle alla difficoltà
let boxesQuantity;

playBtn.addEventListener(
    "click",
    function () {
        // resetto la mia griglia prima di aggiungere elementi, in caso di nuova partita o cambio difficoltà
        gridEl.innerHTML = ""
        gridEl.classList.remove('mediumMode');
        gridEl.classList.remove('hardMode');


        // prendo il valore della difficoltà
        const difficultBtn = document.getElementById("difficult").value;

        // in base al grado di difficoltà scelto, assegno il valore di celle da creare e la classe alla mia griglia


        if (difficultBtn == "easy") {
            boxesQuantity = 100;
        } else if (difficultBtn == "medium") {
            boxesQuantity = 81;
            gridEl.classList.add('mediumMode');
        } else if (difficultBtn == "hard") {
            boxesQuantity = 49;
            gridEl.classList.add('hardMode');
        };
        // creo la griglia tramite la funzione
        boxes(boxesQuantity);
        const bombsEl = bombs(boxesQuantity);
        console.log(bombsEl);
    }
);



// gridEl.addEventListener(
//     "click",
//     function () {
//         // switch perdita
//         let bombClick = false;


//     }
// );

/*************************
 *                       *
 *       FUNCTIONS       *
 *                       *
 *************************/

/**
 *
 * Function to create a quantity of boxes based on difficulty and the bombs
 * @param {number} number that contains the quantity of boxes to create
 * @return array with the list of boxes
 *
 */

function boxes(quantity) {
    // creo un array con la lista dei miei box
    const arrayBoxes = [];

    for (let i = 0; i < quantity; i++) {
        // crea una box
        const boxEl = document.createElement("div");
        boxEl.classList.add("box");
        boxEl.innerHTML = i + 1;
        // seleziono la mia griglia
        document.getElementById("grid").append(boxEl);

        // pusho il mio box nell'array
        arrayBoxes.push(boxEl);
    };
    // // in base al click aggiungo la classe active
    // arrayBoxes.addEventListener(
    //     "click",
    //     function () {
    //         arrayBoxes[this].classList.add("active");
    //         point++;
    //         console.log(point);
    //     }
    // );
};

/**
 *
 * Function to generate bombs
 * @param {number} number that contains the quantity of boxes to create/ the difficult
 * @return array with the list of bombs
 * 
 */

function bombs(difficultQuantity) {
    bombsList = [];
    for (let i = 0; bombsList.length < 16; i++) {
        numRandom = Math.floor((Math.random() * difficultQuantity) + 1);
        if (!bombsList.includes(numRandom)) {
            bombsList.push(numRandom)
        };
    };
    return bombsList;
};
