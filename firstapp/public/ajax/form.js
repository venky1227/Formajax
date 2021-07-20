$(document).ready(function () {
  alert("Inside Form");
});

$("#submitbutton").click(function () {
  alert("Submit button clicked");
  let name = $("#name").val();
  let address = $("#address").val();
  let gender = $("#gender").val();
  let age = $("#age").val();
  let submit = {
    name: name,
    address: address,
    gender: gender,
    age: age,
  };

  $.ajax({
    type: "POST",
    url: "/abc",
    data: submit,
    success: function (data) {
      alert("Insert success");
    },
    error: function (err) {
      console.log(err);
    },
  });
});
