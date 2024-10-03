function addition(a, b) {
  const resultat = a + b;

  return resultat;
}

console.log(addition(2, 3)); // Résultat attendu : 5

function salutation(nom) {
  const helloAlice = `Bonjour ${nom}`;

  return helloAlice;
}

console.log(salutation("Alice")); // Résultat attendu : "Bonjour Alice"

function estPair(nombre) {
  const resultat = nombre % 2;
  if (resultat === 0) {
    console.log(true);
  } else {
    console.log(false);
  }

  return resultat;
}

estPair(4); // Résultat attendu : true
estPair(7); // Résultat attendu : false

function aireRectangle(longueur, largeur) {
  return longueur * largeur;
}

console.log(aireRectangle(5, 3)); // Résultat attendu : 15

function estMajuscule(chaine) {
  if (chaine === "HELLO") {
    return true;
  } else {
    return false;
  }
}
console.log(estMajuscule("HELLO")); // Résultat attendu : true
console.log(estMajuscule("Hello")); // Résultat attendu : false

function maxDeuxNombres(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}

console.log(maxDeuxNombres(5, 10)); // Résultat attendu : 10

function difference(a, b) {
  return a - b;
}

console.log(difference(10, 3)); // Résultat attendu : 7

function convertirEnCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

console.log(convertirEnCelsius(100)); // Résultat attendu : 37.7778

function estMajeur(age) {
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
}

console.log(estMajeur(20)); // Résultat attendu : true
console.log(estMajeur(16)); // Résultat attendu : false
