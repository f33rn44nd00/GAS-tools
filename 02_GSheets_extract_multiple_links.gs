/* Meant to work on a single cell and be iterated from outside
This is because the alternate method .getRichTextValues() returns a double list, which just complicates extraction needlessly
Returns a list with the raw link text
*/
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
