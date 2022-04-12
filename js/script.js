
//----------------- Email Check Function ----------------------

function checkEmail(email) {
  let isValid = true;
  let isQuoted = false;
  let special = false;
  let at = [];
  let quotation = [];


  for (let index = 0; index < email.length; index++) {
    if (email[index] == "@") {
      at.push(index);
    }

    if (email[index] == '"') {
      quotation.push(index);
    }
  }
  for (let i = 0; i < at[at.length - 1]; i++) {
    if (
      email[i] == "[" ||
      email[i] == "]" ||
      email[i] == '"' ||
      email[i] == "," ||
      email[i] == ":" ||
      email[i] == ";" ||
      email[i] == "<" ||
      email[i] == ">" ||
      email[i] == "(" ||
      email[i] == ")" ||
      email[i] == "\\" ||
      email[i] == " "
    ) {
      special = true;
    }
  }
  for (let i = at[at.length - 1]; i < email.length; i++) {
    if (email[i] == "_") isValid = false;
  }

  if (
    quotation[0] == 0 &&
    at[at.length - 1] - 1 == quotation[quotation.length - 1]
  ) {
    isQuoted = true;
  }

  if (at.length != 1 && !isQuoted) {
    isValid = false;
  }
  if (special && !isQuoted) isValid = false;
  if (at[at.length - 1] >= 63) isValid = false;

  return isValid;
}


//------------------ Check ID Function ----------------------

function checkValidId(ID) {
  let sum = 0;
  if (ID.length != 9) return false;
  for (let i = 0; i < ID.length; i++) {
    var digit = ID[ID.length - 1 - i] - "0";
    sum += i % 2 != 0 ? getDouble(digit) : digit;
  }
  return sum % 10 == 0;
}
function getDouble(i) {
  switch (i) {
    case 0:
      return 0;
    case 1:
      return 2;
    case 2:
      return 4;
    case 3:
      return 6;
    case 4:
      return 8;
    case 5:
      return 1;
    case 6:
      return 3;
    case 7:
      return 5;
    case 8:
      return 7;
    case 9:
      return 9;
    default:
      return 0;
  }
}

//-------------- Check Age----------------------

function checkAge(age) {
  if (age < 0 || age > 100) return false;
  return true;
}

//-------------- Check Name----------------------

function checkName(name) {
  var chName = /^[a-zA-Z]+$/;
  if (!chName.test(name) || chName.length < 3) return false;
  return true;
}

//------------------------------------------

function checkInfo() {
  let name = document.getElementById("Name").value;
  let Age = document.getElementById("Age").value;
  let ID = document.getElementById("ID").value;
  let Email = document.getElementById("Email").value;
  if (!checkName(name) && name != "") {
    alert("The Name Is Not Valid");
  }
  if (!checkAge(Age) && Age != "") {
    alert("The Age Is Not Valid");
  }
  if (!checkValidId(ID) && ID != "") {
    alert("The ID Is Not Valid");
  }
  if (!checkEmail(Email) && Email != "") {
    alert("The Email Is Not Valid");
  } else alert("Thanks for Submit");
}

