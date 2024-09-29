function onOpen(){
  var ui = SpreadsheetApp.getUi();
  ui.createMenu("Base de datos")
  .addItem("Altas", "altas")
  .addItem("Bajas", "bajas")
  .addItem("Actualizar", "actualizar")
  .addToUi();
  
}

function altas(){
  var ui = SpreadsheetApp.getUi();
  var id = ui.prompt("ID:");
  var nombre = ui.prompt("Nombre:");
  var sexo = ui.prompt("Sexo:");
  var edad = ui.prompt("Edad:");
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var hoja = spreadsheet.getSheetByName("Datos");
  hoja.appendRow([id.getResponseText(), nombre.getResponseText(), sexo.getResponseText(), edad.getResponseText()]);
}

function bajas(){
  var ui = SpreadsheetApp.getUi();
  var id = ui.prompt("ID:");
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var hoja = spreadsheet.getSheetByName("Datos");
  var datos = hoja.getSheetValues(2, 1, hoja.getLastRow()-1, hoja.getLastColumn());
  var localizado = -1;
  for(var x=0; x < datos.length; x++){
    if (datos[x][0] == id.getResponseText()){
      localizado = x;
    }
  }
  localizado++;
  if(localizado == 0){
    ui.alert("No se localizó ningún registro.")
  }else{
    hoja.deleteRow(++localizado);
  }
}

function actualizar(){
  var ui = SpreadsheetApp.getUi();
  var id = ui.prompt("ID:");
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var hoja = spreadsheet.getSheetByName("Datos");
  var datos = hoja.getSheetValues(2, 1, hoja.getLastRow()-1, hoja.getLastColumn());
  var localizado = -1;
  var nombre = "";
  var sexo = ""; 
  var edad = "";
  for(var x=0; x < datos.length; x++){
    if (datos[x][0] == id.getResponseText()){
      localizado = x;
      nombre = datos[x][1];
      sexo = datos[x][2];
      edad = datos[x][3];
      break;
    }
  }
  localizado++;
  localizado++;
  if(localizado == 0){
    ui.alert("No se localizó ningún registro.")
  }else{
    var id2 = ui.prompt("ID "+id.getResponseText()+" escribe la nueva:");
    var nombre2 = ui.prompt("Nombre "+nombre+" escribe el nuevo:");
    var sexo2 = ui.prompt("Sexo "+sexo+" escribe el nuevo:");
    var edad2 = ui.prompt("Edad "+edad+" escribe la nueva:");
    hoja.getRange(localizado, 1, 1, hoja.getLastColumn())
    .setValues([[id2.getResponseText(), nombre2.getResponseText(), sexo2.getResponseText(), edad2.getResponseText()]]);
  }
}