console.log("動いた");

$("#text").val(localStorage.getItem("memo"));

$("#save").on("click", function () {
  console.log($("#text").val());
  localStorage.setItem("memo", $("#text").val());
  $("#message").text("保存しました");
});

$("#delete").on("click", function () {
  localStorage.removeItem("memo");
  $("#message").text("削除しました");
  $("#text").val("");

});
