class PageHeader{
  constructor(headerElement){
    this.headerElement = headerElement;
  }
  updateAverage(newAverage){
    var averageNumber = document.querySelector("span.badge");
    averageNumber.textContent = newAverage;
  }
}
