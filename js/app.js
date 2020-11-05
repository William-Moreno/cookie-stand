'use strict';

var hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
var controlCurve = [0.5, 0.75, 1.0, 0.6, 0.8, 1.0, 0.7, 0.4, 0.6, 0.9, 0.7, 0.5, 0.3, 0.4];
var allLocations = [];
var totalHourlyCookies = [];
var totalHourlyStaff = [];
var cookieGrandTotal = 0;
var newestStore;

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
  var tbodyParent = document.getElementById('table-body');
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

new Store('Seattle', 23, 65, 6.3);
new Store('Tokyo', 3, 24, 1.2);
new Store('Dubai', 11, 38, 3.7);
new Store('Paris', 20, 38, 2.3);
new Store('Lima', 2, 16, 4.6);

function createLocation(event) {
  event.preventDefault();
  var city = event.target.newcity.value;
  var min = Number(event.target.minimumpop.value);
  var max = Number(event.target.maximumpop.value);
  var avg = Number(event.target.averagesale.value);

  new Store(city, min, max, avg);
  newestStore = allLocations[allLocations.length - 1];
  newestStore.randomCustomers();
  newestStore.tossersEachHour();
  newestStore.hourlyCookieSales();
  newestStore.renderSales();
  newestStore.renderStaff();
  totalHourlyCookies = [];
  totalHourlyStaff = [];
  cookieGrandTotal = 0;
  renderSalesTableFooter();
  var tfootParent = document.getElementById('table-foot');
  tfootParent.removeChild(tfootParent.firstElementChild);
  renderStaffTableFooter();
  var staffFootParent = document.getElementById('staff-foot');
  staffFootParent.removeChild(staffFootParent.firstElementChild);
}

function renderSalesTableHeader(){
  var theadParent = document.getElementById('table-head');
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
  var tfootParent = document.getElementById('table-foot');
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


function renderStaffTableHeader(){
  var staffHeadParent = document.getElementById('staff-head');
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
  var staffFootParent = document.getElementById('staff-foot');
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

renderSalesTableHeader();

for(var i = 0; i < allLocations.length; i++){
  allLocations[i].randomCustomers();
  allLocations[i].tossersEachHour();
  allLocations[i].hourlyCookieSales();
  allLocations[i].renderSales();
}

renderSalesTableFooter();

renderStaffTableHeader();

for(var i = 0; i < allLocations.length; i++){
  var staffBodyParent = document.getElementById('staff-body');
  allLocations[i].renderStaff();
}

renderStaffTableFooter();

var formElement = document.getElementById('new-location-form');
formElement.addEventListener('submit', createLocation);
