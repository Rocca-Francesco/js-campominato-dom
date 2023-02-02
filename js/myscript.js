/*************************
 *                       *
 *        ON LOAD        *
 *                       *
 *************************/

// collego il mio bottone per iniziare il gioco
const playBtn = document.getElementById("play");
// dichiaro una variabile per verificare che il mio bottone sia stato cliccato solo una volta
let change = 0;

playBtn.addEventListener(
    "click",
    function () {
        // prendo la mia griglia per associarle la classe in base alla difficoltà
        const gridEl = document.getElementById("grid");

        // resetto la mia griglia prima di aggiungere elementi, in caso di nuova partita o cambio difficoltà
        gridEl.innerHTML = ""
        gridEl.classList.remove('mediumMode');
        gridEl.classList.remove('hardMode');


        // prendo il valore della difficoltà
        const difficultBtn = document.getElementById("difficult").value;

        // in base al grado di difficoltà scelto, assegno il valore di celle da creare e la classe alla mia griglia

        // creo una variabile per associare la quantità di celle alla difficoltà
        let boxesQuantity;

        if (difficultBtn == "easy") {
            boxesQuantity = 100;
        } else if (difficultBtn == "medium") {
            boxesQuantity = 81;
            gridEl.classList.add('mediumMode');
        } else if (difficultBtn == "hard") {
            boxesQuantity = 49;
            gridEl.classList.add('hardMode');
        };
        // // creo la griglia tramite la funzione
        gameGen(boxesQuantity);

    }
)

/*************************
 *                       *
 *       FUNCTIONS       *
 *                       *
 *************************/

/**
 *
 * Function to create a quantity of boxes based on difficulty and the bombs
 * @param {number} number that contains the quantity of boxes to create
 * @return create the quantity of boxes
 *
 */

function gameGen(quantity) {
    for (let i = 0; i < quantity; i++) {
        // crea
        const boxEl = document.createElement("div");
        boxEl.classList.add("box");
        boxEl.innerHTML = i + 1;
        // seleziono la mia griglia
        document.getElementById("grid").appendChild(boxEl);

        boxEl.addEventListener(
            "click",
            function () {
                boxEl.classList.add("active");
                let point
            }
        );
    };
};
