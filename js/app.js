'use strict'

var hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
var controlCurve = [0.5, 0.75, 1.0, 0.6, 0.8, 1.0, 0.7, 0.4, 0.6, 0.9, 0.7, 0.5, 0.3, 0.4];
var allLocations = [];
var totalHourlyCookies = [];
var totalHourlyStaff = [];
var cookieGrandTotal = 0;

function Store(city,minCustomers,maxCustomers,averageCookies){
  this.city = city;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.averageCookies = averageCookies;
  this.dailyCookies = 0;
  this.customersPerHour = [];
  this.cookiesPerHour = [];
  this.tossersPerHour = [];
  
  allLocations.push(this);
}

Store.prototype.randomCustomers = function(){
  for( var i = 0 ; i < 14 ; i++ ) {
    var curveMax = Math.ceil(this.maxCustomers * controlCurve[i]);
    this.customersPerHour.push(Math.floor(Math.random() * (curveMax - this.minCustomers + 1) + this.minCustomers));
  }
}

Store.prototype.tossersEachHour = function(){
  for( var i = 0 ; i < this.customersPerHour.length ; i++ ){
    if((this.customersPerHour[i] / 20) > 2) {
      this.tossersPerHour.push(Math.ceil(this.customersPerHour[i]/20));
    } else {
      this.tossersPerHour.push(2);
    }
  }
}

Store.prototype.hourlyCookieSales = function(){
  for( var j = 0 ; j < 14 ; j++ ) {
    var hourlyCookies = Math.ceil(this.customersPerHour[j] * this.averageCookies);
    this.cookiesPerHour.push(hourlyCookies);
    this.dailyCookies += hourlyCookies;
  }
}

Store.prototype.renderSales = function(){
  var trElement = document.createElement('tr');
  var tdElement = document.createElement('td');
  tdElement.textContent = this.city;
  tbodyParent.appendChild(trElement);
  trElement.appendChild(tdElement);
  for(var i = 0 ; i < hours.length ; i++) {
    tdElement = document.createElement('td');
    tdElement.textContent = this.cookiesPerHour[i];
    trElement.appendChild(tdElement);
  }
  tdElement = document.createElement('td');
  tdElement.textContent = this.dailyCookies;
  trElement.appendChild(tdElement);
}

Store.prototype.renderStaff = function(){
  var trElement = document.createElement('tr');
  var tdElement = document.createElement('td');
  tdElement.textContent = this.city;
  staffBodyParent.appendChild(trElement);
  trElement.appendChild(tdElement);
  for(var i = 0 ; i < hours.length ; i++) {
    tdElement = document.createElement('td');
    tdElement.textContent = this.tossersPerHour[i];
    trElement.appendChild(tdElement);
  }
}

var tbodyParent = document.getElementById('table-body');
var tfootParent = document.getElementById('table-foot');
var theadParent = document.getElementById('table-head');
var staffBodyParent = document.getElementById('staff-body');
var staffFootParent = document.getElementById('staff-foot');
var staffHeadParent = document.getElementById('staff-head');

function renderSalesTableHeader(){
  var trElement = document.createElement('tr');
  var thElement = document.createElement('th');
  thElement.textContent = 'Location';
  theadParent.appendChild(trElement);
  trElement.appendChild(thElement);
  for(var i = 0 ; i < hours.length ; i++) {
    thElement = document.createElement('th');
    thElement.textContent = hours[i];
    trElement.appendChild(thElement);
  }
  thElement = document.createElement('th');
  thElement.textContent = 'Daily Location Total';
  trElement.appendChild(thElement);
}

function totalHourlySales(){
  for (var i = 0 ; i < hours.length ; i++) {
    var hourlyTotal = 0;
    for(var j = 0 ; j < allLocations.length ; j++) {
      hourlyTotal += allLocations[j].cookiesPerHour[i];
    }
    totalHourlyCookies.push(hourlyTotal);
    cookieGrandTotal += hourlyTotal;
  }
}

function renderSalesTableFooter(){
  totalHourlySales();
  var trElement = document.createElement('tr');
  var thElement = document.createElement('th');
  thElement.textContent = 'Totals';
  tfootParent.appendChild(trElement);
  trElement.appendChild(thElement);
  for(var i = 0 ; i < totalHourlyCookies.length ; i++) {
    thElement = document.createElement('th');
    thElement.textContent = totalHourlyCookies[i];
    trElement.appendChild(thElement);
  }
  thElement = document.createElement('th');
  thElement.textContent = cookieGrandTotal;
  trElement.appendChild(thElement);
}

var seattle = new Store('Seattle', 23, 65, 6.3);
var tokyo = new Store('Tokyo', 3, 24, 1.2);
var dubai = new Store('Dubai', 11, 38, 3.7);
var paris = new Store('Paris', 20, 38, 2.3);
var lima = new Store('Lima', 2, 16, 4.6);

seattle.randomCustomers();
seattle.tossersEachHour();
seattle.hourlyCookieSales();
tokyo.randomCustomers();
tokyo.tossersEachHour();
tokyo.hourlyCookieSales();
dubai.randomCustomers();
dubai.tossersEachHour();
dubai.hourlyCookieSales();
paris.randomCustomers();
paris.tossersEachHour();
paris.hourlyCookieSales();
lima.randomCustomers();
lima.tossersEachHour();
lima.hourlyCookieSales();

renderSalesTableHeader();
seattle.renderSales();
tokyo.renderSales();
dubai.renderSales();
paris.renderSales();
lima.renderSales();
renderSalesTableFooter();


function renderStaffTableHeader(){
  var trElement = document.createElement('tr');
  var thElement = document.createElement('th');
  thElement.textContent = 'Location';
  staffHeadParent.appendChild(trElement);
  trElement.appendChild(thElement);
  for(var i = 0 ; i < hours.length ; i++) {
    thElement = document.createElement('th');
    thElement.textContent = hours[i];
    trElement.appendChild(thElement);
  }
}

function totalHourlyTossers(){
  for (var i = 0 ; i < hours.length ; i++) {
    var hourlyStaff = 0;
    for(var j = 0 ; j < allLocations.length ; j++) {
      hourlyStaff += allLocations[j].tossersPerHour[i];
    }
    totalHourlyStaff.push(hourlyStaff);
  }
}

function renderStaffTableFooter(){
  totalHourlyTossers();
  var trElement = document.createElement('tr');
  var thElement = document.createElement('th');
  thElement.textContent = 'Total Tossers';
  staffFootParent.appendChild(trElement);
  trElement.appendChild(thElement);
  for(var i = 0 ; i < totalHourlyStaff.length ; i++) {
    thElement = document.createElement('th');
    thElement.textContent = totalHourlyStaff[i];
    trElement.appendChild(thElement);
  }
}

renderStaffTableHeader();
seattle.renderStaff();
tokyo.renderStaff();
dubai.renderStaff();
paris.renderStaff();
lima.renderStaff();
renderStaffTableFooter();