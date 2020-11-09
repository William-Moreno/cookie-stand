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

new Order(firstName, lastName, streetAddress, city, state, zipCode, payment, sockeye, chinook, coho, pink, chum, fishy, cutter, shirt);

}

console.log(cookieOrders);


var formElement = document.getElementById('cookie-order');
formElement.addEventListener('submit', createOrder);