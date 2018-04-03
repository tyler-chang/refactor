const expect = require('chai').expect;

const Movie = require('../src/movie');
const Rental = require('../src/rental');
const Customer = require('../src/customer');

describe('Test', () => {
  let customer;
  let movieChildren;
  let rentalChildren;
  let movieRegular;
  let rentalRegular;
  let movieNewRelease;
  let rentalNewRelease;

  beforeEach(() => {
    customer = new Customer('Tyler');

    movieChildren = new Movie('喜洋洋与灰太狼', Movie.CHILDRENS);
    rentalChildren = new Rental(movieChildren, 3);

    movieRegular = new Movie('杀破狼', Movie.CHILDRENS);
    rentalRegular = new Rental(movieRegular, 2);

    movieNewRelease = new Movie('祖宗十九代', Movie.CHILDRENS);
    rentalNewRelease = new Rental(movieNewRelease, 5);
  });
  
  it('', () => {
    customer.addRental(rentalChildren);
    customer.addRental(rentalRegular);
    customer.addRental(rentalNewRelease);

    let result = `Rental Record for ${customer.getName()} \n`;
    result += `${movieChildren.getTitle()}\t1.5\n`;
    result += `${movieRegular.getTitle()}\t1.5\n`;
    result += `${movieNewRelease.getTitle()}\t4.5\n`;
    result += `Amount owed is 7.5\n`;
    result += `You earned 3 frequent renter points`;

    expect(customer.statement()).to.be.equal(result);
  });
});
