//-----------CallBack Functions--------------

//----------------- Q1 ---------------------
function Q1a() {
  console.log("Hosen");
}
function Q1b(callback) {
  callback();
}

Q1b(Q1a);

//----------------- Q2 ---------------------
function RandomNumber() {
  console.log(Math.floor(Math.random() * 100));
}

function cool(callback) {
  callback();
}

cool(RandomNumber);

//------------------ Q3 ---------------------
function printNum(num) {
  console.log(num);
}
function nice(callback) {
  callback(42);
}

nice(printNum);

//------------------ Q4 ---------------------
function randomNumber(x1, x2, x3, x4, x5) {
  const arr = [x1, x2, x3, x4, x5];
  return arr[Math.floor(Math.random() * arr.length)];
}

function amazing(callback) {
  const num = callback(42, 128, 37, 81, 66);
  console.log("Num: " + num);
}
amazing(randomNumber);
