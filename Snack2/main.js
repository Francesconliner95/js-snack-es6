$(document).ready(function() {

var nomi=['ciccio', 'filippo', 'michele', 'pasquale', 'lello', 'dino', 'vincenzo', 'lucia'];

console.log(nomi);

do {
    var numero1=parseInt(prompt('Inserisci il primo numero:'));

} while (numero1<1 || numero1>8);
//inserisci un valore compreso tra 1 e 8(lunghezza array)
do {
    var numero2=parseInt(prompt('Inserisci il secondo numero:'));

} while (numero2<1 || numero2>8);

/*decrementiamo entrambi i numeri per "convertire" da uomo a macchina il punto di partenza del conteggio*/
numero1--;
numero2--;

//facciamo in modo che il valore di numero1 sia sempre più basso di numero2 per far funzionare il ciclo for
if(numero1>numero2){
    var appoggio=numero1;
    numero1=numero2;
    numero2=appoggio;
}

var new_array = nomi.filter((elemento, index, array) => index>=numero1&&index<=numero2 );
console.log('nuovo array: ' + new_array);

});
