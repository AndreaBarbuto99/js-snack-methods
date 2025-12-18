/*A partire da un array di stringhe, 
crea un secondo array formattando le stringhe del primo array in minuscolo 
e con l’iniziale maiuscola. */


const parole = [
  "CASA",        
  "AlBum",       
  "fiUme",       
  "STELLA",      
  "piano",       
  "GaTtO",       
  "LiBro",       
  "MARE",        
  "sole",        
  "ViNo"         
];

const paroleFormat = parole.map ((parola) => {
   min = parola.toLowerCase();
   return min.charAt(0).toUpperCase() + min.slice(1);
});

console.log(paroleFormat);

// const capitalizedStrings = parole.map ((name) => {
//     const firstLetter = name[0].toUpperCase();
//     const otherLetter = name.substring(1).toLowerCase();
//     return firstLetter + otherLetter;
// })

// console.log(capitalizedStrings)
