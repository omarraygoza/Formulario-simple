function myFunction() {
  var ss = SpreadsheetApp.getActive();
  var hoja = ss.getActiveSheet();
  var celda = hoja.getRange("A1").setValue("Hola");
}
