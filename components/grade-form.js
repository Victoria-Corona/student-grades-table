class GradeForm{
  constructor(formElement){
    this.formElement = formElement;
    this.formElement.addEventListener("submit", this.handleSubmit);

    // this.formElement = this.handleSubmit.bind(submit)
  }
  onSubmit(createGrade){
    this.createGrade = createGrade;
  }
  handleSubmit(event){
    event.preventDefault();
    console.log("hiya");
    var formData = new FormData(event.target);
    var name = formData.get(name);
    var course = formData.get(course);
    var grade = formData.get(grade);
    this.createGrade(name, course, grade);
    event.target.reset(formData);
  }
}
