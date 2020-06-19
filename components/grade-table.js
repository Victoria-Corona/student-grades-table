class GradeTable{
  constructor(tableElement, noGradesElement){
    this.tableElement = tableElement;
    this.noGradesElement = noGradesElement;
  }
  updateGrades(grades){
    console.log(grades);
    const tbody = document.querySelector("tbody");

    while(tbody.firstChild){
      tbody.removeChild(tbody.firstChild);
    }

    for(let index = 0; index < grades.length; index++){
      this.renderGradeRow(grades[index], this.deleteGrade, this.editGrade);
    }
    const pHidden = document.querySelector("p");
    if(grades.length === 0){
      pHidden.classList.remove("d-none")
    } else {
      pHidden.classList.add("d-none");
    }
    console.log(grades);
  }
  onDeleteClick(deleteGrade){
    this.deleteGrade = deleteGrade;
  }

  onEditClick(editGrade) {
    this.editGrade = editGrade;
    //passing an entire function from App to over here for that v to use
  }

  renderGradeRow(data, deleteGrade, editGrade){
    const tbodyTwo = document.querySelector("tbody");
    const trTwo = document.createElement("tr")
    const tdFour = document.createElement("td");
    const tdFive = document.createElement("td");
    const tdSix = document.createElement("td");
    const tdSeven = document.createElement("td");

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "DELETE";
    deleteButton.classList.add("btn", "btn-danger");
    deleteButton.addEventListener("click", function(){
    deleteGrade(data.id)});

    const editButton = document.createElement("button");
    editButton.textContent = "EDIT";
    editButton.classList.add("btn", "btn-primary")
    editButton.addEventListener("click", function(){
    editGrade(data.id, data.name, data.course, data.grade)});

    tdFour.textContent = data.name;
    tdFive.textContent = data.course;
    tdSix.textContent = data.grade;
    tdSeven.append(deleteButton, editButton);

    trTwo.append(tdFour, tdFive, tdSix, tdSeven);
    tbodyTwo.append(trTwo);
  }
}
