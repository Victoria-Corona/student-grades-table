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
  renderGradeRow(data, deleteGrade){
    function deleteGrade(data){
      for(var indexData = 0; indexData < data.length; indexData++){
        var trTwo = document.createElement("tr")
        var tdFour = document.createElement("td");
        var tdFive = document.createElement("td");
        var tdSix = document.createElement("td");
        var tdSeven = document.createElement("td");

        var deleteButton = document.createElement("button");
        deleteButton.classList.add("btn", "btn-danger");
        deleteButton.addEventListener("click", deleteGrade(data.id));

        tdFour.textContent = data[indexData].name;
        tdFive.textContent = data[indexData].course;
        tdSix.textContent = data[indexData].grade;
        tdSeven.append(deleteButton);

        trTwo.append(tdFour, tdFive, tdSix, tdSeven);
        document.body.append(trTwo);
      }

    }
  }
}
