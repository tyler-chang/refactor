const Movie = require('./movie');
const Rental = require('./rental');
const Customer = require('./customer');

const customer = new Customer('Tyler');

const movieChildren = new Movie('喜洋洋与灰太狼', Movie.CHILDRENS);
const rentalChildren = new Rental(movieChildren, 3);
customer.addRental(rentalChildren);

const movieRegular = new Movie('杀破狼', Movie.CHILDRENS);
const rentalRegular = new Rental(movieRegular, 2);
customer.addRental(rentalRegular);

const movieNewRelease = new Movie('祖宗十九代', Movie.CHILDRENS);
const rentalNewRelease = new Rental(movieNewRelease, 5);
customer.addRental(rentalNewRelease);

console.log(customer.statement());