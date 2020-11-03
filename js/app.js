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
}

var seattle = {
 minCustomers: 23,
 maxCustomers: 65,
 cookiesPerCustomer: 6.3,
 customersPerHour: [],
 cookiesSoldPerHour: []
}

var tokyo = {
 minCustomers: 3,
 maxCustomers: 24,
 cookiesPerCustomer: 1.2,
 customersPerHour: [],
 cookiesSoldPerHour: []
}

var dubai = {
 minCustomers: 11,
 maxCustomers: 38,
 cookiesPerCustomer: 3.7,
 customersPerHour: [],
 cookiesSoldPerHour: []
}

var paris = {
 minCustomers: 20,
 maxCustomers: 38,
 cookiesPerCustomer: 2.3,
 customersPerHour: [],
 cookiesSoldPerHour: []
}

var lima = {
 minCustomers: 2,
 maxCustomers: 16,
 cookiesPerCustomer: 4.6,
 customersPerHour: [],
 cookiesSoldPerHour: []
}

populate(seattle);
populate(tokyo);
populate(dubai);
populate(paris);
populate(lima);

