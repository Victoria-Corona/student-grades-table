class PageHeader{
  constructor(headerElement){
    this.headerElement = headerElement;
  }
  updateAverage(newAverage){
    const averageNumber = document.querySelector("span.badge");
    averageNumber.textContent = newAverage;
  }
}
