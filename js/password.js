let userN = document.getElementById("userName");
let pwd = document.getElementById("password");
let lowercaseSpan = document.getElementById("lowercase");
let capitalSpan = document.getElementById("capital");
let EnglishSpan = document.getElementById("Number");
let minimumSpan = document.getElementById("minimum");
let specialSpan = document.getElementById("special");
let recurringSpan = document.getElementById("recurring");

document.getElementById("saveBtn1").addEventListener("click", () => {
  if (
    /[a-z]/.test(pwd.value) &&
    /[A-Z]/.test(pwd.value) &&
    /[0-9]/.test(pwd.value) &&
    pwd.value.length >= 8
  ) {
    userN.value = "";
    pwd.value = "";
    alert("Thank For Submit");
  } else alert("invalid input");
});
pwd.addEventListener("input", () => {
  if (/[a-z]/.test(pwd.value)) {
    lowercaseSpan.style.color = "green";
    lowercaseSpan.textContent = "\u2714 A lowercase letters";
  } else {
    lowercaseSpan.style.color = "red";
    lowercaseSpan.textContent = "\u2716 A lowercase letters";
  }

  if (/[A-Z]/.test(pwd.value)) {
    capitalSpan.style.color = "green";
    capitalSpan.textContent = "\u2714 A capital letters";
  } else {
    capitalSpan.style.color = "red";
    capitalSpan.textContent = "\u2716 A capital letters";
  }
  if (checkEnglishLetters(pwd.value) && pwd.value != "") {
    EnglishSpan.style.color = "green";
    EnglishSpan.textContent = "\u2714 A English letters";
  } else {
    EnglishSpan.style.color = "red";
    EnglishSpan.textContent = "\u2716 A English letters";
  }
  if (pwd.value.length >= 8) {
    minimumSpan.style.color = "green";
    minimumSpan.textContent = "\u2714 A minimum 8 characters";
  } else {
    minimumSpan.style.color = "red";
    minimumSpan.textContent = "\u2716 A minimum 8 characters";
  }
  if (/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(pwd.value)) {
    specialSpan.style.color = "green";
    specialSpan.textContent = "\u2714 A special characters";
  } else {
    specialSpan.style.color = "red";
    specialSpan.textContent = "\u2716 A special characters";
  }

  if (validRecurring(pwd.value)) {
    recurringSpan.style.color = "green";
    recurringSpan.textContent = "\u2714 Can't have triple recurring characters";
  } else {
    recurringSpan.style.color = "red";
    recurringSpan.textContent = "\u2716 Can't have triple recurring characters";
  }
});

function validRecurring(value) {
  if (value.length > 2) {
    for (i = 1; i < value.length - 1; i++) {
      if (pwd.value[i] == value[i - 1] && pwd.value[i] == value[i + 1]) {
        return false;
      }
    }
  }
  return true;
}

function checkEnglishLetters(value) {
  for (const i of value) {
    if (!/[a-zA-Z]|[0-9]|[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(i)) {
      return false;
    }
  }
  return true;
}
