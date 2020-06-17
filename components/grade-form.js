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
  }
}
