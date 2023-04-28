function createAnswerSheet(name,subj){
// We pass the name of the student and the subject (because the Calculus template is different)
  var source_sheet = "";
  if (subj == "AP Calculus AB"){
    source_sheet = "1yLhE6CzdLAbOhK9adKS_YvVxxK44X4v2j8EqrgAYtBQ";
  }
  else {
    source_sheet = "10vpwms0BM59FugIxEAUiiKUwf0Pv4ifZAnJhtUY6Fo0";
  };
// Below are examples of methods for managing files from DriveApp - includes usage examples for .makeCopy(), .setName(), and .setSharing()  
   var origin_sheet = DriveApp.getFileById(source_sheet);
   var copied_sheet = origin_sheet.makeCopy();
   copied_sheet.setName(`AP Proctored Test Answer Sheet - ${name} - April 30th, 2023`);
   copied_sheet.setSharing(DriveApp.Access.ANYONE, DriveApp.Permission.EDIT);
   var url_of_copy = copied_sheet.getUrl();
   Logger.log(`Created answer sheet for student: ${url_of_copy}`);
   return url_of_copy;
}
