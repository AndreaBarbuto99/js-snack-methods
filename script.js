/* Crea un array di oggetti che rappresentano delle persone. Ogni persona ha un nome, un cognome e un’età.
Crea quindi un nuovo array inserendo,
 per ogni persona, una frase con il nome e cognome e l’indicazione se può guidare, in base all’età. */

 const persone = [
  { nome: "Mario", cognome: "Rossi", eta: 28 },
  { nome: "Laura", cognome: "Bianchi", eta: 16 },
  { nome: "Giovanni", cognome: "Verdi", eta: 42 },
  { nome: "Sara", cognome: "Neri", eta: 17 },
  { nome: "Luca", cognome: "Gialli", eta: 31 },
  { nome: "Anna", cognome: "Blu", eta: 15 },
  { nome: "Francesco", cognome: "Rossi", eta: 37 },
  { nome: "Giulia", cognome: "Viola", eta: 19 },
  { nome: "Alessandro", cognome: "Arancio", eta: 14 },
  { nome: "Martina", cognome: "Grigio", eta: 33 }
];

newString = persone.map((persona) => {
    if(persona.eta >= 18) {
        return (`${persona.nome} ${persona.cognome} ha ${persona.eta} anni e può guidare`);
    }
    else {
        return (`${persona.nome} ${persona.cognome} ha ${persona.eta} anni e non può guidare`)
    }
})

console.log( newString)