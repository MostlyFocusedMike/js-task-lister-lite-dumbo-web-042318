document.addEventListener("DOMContentLoaded", () => {
  const taskList = new TaskList();

  document.querySelector("#new-task").addEventListener("click", function(e) {
    let description = document.querySelector("#new-task-description")
    let priority = document.querySelector("select")
    let task = new Task(description.value, priority.value)
    e.preventDefault()
    taskList.addTask(task.renderTask())
    description.value = "" 
  });

  document.querySelector("#list").addEventListener("click", function(e) {
    if (e.target.type === "submit") {
      taskList.removeTask(e)
    }
  })
});
