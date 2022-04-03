//------------------------- Question 1 -------------------------

function Q1() {
  let first = prompt("Enter First Name");
  let last = prompt("Enter Last Name");
  console.log(first + " " + last);
}

Q1();

//------------------------- Question 2 -------------------------
function Q2(x, y, z) {
  return "The sum is: " + (x + y + z) + " The avg is: " + (x + y + z) / 3;
}
console.log(Q2(10, 2, 54));
console.log(
  Q2(
    Math.floor(Math.random() * 100),
    Math.floor(Math.random() * 100),
    Math.floor(Math.random() * 100)
  )
);

console.log(Q2(+prompt("Enter x"), +prompt("Enter y"), +prompt("Enter z")));

//------------------------- Question 3 -------------------------

function Q3a(len) {
  let str = "";
  for (var i = 0; i < len; i++) {
    str += "* ";
  }
  document.write(str + "<br>");
}

function Q3b(size) {
  for (var i = 0; i < size; i++) {
    Q3a(size);
  }
}

Q3b(+prompt("Enter size of square"));

//------------------------- Question 4 -------------------------

function Q4a(limit) {
  let str = "";
  for (var i = 1; i <= limit; i++) {
    str += i + " ";
  }
  document.write(str + "<br>");
}

function Q4b(size) {
  for (var i = 1; i <= size; i++) {
    Q4a(i);
  }
}

Q4b(+prompt("Enter Number"));

//------------------------- Question 5 -------------------------

function Q5a(len) {
  let str = "";
  for (var i = 0; i < len; i++) {
    str += "* ";
  }
  document.write(str + "<br>");
}

function Q5b(size) {
  for (var i = size; i >= 1; i--) {
    Q5a(i);
  }
}

Q5b(+prompt("Enter Number"));

//------------------------- Question 6 -------------------------

function Q6a(len) {
  let str = "";
  for (var i = 1; i <= len; i++) {
    str += i + " ";
  }
  for (var i = 1; i <= len; i++) {
    str += "* ";
  }
  document.write(str + "<br>");
}

function Q6b(size) {
  for (var i = size; i >= 1; i--) {
    Q6a(i);
  }
}

Q6b(+prompt("Enter Number"));

//------------------------- Question 7 -------------------------

function Q7a(len) {
  let str = "";
  for (var i = 0; i < len; i++) {
    str += "* ";
  }
  document.write(str + "<br>");
}

function Q7b(size) {
  for (var i = size; i >= 1; i--) {
    Q7a(i);
  }
  for (var i = 1; i <= size; i++) {
    Q7a(i);
  }
}

Q7b(+prompt("Enter Number"));
