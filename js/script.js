// GENERO 5 NUMERI CASUALI TRA 1 E 100
var numeri = [];
var i = 0;

do{
  var numero = Math.floor(Math.random() * 100) + 1;
  if(numeri.indexOf(numero) == -1){
    numeri.push(numero);
    i++
    console.log(numeri);
  }else{
    console.log("il numero è gia presente")
  }
}while(i < 5);

alert(numeri);


// COSTRUISCO IL SETTIMEOUT E UN TIMER DI 3 SECONDI
var numeriUser = [];
var numeriGiusti = []
var trovato;

var interval = setTimeout(function(){
  for(var i = 0; i < 5; i++){
    var numUser = parseInt(prompt("Inserisci un numero da 1 a 100"));
    numeriUser.push(numUser);
    console.log(numeriUser);
  }

  // FUNZIONE PER SCOPRIRE QUANTI E QUALI NUMERI SONO STATI INDOVINATI
  // CICLO L'ARRAY DEI NUMERI RANDOM
  for(var i = 0; i < numeriUser.length; i++){
    trovato = numeri.indexOf(numeriUser[i]);
    console.log(trovato);
    if(trovato == i){
      numeriGiusti.push(numeriUser[i]);
    }else{
      console.log("numero non giusto");
    }
  }
  
  // CREO UN ALERT PER MOSTRARE ALL'UTENTE SE HA AZZECCATO QUALCHE NUMERO
  if(numeriGiusti.length == 0){
    alert("Non ne hai azzeccato nemmeno uno!!")
  }else{
    alert("Hai azzeccato questi numeri: " + numeriGiusti)
  }
}, 3000);
