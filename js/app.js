'use strict'

var times = ['6am:','7am:','8am:','9am:','10am:','11am:','12pm:','1pm:','2pm:','3pm:','4pm:','5pm:','6pm:','7pm:'];
var allLocations = [];

function Store(city,minCustomers,maxCustomers,averageCookies){
  this.city = city;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.averageCookies = averageCookies;
  this.dailyCookies = 0;
  this.customersPerHour = [];
  this.cookiesPerHour = [];

  allLocations.push(this);
}

Store.prototype.randomCustomers = function(){
  for( var i = 0 ; i < 14 ; i++ ) {
      this.customersPerHour.push(Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1) + this.minCustomers));
  }
}

Store.prototype.hourlyCookieSales = function(){
  for( var j = 0 ; j < 14 ; j++ ) {
    var hourlyCookies = Math.ceil(this.customersPerHour[j] * this.averageCookies);
    this.cookiesPerHour.push(hourlyCookies);
    this.dailyCookies += hourlyCookies;
  }
}

var seattle = new Store('Seattle', 23, 65, 6.3);
var tokyo = new Store('Tokyo', 3, 24, 1.2);
var dubai = new Store('Dubai', 11, 38, 3.7);
var paris = new Store('Paris', 20, 38, 2.3);
var lima = new Store('Lima', 2, 16, 4.6);

seattle.randomCustomers();
seattle.hourlyCookieSales();
tokyo.randomCustomers();
tokyo.hourlyCookieSales();
dubai.randomCustomers();
dubai.hourlyCookieSales();
paris.randomCustomers();
paris.hourlyCookieSales();
lima.randomCustomers();
lima.hourlyCookieSales();

// render: function() {
//   for( var i = 0 ; i < this.cookiesSoldPerHour.length ; i++ ) {
//     var liElement = document.createElement('li');
//     liElement.textContent = `${times[i]} ${this.cookiesSoldPerHour[i]} cookies`;
//     this.list.appendChild(liElement);
//   }
//   var liElement = document.createElement('li');
//   liElement.textContent = `Total: ${this.totalCookiesDaily} cookies`;
//   this.list.appendChild(liElement);
// }
