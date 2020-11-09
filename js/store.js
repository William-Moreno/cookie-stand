'use strict';

var cookieOrders = [];

function Order(firstName, lastName, streetAddress, city, state, zipCode, payment, sockeye, chinook, coho, pink, chum, fishy, cutter, shirt) {
 this.firstName = firstName;
 this.lastName = lastName;
 this.streetAddress = streetAddress;
 this.city = city;
 this.state = state;
 this.zipCode = zipCode;
 this.payment = payment;
 this.sockeye = sockeye;
 this.chinook = chinook;
 this.coho = coho;
 this.pink = pink;
 this.chum = chum;
 this.fishy = fishy;
 this.cutter = cutter;
 this.shirt = shirt;

 cookieOrders.push(this);

}

function createOrder(e){
 e.preventDefault();
 var firstName = e.target.firstname.value;
 var lastName = e.target.lastname.value;
 var streetAddress = e.target.street.value;
 var city = e.target.city.value;
 var state = e.target.state.value;
 var zipCode = e.target.zipcode.value;
 var payment = e.target.payment.value;
 var sockeye = Number(e.target.sockeye.value);
 var chinook = Number(e.target.chinook.value);
 var coho = Number(e.target.coho.value);
 var pink = Number(e.target.pink.value);
 var chum = Number(e.target.chum.value);
 var fishy = Number(e.target.fishy.value);
 var cutter = Number(e.target.cutter.value);
 var shirt = Number(e.target.shirt.value);

 var totalCost = ((sockeye * 2.45) + (chinook * 2.25) + (coho * 1.85) + (pink * 2.75) + (chum * 1.95) + (fishy * 0.75) + (cutter * 1.95) + (shirt * 14.95));

new Order(firstName, lastName, streetAddress, city, state, zipCode, payment, sockeye, chinook, coho, pink, chum, fishy, cutter, shirt);

formElement.reset();

document.getElementById('total').innerHTML = '';

printTotal(totalCost);

}

function printTotal(orderPrice){
 var orderPrice = orderPrice;
var orderTotal = document.getElementById('total');
var totalPrice = document.createElement('p');
totalPrice.textContent = `THANK YOU!! Your total order comes to $${orderPrice}.`;
orderTotal.appendChild(totalPrice);
}

var formElement = document.getElementById('cookie-order');
formElement.addEventListener('submit', createOrder);