//combining arrays with spread operator
var evens = [2, 4, 6, 8];
var odds = [1, 3, 5, 7];
var primes = [2, 3, 5, 7, 11];
var total = [...primes, ...evens, ...odds];             //combined in given order
var newPrime = [...primes];                             //added in new variable
console.log(total);
console.log(newPrime);
console.log("==================================")       //clean code purpose

// destructuring from object properties
var jamesBond = {
    first : 'James',
    last : 'Bond',
    country : 'United States',
    city : 'New York',
    twitter : '@jamesBond',
};
var {first, last} = jamesBond;
console.log(jamesBond);
console.log("====================================")

//destructuring from arrays 
var players = ['paul', 'andy', 'darrell', 'jim'];
var [player1, player2, player3, player4] = players;
console.log(players);










