//-----------------------Tester----------------------------
function assertTrue(testFunction, functionParams) {
  let result = testFunction(functionParams);
  if (result == true) {
    return true;
  }
  throw `Expected true but got ${result}`;
}

function assertFalse(testFunction, functionParams) {
  let result = testFunction(functionParams);
  if (result == false) {
    return true;
  }
  throw `Expected false but got ${result}`;
}

function testEmailValidationSuccess() {
  let email = "simple@example.com";
  assertTrue(checkEmail, email);
  email = "very.common@example.com";
  assertTrue(checkEmail, email);
  email = "disposable.style.email.with+symbol@example.com";
  assertTrue(checkEmail, email);
  email = "other.email-with-hyphen@example.com";
  assertTrue(checkEmail, email);
  email = "fully-qualified-domain@example.com";
  assertTrue(checkEmail, email);
  email = "user.name+tag+sorting@example.com";
  assertTrue(checkEmail, email);
  email = "x@example.com";
  assertTrue(checkEmail, email);
  email = "example-indeed@strange-example.com";
  assertTrue(checkEmail, email);
  email = "test/test@test.com";
  assertTrue(checkEmail, email);
  email = "admin@mailserver1";
  assertTrue(checkEmail, email);
  email = "example@s.example";
  assertTrue(checkEmail, email);
  email = '" "@example.org';
  assertTrue(checkEmail, email);
  email = '"john..doe"@example.org';
  assertTrue(checkEmail, email);
  email = "mailhost!username@example.org";
  assertTrue(checkEmail, email);
  email = '"very.(),:;<>[]".VERY."very@\\ "very".unusual"@strange.example.com';
  assertTrue(checkEmail, email);
  email = "user%example.com@example.org";
  assertTrue(checkEmail, email);
  email = "user-@example.org";
  assertTrue(checkEmail, email);
  email = "postmaster@[123.123.123.123]";
  assertTrue(checkEmail, email);
  email = "postmaster@[IPv6:2001:0db8:85a3:0000:0000:8a2e:0370:7334]";
  assertTrue(checkEmail, email);
}

function testEmailValidationFail() {
  let email = "Abc.example.com";
  assertFalse(checkEmail, email);
  email = "A@b@c@example.com";
  assertFalse(checkEmail, email);
  email = 'a"b(c)d,e:f;g<h>i[jk]l@example.com';
  assertFalse(checkEmail, email);
  email = 'just"not"right@example.com';
  assertFalse(checkEmail, email);
  email = 'this is"notallowed@example.com';
  assertFalse(checkEmail, email);
  email = 'this still"not\\allowed@example.com';
  assertFalse(checkEmail, email);
  email =
    "1234567890123456789012345678901234567890123456789012345678901234+x@example.com";
  assertFalse(checkEmail, email);
  email = "i_like_underscore@but_its_not_allowed_in_this_part.example.com";
  assertFalse(checkEmail, email);
  email = "QA[icon]CHOCOLATE[icon]@test.com";
  assertFalse(checkEmail, email);
}
function runTest() {
  try {
    testEmailValidationSuccess();
    console.log("test 1 successful");
  } catch (error) {
    console.log("the test testEmailValidationSuccess has FAILED!");
    console.log(">>> " + error);
  }

  try {
    testEmailValidationFail();
    console.log("test 2 successful");
  } catch (error) {
    console.log("the test testEmailValidationFail has FAILED!");
    console.log(">>> " + error);
  }
}

runTest();

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
