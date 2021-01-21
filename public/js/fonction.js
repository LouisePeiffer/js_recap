// Exo 1
let fonctionSaMere = () => {
    
    let rand = Math.abs(Math.round(Math.random()*20))
    console.log(rand);
    let quest; 
    let count = 0
    
    do {
        quest = prompt("Devinez un nombre entre 0 et 20")
        if (Math.abs(quest-rand) == 5) {
            alert("froid");
        } else if (Math.abs(quest-rand) == 2) {
            alert("chaud");
        } else if (Math.abs(quest-rand) == 1) {
            alert("brulant");
        } else if (count == 5) {
            alert("La partie est terminée")
        } else if (quest == rand) {
            alert('Tu as gagné')
            break;
        }
        count++
    } while (count <= 5 && quest!=rand);
    
}

fonctionSaMere()

// Exo 2
let coucou = ["salut", 20, true]

