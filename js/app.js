'use strict'

// var locations = [seattle,tokyo,dubai,paris,lima];

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

function dailySales(location) {
  var times = ['6am:','7am:','8am:','9am:','10am:','11am:','12pm:','1pm:','2pm:','3pm:','4pm:','5pm:','6pm:','7pm:'];
  for( var i = 0 ; i < location.cookiesSoldPerHour.length ; i++ ) {
    var liElement = document.createElement('li');
    liElement.textContent = times[i] + ' ' + location.cookiesSoldPerHour[i] + ' cookies';
    location.list.appendChild(liElement);
  }
  var liElement = document.createElement('li');
  liElement.textContent = 'Total: ' + location.totalCookiesDaily + ' cookies';
  location.list.appendChild(liElement);
}

var seattle = {
  list: document.getElementById('seattle-list'),
  minCustomers: 23,
  maxCustomers: 65,
  cookiesPerCustomer: 6.3,
  customersPerHour: [],
  cookiesSoldPerHour: []
}

var tokyo = {
  list: document.getElementById('tokyo-list'),
  minCustomers: 3,
  maxCustomers: 24,
  cookiesPerCustomer: 1.2,
  customersPerHour: [],
  cookiesSoldPerHour: []
}

var dubai = {
  list: document.getElementById('dubai-list'),
  minCustomers: 11,
  maxCustomers: 38,
  cookiesPerCustomer: 3.7,
  customersPerHour: [],
  cookiesSoldPerHour: []
}

var paris = {
  list: document.getElementById('paris-list'),
  minCustomers: 20,
  maxCustomers: 38,
  cookiesPerCustomer: 2.3,
  customersPerHour: [],
  cookiesSoldPerHour: []
}

var lima = {
  list: document.getElementById('lima-list'),
  minCustomers: 2,
  maxCustomers: 16,
  cookiesPerCustomer: 4.6,
  customersPerHour: [],
  cookiesSoldPerHour: []
}

/* populate the object arrays */

populate(seattle);
populate(tokyo);
populate(dubai);
populate(paris);
populate(lima);

/* write lists to sales sheet */

dailySales(seattle);
dailySales(tokyo);
dailySales(dubai);
dailySales(paris);
dailySales(lima);

/* testing another location for methods */

var venice = {
  list: document.getElementById('venice-list'),
  minCustomers: 17,
  maxCustomers: 32,
  cookiesPerCustomer: 5.2,
  customersPerHour: [],
  cookiesSoldPerHour: [],
  totalDailyCookies: 0,
  hourlyData: function () {
    for( var i = 0 ; i < 14 ; i++ ) {
      var min = Math.ceil(this.minCustomers);
      var max = Math.floor(this.maxCustomers);
      this.customersPerHour.push(Math.floor(Math.random() * (max - min + 1) + min));
    }
    for( var j = 0 ; j < 14 ; j++ ) {
      var cookieTotal = Math.ceil(this.customersPerHour[j] * this.cookiesPerCustomer);
      this.cookiesSoldPerHour.push(cookieTotal);
    }
    for( var k = 1 ; k < 14 ; k++ ) {
      this.totalDailyCookies += this.cookiesSoldPerHour[k];
    }
  }
}

venice.hourlyData();
console.log(venice);

