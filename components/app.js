class App{
  constructor(gradeTable, pageHeader){
    this.gradeTable = gradeTable;
    this.pageHeader = pageHeader;
    this.handleGetGradesError = this.handleGetGradesError.bind(this);
    this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this);
  }
  handleGetGradesError(error){
    console.error("nope");
  }
  handleGetGradesSuccess(grades){
    console.log("yes")
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
}
