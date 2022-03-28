function Q1() {
  var names = [];
  for (var i = 0; i < 5; i++) {
    names[i] = prompt("Enter Name");
  }
  console.log(names[0] + " " + names[4]);
  console.log(names[0] + "\n" + names[4]);
  for (var i = 4; i >= 0; i--) {
    console.log(names[i]);
  }
}
//-------------------------------------------------------------
function Q2() {
  var fruit = [];
  for (var i = 0; i < 4; i++) {
    fruit[i] = prompt("Enter fruit");
    console.log(fruit[i] + "\n");
  }
  for (var i = 0; i < 4; i++) {
    console.log(fruit[i] + "\n");
  }
}
//-------------------------------------------------------------
function Q3() {
  var grades = [];
  var valid = [];
  var wrongNum = 0;
  for (var i = 0; i < 10; i++) {
    grades[i] = +prompt("Enter grades");
    if (grades[i] > 100 || grades[i] < 0) {
      valid[i] = 1;
      wrongNum = 1;
    }
  }
  if (wrongNum == 1) {
    for (var i = 0; i < 10; i++) {
      if (valid[i] == 1) console.log(grades[i] + "Not Valid Number");
    }
  } else console.log("Valid Numbers");
}
//-------------------------------------------------------------
function Q4() {
  var Numbers = [];
  var sum = 0,
    max = 0,
    min = 0;
  for (var i = 0; i < 20; i++) {
    Numbers[i] = Math.floor(Math.random() * 100);
    console.log(Numbers[i]);
    sum += Numbers[i];
    if (Numbers[i] > max) max = Numbers[i];
  }
  for (var i = 19; i >= 0; i--) {
    console.log(Numbers[i]);
  }
  console.log(sum);
  console.log(Math.max(...Numbers));
  console.log(Math.min(...Numbers));
}
//-------------------------------------------------------------
function Q5() {
  var N = +prompt("Enter N");
  var str = "";
  var k = 1;
  for (var i = 1; i <= N; i++) {
    for (var j = 1; j <= k; j++) {
      str += j + " ";
    }
    k++;
    str += "<br>";
  }
  document.write(str);
}
//-------------------------------------------------------------
function Q6() {
  var N = +prompt("Enter N");
  var str = "";

  for (var i = 1; i <= N; i++) {
    for (var j = 1; j <= N; j++) {
      str += j + " ";
    }
    str += "<br>";
  }
  document.write(str);
}
//-------------------------------------------------------------
function Q7() {
  var Num = 0;
  do {
    Num = prompt("Enter Numbers");
    for (var i = Num; i > 0; i--) {
      console.log(i);
    }
  } while (Num > 0);
}

//-------------------------------------------------------------
function Q8() {
  var N = +prompt("Enter N");
  var str = "";

  for (var i = 1; i <= N; i++) {
    for (var j = 1; j <= N; j++) {
      str += "* ";
    }
    str += "<br>";
  }
  document.write(str);
}

//-------------------------------------------------------------
function Q9() {
  var x = +prompt("Enter Height");
  var y = +prompt("Enter width");
  var str = "";
  for (var i = 0; i < x; i++) {
    for (var j = 0; j < y; j++) {
      str += "* ";
    }
    str += "<br>";
  }
  document.write(str);
}

//-------------------------------------------------------------

function Q10() {
  var x = +prompt("Enter N");
  var y = x;
  var str = "";
  for (var i = 0; i < x; i++) {
    for (var j = 0; j < y; j++) {
      str += "* ";
    }
    str += "<br>";
    y--;
  }
  document.write(str);
}
 