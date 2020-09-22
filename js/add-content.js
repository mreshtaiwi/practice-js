// var today = new Date();

// console.log(today);
// var hourNow = today.getHours();
// console.log(hourNow);
var hourNow = prompt('please enter an hour from 0-23');
var greeting;
console.log(greeting);

if (hourNow > 18 && hourNow <= 23) {
    greeting = 'Good evening, Class!';
  } else if (hourNow > 12 && hourNow <= 18) {
    greeting = 'Good afternoon, Class!';
  } else if (hourNow >= 0 && hourNow <= 12) {
    greeting = 'Good morning!';
  } else {
    greeting = 'Something went wrong!';
  }
  
 var age = 10;
 age = age + 10;
 console.log(age);

 var fname = 'shihab ';
 var lname = 'eshtaiwi';

 console.log(fname+lname);

document.write('<h3>'+greeting+'</h3>');
