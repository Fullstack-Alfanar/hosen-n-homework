$(document).ready(() => {
  $("#btn").on("click", () => {
    $("#Tbody1").empty().append(getIt());
  });
});
function getIt() {
  let num1 = $("#Num1");
  let num2 = $("#Num2");
  if (num1.val() != "" && num2.val() != "") {
    let select = $("<select></select>");
    for (let i = num1.val(); i <= num2.val(); i++) {
      select.append($("<option></option>").val(i).text(i));
    }
    let td = $("<td></td>").append(select);
    let tr = $("<tr></tr>").append(td);
    num1.val("");
    num2.val("");
    return tr;
  } else {
    return $('<h3 style="color:red" >Invalid Input</h3>');
  }
}
