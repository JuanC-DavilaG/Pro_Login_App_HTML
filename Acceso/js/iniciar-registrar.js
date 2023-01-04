function validar() {
  var usuario = document.getElementById("usuario_log").value;
  var contraseña = document.getElementById("contraseña_log").value;

  var datos = "user=" + usuario + "&pass=" + contraseña;

  //   console.log(datos);

  $.ajax({
    url: "Acceso/php/enviar.php",
    type: "POST",
    data: datos,
  })
    .done(function (res) {
      var jsonData = JSON.parse(res);

      if (jsonData.success == "1") {
        msjexito();
      } else {
        msjerror();
      }
    })
    .fail(function () {
      console.log("error");
    })
    .always(function () {
      console.log("complete");
    });
}
