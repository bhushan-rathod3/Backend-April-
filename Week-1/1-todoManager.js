const todoManager = {
  tasks: [],

  addTask(task) {
    this.tasks.push({ id: Date.now(), task });
    console.log("Task added:", task);
  },

  removeTask(id) {
    const index = this.tasks.findIndex((t) => t.id === id);
    if (index !== -1) {
      const removed = this.tasks.splice(index, 1);
      console.log("Task removed:", removed[0]);
    } else {
      console.log("Task not found.");
    }
  },

  listTasks() {
    console.log("Current tasks:");
    this.tasks.map((t, i) => console.log(`${i + 1}. ${t.task} (ID: ${t.id})`));
  },
};

// Example usage
todoManager.addTask("Finish assignment");
todoManager.addTask("Read Node.js docs");
todoManager.listTasks();
const taskId = todoManager.tasks[0].id;
todoManager.removeTask(taskId);
todoManager.listTasks();
