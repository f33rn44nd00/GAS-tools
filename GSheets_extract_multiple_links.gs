function rtfTest(sheetname,cell) {
  var spsheet = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = spsheet.getSheetByName(sheetname);
  var testrange = sheet.getRange(cell);
  var cellvalue = testrange.getRichTextValue().getRuns();

  var links = [];
  cellvalue.forEach(function(value) {
    Logger.log(value.getLinkUrl());
    if (value.getLinkUrl() != null) {
      links.push(value.getLinkUrl());
    } else {}; 
  });
  Logger.log(links);
  return links
}
