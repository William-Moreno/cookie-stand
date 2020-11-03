'use strict'

var locations = ['seattle','tokyo','dubai','paris','lima'];

function populate(location) {
 for( var i = 0 ; i < 14 ; i++ ) {
   var min = Math.ceil(location.minCustomers);
   var max = Math.floor(location.maxCustomers);
   location.customersPerHour.push(Math.floor(Math.random() * (max - min + 1) + min));
 }
 for( var j = 0 ; j < 14 ; j++ ) {
  var cookieTotal = Math.ceil(location.customersPerHour[j] * location.cookiesPerCustomer);
  location.cookiesSoldPerHour.push(cookieTotal);
 }
 var totalSales = location.cookiesSoldPerHour[0];
 for( var k = 1 ; k < 14 ; k++ ) {
  totalSales += location.cookiesSoldPerHour[k];
 }
 location.totalCookiesDaily = totalSales;
}

var seattle = {
 minCustomers: 23,
 maxCustomers: 65,
 cookiesPerCustomer: 6.3,
 customersPerHour: [],
 cookiesSoldPerHour: [],
 totalCookiesDaily: 0
}

var tokyo = {
 minCustomers: 3,
 maxCustomers: 24,
 cookiesPerCustomer: 1.2,
 customersPerHour: [],
 cookiesSoldPerHour: [],
 totalCookiesDaily: 0
}

var dubai = {
 minCustomers: 11,
 maxCustomers: 38,
 cookiesPerCustomer: 3.7,
 customersPerHour: [],
 cookiesSoldPerHour: [],
 totalCookiesDaily: 0
}

var paris = {
 minCustomers: 20,
 maxCustomers: 38,
 cookiesPerCustomer: 2.3,
 customersPerHour: [],
 cookiesSoldPerHour: [],
 totalCookiesDaily: 0
}

var lima = {
 minCustomers: 2,
 maxCustomers: 16,
 cookiesPerCustomer: 4.6,
 customersPerHour: [],
 cookiesSoldPerHour: [],
 totalCookiesDaily: 0
}

populate(seattle);
populate(tokyo);
populate(dubai);
populate(paris);
populate(lima);

var seattleList = document.getElementById('seattle-list');
var liElement = document.createElement('li');

