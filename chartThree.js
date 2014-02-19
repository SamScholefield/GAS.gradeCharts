function chartThree(ss, user, userFirstName, userLastName, userYear){
   
   var lookupString = userYear + "Lookup";
   var dataSheet = ss.getSheetByName(userYear);
   var dataRange = ss.getRangeByName(lookupString);
   var studentObjects = getRowsData(dataSheet, dataRange);
   
   Logger.log(studentObjects[0]);
   
   var built = false;
   
   for(var i = 0; i < studentObjects.length; i++){
   
     if(studentObjects[i].studentEmail == user){
   
       var sampleData = Charts.newDataTable()
         .addColumn(Charts.ColumnType.STRING, "Term")
         .addColumn(Charts.ColumnType.NUMBER, "Target")
         .addColumn(Charts.ColumnType.NUMBER, "Level")
         .addRow(["Term 1.1", returnAsNumericIB(studentObjects[i].catsLanguage), returnAsNumericIB(studentObjects[i].term11)])
         .addRow(["Term 1.2", returnAsNumericIB(studentObjects[i].catsLanguage), returnAsNumericIB(studentObjects[i].term12)])
         .addRow(["Term 2.1", returnAsNumericIB(studentObjects[i].catsLanguage), returnAsNumericIB(studentObjects[i].term21)])
         .addRow(["Term 2.2", returnAsNumericIB(studentObjects[i].catsLanguage), returnAsNumericIB(studentObjects[i].term22)])
         .addRow(["Term 3.1", returnAsNumericIB(studentObjects[i].catsLanguage), returnAsNumericIB(studentObjects[i].term31)])
         .addRow(["Term 3.2", returnAsNumericIB(studentObjects[i].catsLanguage), returnAsNumericIB(studentObjects[i].term32)])
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
     .setTitle(userFirstName + " " + userLastName + '\n English grades')
     .setXAxisTitle('Term')
     .setYAxisTitle('Grade')
     .setDimensions(700, 700)
     .setDataTable(sampleData)
     .setOption('vAxis.ticks', [{v:1, f:1}, {v:2, f:2},{v:3, f:3},{v:4, f:4},{v:5, f:5},{v:6, f:6},{v:7, f:7},{v:8, f:8},{v:9, f:9}])
     .setXAxisTextStyle(textStyle)
     .setYAxisTextStyle(textStyle)
     .setOption('tooltip.trigger', 'none')
     .setColors([seriesOneColor, seriesTwoColor])
     .setLegendTextStyle(textStyle)
     .build(); 
     
     return chart;
 }