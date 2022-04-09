//-----------------------Check Email Function----------------------------
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
