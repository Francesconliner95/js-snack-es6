$(document).ready(function() {

//creo il mio array con gli oggetti per immagazzinare i dati studenti
    var studenti=[
        {
            'nome': 'Francesco',
            'cognome': 'Divincenzo',
            'eta\'': '25',
        },
        {
            'nome': 'Carla',
            'cognome': 'Rossi',
            'eta\'': '32',
        },
        {
            'nome': 'Pippo',
            'cognome': 'Franco',
            'eta\'': '55',
        },
    ];

//ciclo gli oggetti nell'array e li stampo in console
console.log('Dati studenti:');
for (var key in studenti) {
    console.log(studenti[key]);
}

//ciclo gli oggetti nell'array e ne stampo solo se di tipo "nome" o "cognome"
console.log("Nome e cognome studenti:");
for (var key in studenti) {
    var oggetto_corrente = studenti[key]; //creo una variabile che memorizza l'oggetto corrente
    console.log('-Nome: ' + oggetto_corrente['nome']); //stampo solo il tipo "nome"
    console.log(' Cognome: ' + oggetto_corrente['cognome']); //stampo solo il tipo "cognome"
}

//devo aggiungere un nuovo studente e ne chiedo i relativi dati
console.log("Aggiungi un nuovo studente:");
var nome = prompt("Nome studente:");
var cognome = prompt("Cognome studente:");
var eta = prompt("Eta\' studente:");

//creo un oggetto al cui interno inserisco i valori chiesti in precedenza
var nuovo_studente={
    'nome': nome,
    'cognome': cognome,
    'eta\'': eta,
};

//pusho il nuovo oggetto nell'array studenti
studenti.push(nuovo_studente);

//stampo in console il riepilogo di tutti gli studenti
console.log('Dati studenti aggiornati:');
for (var key in studenti) {
    console.log(studenti[key]);
}

});
