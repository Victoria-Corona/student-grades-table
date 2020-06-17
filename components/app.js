class App{
  constructor(gradeTable, pageHeader, gradeForm){
    this.gradeTable = gradeTable;
    this.pageHeader = pageHeader;
    this.gradeForm = gradeForm;
    this.handleGetGradesError = this.handleGetGradesError.bind(this);
    this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this);
    this.createGrade = this.createGrade.bind(this);
    this.handleCreateGradeError = this.handleCreateGradeError.bind(this);
    this.handleCreateGradeSuccess = this.handleCreateGradeSuccess.bind(this);
    this.deleteGrade = this.deleteGrade.bind(this);
    this.handleDeleteGradeError = this.handleDeleteGradeError.bind(this);
    this.handleDeleteGradeSuccess = this.handleDeleteGradeSuccess.bind(this);
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
    this.gradeForm.onSubmit(this.createGrade);
    this.gradeTable.onDeleteClick(this.deleteGrade)
  }
  createGrade(name, course, grade){
    console.log(name, course, grade);
    $.ajax({
      method: "POST",
      url: "https://sgt.lfzprototypes.com/api/grades",
      data: {
        "name": name,
        "course": course,
        "grade": grade
      },
      headers: {
        "X-Access-Token": "Dcw6eCfN"
      },
      success: this.handleCreateGradeSuccess,
      error: this.handleCreateGradeError
    })
  }
  handleCreateGradeError(error){
    console.error("nope", error)
  }
  handleCreateGradeSuccess(){
  this.getGrades();
  }
  deleteGrade(id){
    console.log(id);
  }
  handleDeleteGradeError(error){
    console.error();
  }
  handleDeleteGradeSuccess(){
    this.getGrades();
  }
}
