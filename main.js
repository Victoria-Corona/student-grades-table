const noGradesRecorded = document.querySelector("p");

const formElement = document.querySelector("form")
const gradeFormNew = new GradeForm(formElement, noGradesRecorded);

const header = document.querySelector("header");
const pageHeaderNew = new PageHeader(header);

const tableElement = document.querySelector("table");
const gradeTable = new GradeTable(tableElement);

const app = new App(gradeTable, pageHeaderNew, gradeFormNew);
app.start();
