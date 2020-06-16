class App{
  constructor(){
    this.handleGetGradesError = this.handleGetGradesError.bind(this);
    this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this);
  }
  handleGetGradesError(error){
    console.error("nope", error);
  }
  handleGetGradesSuccess(grades){
    console.log("yes", grades)
  }
  getGrades(){
    $.ajax({
      method: "GET",
      url: "https://sgt.lfzprototypes.com/api/grades",
      Headers: {
        "X-Access-Token": "Dcw6eCfN"
      },
      success: handleGetGradesSuccess,
      error: handleGetGradesError
    })
  }
  start(){
    this.getGrades();
  }
}
