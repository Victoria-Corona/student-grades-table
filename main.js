var noGradesRecorded = document.querySelector("p");

var formElement = document.querySelector("form")
var gradeFormNew = new GradeForm(formElement, noGradesRecorded);

var header = document.querySelector("header");
var pageHeaderNew = new PageHeader(header);

var tableElement = document.querySelector("table");
var gradeTable = new GradeTable(tableElement);

var app = new App(gradeTable, pageHeaderNew, gradeFormNew);
app.start();
