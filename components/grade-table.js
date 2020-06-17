class GradeTable{
  constructor(tableElement){
    this.tableElement = tableElement;
  }
  updateGrades(grades){
    console.log(grades);
    var tbody = document.querySelector("tbody");

    while(tbody.firstChild){
      tbody.removeChild(tbody.firstChild);
    }

    for(var index = 0; index < grades.length; index++){

      var tr = document.createElement("tr");
      var tdOne = document.createElement("td");
      var tdTwo = document.createElement("td");
      var tdThree = document.createElement("td");

      tdOne.textContent = grades[index].name;
      tdTwo.textContent = grades[index].course;
      tdThree.textContent = grades[index].grade;

      tr.append(tdOne, tdTwo, tdThree)
      tbody.appendChild(tr);
    }
  }
  onDeleteClick(deleteGrade){
    this.deleteGrade;
  }
}
