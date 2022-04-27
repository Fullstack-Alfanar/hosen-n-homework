// ----------------------- multi functions -----------------------
function setCookies(x) {
  const d = new Date();
  d.setTime(d.getTime() + 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  document.cookie = x.id + "=" + x.value + ";" + expires;
}

function getCookies(x) {                                                                                                                                                                                                                                                                                       
  if (document.cookie.valueOf(x)) {
    let value = document.cookie;
    let parts = value.split(/=|;| /);
    for (let i = 0; i < parts.length; i++) {
      if (parts[i] == x) {
        alert(parts[i + 1]);
        break;
      }
    }
  } else alert("cookies is empty");
}

// ----------------------- Question 1 -----------------------
document.getElementById("saveBtn1").addEventListener("click", emailToCookies);
document
  .getElementById("loadBtn1")
  .addEventListener("click", getEmailFromCookie);

function emailToCookies() {
  let Email = document.getElementById("Email");
  if (checkEmail(Email.value)) {
    setCookies(Email);
  } else alert("Invalid Email");
  Email.value = "";
}
function getEmailFromCookie() {
  let Email = document.getElementById("Email").id;
  getCookies(Email);
}

// ----------------------- Question 2 -----------------------
document.getElementById("saveBtn2").addEventListener("click", phoneToCookies);
document.getElementById("loadBtn2").addEventListener("click", getPhoneCookie);

function phoneToCookies() {
  let phoneNum = document.getElementById("phoneNum");
  if (
    /^[0-9]+$/.test(phoneNum.value) &&
    Number.parseInt(phoneNum.value.length) > 3 &&
    Number.parseInt(phoneNum.value.length) < 15
  ) {
    setCookies(phoneNum);
  } else alert("Invalid Number");
  phoneNum.value = "";
}

function getPhoneCookie() {
  let phoneNum = document.getElementById("phoneNum").id;
  getCookies(phoneNum);
}

// ----------------------- Question 3 -----------------------
document.getElementById("saveBtn").addEventListener("click", checkIndex);
let arr = [];
function checkIndex() {
  let name = document.getElementById("fullName");
  let phoneNumber = document.getElementById("phoneNumber");
  let EmailAddress = document.getElementById("EmailAddress");
  if (
    !/^[a-zA-Z]+$/.test(name.value) ||
    name.value.length < 3 ||
    name.value.length >= 30 ||
    name.value == ""
  ) {
    alert("Invalid Name");
  } else if (
    !/^[0-9]+$/.test(phoneNumber.value) ||
    phoneNumber.value.length < 3 ||
    phoneNumber.value.length >= 30 ||
    phoneNumber.value == ""
  ) {
    alert("Invalid Number");
  } else if (
    EmailAddress.value.length < 3 ||
    EmailAddress.value.length >= 30 ||
    EmailAddress.value == ""
  ) {
    alert("Invalid Email");
  } else {
    let obj = {
      Name: name.value,
      Phone: phoneNumber.value,
      Email: EmailAddress.value,
    };
    arr = obj;
    localStorage.setItem("info", JSON.stringify(arr));
  }
  name.value = "";
  phoneNumber.value = "";
  EmailAddress.value = "";
}

// ----------------------- bounty Question -----------------------
document.getElementById("saveBtn3").addEventListener("click", saveToLocal);
document.getElementById("searchBtn").addEventListener("click", searchIndex);
let searchArr = [];
function searchIndex() {
  let index = document.getElementById("searchIndex");
  if (!(index.value == "" || index.value == null)) {
    let localSt = JSON.parse(localStorage.getItem("localSt"));
    for (let i of localSt) {
      if (i == index.value) {
        return alert(i);
      }
    }
    alert("Value not exist");
  }
}
function saveToLocal() {
  let index = document.getElementById("searchIndex");
  if (!(index.value == "" || index.value == null)) {
    searchArr.push(index.value);
    localStorage.setItem("localSt", JSON.stringify(searchArr));
  }
}
//------------------ email check function----------------
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
