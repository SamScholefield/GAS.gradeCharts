function doGet(e) {
  
  var app = UiApp.createApplication()
  var panel = app.createAbsolutePanel().setSize('800','800');
  
  var ss = SpreadsheetApp.openById('0AsX_HdWElNi3dG1WcFRRc2ZISEJkTmp6M1ZMS1UzNkE');
  var nameSheet = ss.getSheetByName('Overview');
  var studentLookup = ss.getRangeByName("studentLookup");  
  var studentObjects = getRowsData(nameSheet, studentLookup);
  var user = Session.getActiveUser().getEmail();
  var userFirstName = "";
  var userLastName = "";
  var userYear = "";
  var warningState = true;
  var warning = "Your email address has not been recognised";
  
  //identify user and set variables
  for(var i = 0; i < studentObjects.length; i++){
    
    if(studentObjects[i].email == user){
      userFirstName = studentObjects[i].firstname;
      userLastName = studentObjects[i].lastname;
      userYear = studentObjects[i].year;
      warningState = false;
    }
  }
  
  //create warning message if not found
  if(warningState == true){    
    var label = app.createLabel('warning label');   
    panel.add(label);
    app.add(panel)
    return app;    
  }

Logger.log(userYear);
Logger.log(typeof userYear);

  
  //main chart
  if(userYear == 'Yr7' || userYear == 'Yr8' || userYear == 'Yr9'){
    
    var chart = chartOne(ss, user, userFirstName, userLastName, userYear);
    Logger.log("one")
    panel.add(chart, 0, 0);
    app.add(panel)
    return app;
    
  }else if(userYear == 'Yr10' || userYear == 'Yr11'){
  
    var chart = chartTwo(ss, user, userFirstName, userLastName, userYear);
    Logger.log("two");
    panel.add(chart, 0, 0);
    app.add(panel)
    return app;
    
  }else{
  
    var chart = chartThree(ss, user, userFirstName, userLastName, userYear);
    Logger.log("three");
    panel.add(chart, 0, 0);
    app.add(panel)
    return app;    
  
  }
  
 }
 
