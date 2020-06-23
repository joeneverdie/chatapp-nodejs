var socket = io.connect("http://localhost:4200");
socket.on("connect", function (data) {
  socket.imit("join", "Hello server from client");
});
socket.on("thread", function (data) {
  $("#thread").append("<li>" + data + "</li>");
});

$("form").submit(function () {
  var message = $("#message").val();
  socket.emit("message", message);
  this.reset();

  return false;
});
