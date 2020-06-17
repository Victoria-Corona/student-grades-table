class App{
  constructor(gradeTable, pageHeader, gradeForm){
    this.gradeTable = gradeTable;
    this.pageHeader = pageHeader;
    this.gradeForm = gradeForm;
    this.handleGetGradesError = this.handleGetGradesError.bind(this);
    this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this);
    this.createGrade = this.createGrade.bind(this);
  }
  handleGetGradesError(error){
    console.error("nope", error);
  }
  handleGetGradesSuccess(grades){
    console.log("yes", grades)
    this.gradeTable.updateGrades(grades)

    var sumOfGrades = 0;
    var results = null;

    for(var indexGrades = 0; indexGrades < grades.length; indexGrades++){
      sumOfGrades += grades[indexGrades].grade;
    }
    results = sumOfGrades/grades.length;

    this.pageHeader.updateAverage(results);
  }

  getGrades(){
    $.ajax({
      method: "GET",
      url: "https://sgt.lfzprototypes.com/api/grades",
      headers: {
        "X-Access-Token": "Dcw6eCfN"
      },
      success: this.handleGetGradesSuccess,
      error: this.handleGetGradesError
    })
  }
  start(){
    this.getGrades();
  }
  createGrade(name, course, grade){
    console.log(name);
    console.log(course);
    console.log(grade);
  }
  handleCreateGradeError(error){
    console.error("nope", error)
  }
  handleCreateGradeSuccess(){
  this.getGrades();
  }
}
