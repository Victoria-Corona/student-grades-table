class GradeTable{
  constructor(tableElement, noGradesElement){
    this.tableElement = tableElement;
    this.noGradesElement = noGradesElement;
  }
  updateGrades(grades){
    console.log(grades);
    var tbody = document.querySelector("tbody");

    while(tbody.firstChild){
      tbody.removeChild(tbody.firstChild);
    }

    for(var index = 0; index < grades.length; index++){
      this.renderGradeRow(grades[index], this.deleteGrade, this.editGrade);
    }
    var pHidden = document.querySelector("p");
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
        var tbodyTwo = document.querySelector("tbody");
        var trTwo = document.createElement("tr")
        var tdFour = document.createElement("td");
        var tdFive = document.createElement("td");
        var tdSix = document.createElement("td");
        var tdSeven = document.createElement("td");

        var deleteButton = document.createElement("button");
        deleteButton.textContent = "DELETE";
        deleteButton.classList.add("btn", "btn-danger");
        deleteButton.addEventListener("click", function(){
        deleteGrade(data.id)});

        var editButton = document.createElement("button");
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
