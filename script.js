/* Crea un array composto da 10 automobili. 
Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione 
(benzina, diesel, gpl, elettrico, metano). Dividi le automobili in 3 array separati:
nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, 
nel terzo il resto delle auto. Infine stampa separatamente i 3 array.*/


const automobili = [
    { marca: "Fiat", modello: "Panda", alimentazione: "benzina" },
    { marca: "Volkswagen", modello: "Golf", alimentazione: "diesel" },
    { marca: "Renault", modello: "Clio", alimentazione: "gpl" },
    { marca: "Tesla", modello: "Model 3", alimentazione: "elettrico" },
    { marca: "Opel", modello: "Corsa", alimentazione: "benzina" },
    { marca: "Ford", modello: "Focus", alimentazione: "benzina" },
    { marca: "Toyota", modello: "Yaris", alimentazione: "ibrido" },
    { marca: "BMW", modello: "X1", alimentazione: "diesel" },
    { marca: "Hyundai", modello: "Kona", alimentazione: "elettrico" },
    { marca: "Lancia", modello: "Ypsilon", alimentazione: "gpl" }
];

const benzinaAuto = automobili.filter ((auto)  =>
{
    return auto.alimentazione === "benzina";
}
);

console.log(benzinaAuto);

const dieselAuto = automobili.filter ((auto) => {
    return auto.alimentazione === "diesel";
});

console.log(dieselAuto);

const altreAuto = automobili.filter ((auto) => {
    return auto.alimentazione !== "diesel" && auto.alimentazione !== "benzina";
});

console.log(altreAuto);
