 function chartOne(ss, user, userYear){
   
   var lookupString = userYear + "Lookup";
   var dataSheet = ss.getSheetByName(userYear);
   var dataRange = ss.getRangeByName(lookupString);
   var studentObjects = getRowsData(dataSheet, dataRange);
   
   Logger.log(studentObjects[0]);
   
   var built = false;
   
   for(var i = 0; i < studentObjects.length; i++){
   
     if(studentObjects[i].studentEmail == user){
       var form = studentObjects[i].tutorGroup;
       var userFirstName = studentObjects[i].firstName;
       var userLastName = studentObjects[i].familyName;
       var sampleData = Charts.newDataTable()
         .addColumn(Charts.ColumnType.STRING, "Term")
         .addColumn(Charts.ColumnType.NUMBER, "Target")
         .addColumn(Charts.ColumnType.NUMBER, "Level")
         .addRow(["Term 1.1", returnAsNumericKS3(studentObjects[i].catPredicted), returnAsNumericKS3(studentObjects[i].term11)])
         .addRow(["Term 1.2", returnAsNumericKS3(studentObjects[i].catPredicted), returnAsNumericKS3(studentObjects[i].term12)])
         .addRow(["Term 2.1", returnAsNumericKS3(studentObjects[i].catPredicted), returnAsNumericKS3(studentObjects[i].term21)])
         .addRow(["Term 2.2", returnAsNumericKS3(studentObjects[i].catPredicted), returnAsNumericKS3(studentObjects[i].term22)])
         .addRow(["Term 3.1", returnAsNumericKS3(studentObjects[i].catPredicted), returnAsNumericKS3(studentObjects[i].term31)])
         .addRow(["Term 3.2", returnAsNumericKS3(studentObjects[i].catPredicted), returnAsNumericKS3(studentObjects[i].term32)])
         .build();
         built = true;
     }
       
     if(built == true){
       break;
     }
   
   }
     
   var textStyle = Charts.newTextStyle().setFontSize(11);
   var seriesOneColor = '#00b6de';
   var seriesTwoColor = '#c1d82f';
   
   
   var chart = Charts.newColumnChart()
     .setTitle(userFirstName + " " + userLastName + " - " + form + '\n English grades')
     .setXAxisTitle('Term')
     .setYAxisTitle('Grade')
     .setDimensions(700, 700)
     .setDataTable(sampleData)
     .setOption('vAxis.ticks', [{v:1, f:"c"}, {v:2, f:"b"},{v:3, f:"2a"},{v:4, f:"c"},{v:5, f:"b"},{v:6, f:"3a"},{v:7, f:"c"},{v:8, f:"b"},{v:9, f:"4a"},{v:10, f:"c"},
     {v:11, f:"b"},{v:12, f:"5a"},{v:13, f:"c"},{v:14, f:"b"},{v:15, f:"6a"},{v:16, f:"c"},{v:17, f:"b"},{v:18, f:"7a"},{v:19, f:"c"},{v:20, f:"b"},{v:21, f:"8a"}])
     .setXAxisTextStyle(textStyle)
     .setYAxisTextStyle(textStyle)
     .setOption('tooltip.trigger', 'none')
     .setColors([seriesOneColor, seriesTwoColor])
     .setLegendTextStyle(textStyle)
     .build(); 
     
     return chart;
 }