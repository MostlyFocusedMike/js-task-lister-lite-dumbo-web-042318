class TaskList {
  constructor() {

  }

  addTask(element) {
    console.log(element.className)
    let priority = element.className

    let tasks = document.querySelector("#" + priority + "-tasks")
    tasks.append(element)
  }

  removeTask(event) {
    event.target.parentNode.parentNode.removeChild(event.target.parentNode)
  }
  

}
