$(document).ready(function() {

var nomi=[
    {
     nome: 'francesco',
     cognome: 'divincenzo',
    },
    {
     nome: 'mario',
     cognome: 'rossi',
    },
    {
     nome: 'gina',
     cognome: 'verdi',
    },
    {
     nome: 'dino',
     cognome: 'brunetti',
    },
];

console.log('Array Prima:');
console.log(nomi);

var nomi_copy = nomi.map((elemento, index, array) =>{
    var {nome, cognome}=elemento;
    return{
        nome,
        cognome
    }
});

for (var i = 0; i < nomi_copy.length; i++) {

    var alphabet = "abcdefghijklmnopqrstuvwxyz"
    var randomCharacter = alphabet[Math.floor(Math.random() * alphabet.length)]
    //creo una variabile il cui valore sara dato da un numero generato random tra 1 e 26(alphabet.length la quantita' di valori contenuti nella mia stringa array)
    nomi_copy[i].position= randomCharacter;

}

console.log('Array Dopo:');
console.log(nomi_copy);

});
