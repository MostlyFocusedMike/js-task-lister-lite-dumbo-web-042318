class Task {
  constructor(description, priority) {
    this.description = description;
    this.priority = priority; 
  }
  
  renderTask() {
    let ulEl = document.createElement("li");
    ulEl.textContent = this.description;
    ulEl.className = this.priority
    let button = document.createElement("button");
    button.textContent = "X";
    ulEl.appendChild(button);
    return ulEl;
  }

}
