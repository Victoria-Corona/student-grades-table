class GradeForm{
  constructor(formElement){
    this.formElement = formElement;
    this.handleSubmit = this.formElement.addEventListener("submit", this.handleSubmit.bind(this))

  }
  onSubmit(createGrade){
    this.createGrade = createGrade;
  }
  handleSubmit(event){
    event.preventDefault();
    console.log("hiya");
    const formData = new FormData(event.target);
    const studentName = formData.get("name");
    const studentCourse = formData.get("course");
    const studentGrade = formData.get("grade");
    this.createGrade(studentName, studentCourse, studentGrade);
    event.target.reset();
  }
}
