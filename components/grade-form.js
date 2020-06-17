class GradeForm{
  constructor(formElement){
    this.formElement = formElement;
    this.formElement = this.handleSubmit.bind(submit)
  }
  onSubmit(createGrade){
    this.createGrade = createGrade;
  }
  handleSubmit(event){
    event.preventDefault();
    console.log("hiya");
  }
}
