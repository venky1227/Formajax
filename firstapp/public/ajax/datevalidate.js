$("#datecheck").click(function () {
  let date = $("#date").val();
  let datecheck = {
    date: date
  };

  $.ajax({
    type: "POST",
    url: "/datevalidate",
    data: datecheck,
    success: function (data) {
      alert("Date Validated");
    },
    error: function (err) {
      console.log(err);
    },
  });
});
