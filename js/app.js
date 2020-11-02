'use strict'

var seattleShop = {
  minCustomersHour: 23,
  maxCustomersHour: 65,
  customerCookieAverage: 6.3,
  randomCustomersHourly: function(){
   var randomCustomerArray = [];
   
   for( var i = 0 ; i < 14 ; i++) {
    var min = Math.ceil(this.minCustomersHour);
    var max = Math.floor(this.maxCustomersHour);
    randomCustomerArray.push(Math.floor(Math.random() * (max - min + 1) + min));
   }
   return randomCustomerArray;
  },
  cookieSalesHourly: function(){
   
  }
}

 console.log(seattleShop);
 console.log(seattleShop.randomCustomersHourly());

 // function generateRandomCustomersArray(min, max){
 //   randomCustomerArray.push(seattleShop.randomCustomersHourly());
 //  }
 //  return randomCustomerArray;
 // }

 // var answer = generateRandomCustomersArray(seattleShop.minCustomersHour,seattleShop.maxCustomersHour);
 // console.log(answer);