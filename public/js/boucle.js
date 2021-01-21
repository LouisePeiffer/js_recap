// Exo 1
// let leTableau = [4,"true",true,"bonjour",511,"coding school",{},2020,1 ,"maryam",false,[],13,["salut",13,false],"les tartines c'est délicieux","true et false",1070,478,"hello","top",4000,99,"codeur",45,"javascript",399,"autodidacte","oui",1000,1001,"brainstorming","lol"]
// console.log(leTableau.length);

// 1
// leTableau.forEach(element => {
//     console.log(`${element} est de type ${typeof element}`);
// });

// 2
// let lesIntegers = []
// let lesStrings = []
// let lesAutres = []


// leTableau.forEach(el => {
//     if (typeof el == "string") {
//         lesStrings.push(el)
//     } else if (typeof el == "number") {
//         lesIntegers.push(el)
//     } else {
//         lesAutres.push(el)
//     }
// });

// console.log(lesStrings);
// console.log(lesIntegers);
// console.log(lesAutres);

// 3
// let lesGrandsIntegers = []
// let lesPetitsIntegers = []
// let lesPetitsStrings = []
// let lesGrandsString = []

// leTableau.forEach(el => {
//     if (typeof el == "number" && el< 100) {
//         lesPetitsIntegers.push(el)
//     } else if (typeof el == "number" && el>100) {
//         lesGrandsIntegers.push(el)
//     } else if (typeof el == "string" && el.length<6) {
//         lesPetitsStrings.push(el)
//     } else if (typeof el == "string" && el.length>6) {
//         lesGrandsString.push(el)
//     }
// });

// console.log(lesPetitsIntegers);
// console.log(lesGrandsIntegers);
// console.log(lesPetitsStrings);
// console.log(lesGrandsString);

// // 4
// let grandsNbs = []
// let petitsNbs = []

// for (let i = 0; i < 5; i++) {
//     let quest = Math.round(prompt('Nombre?'))
//     if (quest <= 100) {
//         grandsNbs.push(quest)
//     } else if (quest > 100) {
//         petitsNbs.push(quest)
//     } else if (quest < 0) {
//         prompt=('Trop petit mettre un autre')
//     }
// }

// console.log(grandsNbs);
// console.log(petitsNbs);

// let grandsNbs = []
// let petitsNbs = []
// let count = 0

// do {
//     let quest = prompt('Nombre?')
//     if (quest <= 100) {
//         grandsNbs.push(quest)
//     } else if (quest > 100) {
//         petitsNbs.push(quest)
//     } else if (quest < 0) {
//         prompt=('Trop petit mettre un autre')
//     }
//     count++
// } while (count < 5);


// console.log(grandsNbs);
// console.log(petitsNbs);

// Exo 2
// let count = 0
// let rep = "happy birthday"
// let questH;
// let quest2;

// do {
//     questH = (prompt('Que veut dire HB?')).toLowerCase()
//     if (questH == rep) {
//         alert('Bravo')
//         break;
//     } else if (count == 3) {
//         alert("Vous avez épuisé votre quota d'essais")
//     } else {
//         alert('non, réessayez')
//     }
//     count++
// } while (count<=3 && questH!=rep);