document.addEventListener("DOMContentLoaded", function () {
  const taskForm = document.getElementById("taskForm");
  const taskInput = document.getElementById("taskInput");
  const tasksList = document.getElementById("tasks");

  // Add Task Event
  taskForm.addEventListener("submit", function (e) {
      e.preventDefault();
      addTask(taskInput.value.trim());
      taskInput.value = "";
  });

  function addTask(taskText) {
      if (taskText === "") return;

      const listItem = document.createElement("li");
      listItem.innerHTML = `
          <span class="task-text">${taskText}</span>
          <div>
              <button class="complete"><i data-lucide="check-circle"></i></button>
              <button class="pending"><i data-lucide="hourglass"></i></button>
              <button class="edit"><i data-lucide="edit"></i></button>
              <button class="delete"><i data-lucide="trash-2"></i></button>
          </div>
      `;

      tasksList.appendChild(listItem);

      // Load Lucide Icons
      lucide.createIcons();

      // Complete Task
      listItem.querySelector(".complete").addEventListener("click", () => {
          listItem.classList.add("completed");
      });

      // Mark as Pending
      listItem.querySelector(".pending").addEventListener("click", () => {
          listItem.classList.remove("completed");
      });

      // Edit Task
      listItem.querySelector(".edit").addEventListener("click", () => {
          const newText = prompt("Edit your task:", listItem.querySelector(".task-text").textContent);
          if (newText) {
              listItem.querySelector(".task-text").textContent = newText;
          }
      });

      // Delete Task
      listItem.querySelector(".delete").addEventListener("click", () => {
          listItem.style.transform = "scale(0)";
          listItem.style.opacity = "0";
          setTimeout(() => listItem.remove(), 300);
      });
  }
});
class Task {
  constructor(name, description, dueDate) {
      this.name = name;
      this.description = description;
      this.dueDate = dueDate;
      this.status = "pending"; // Default status
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const taskForm = document.getElementById("taskForm");
  const taskName = document.getElementById("taskName");
  const taskDescription = document.getElementById("taskDescription");
  const taskDueDate = document.getElementById("taskDueDate");
  const tasksList = document.getElementById("tasks");
  const filterAll = document.getElementById("filterAll");
  const filterCompleted = document.getElementById("filterCompleted");
  const filterPending = document.getElementById("filterPending");

  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  // Render tasks
  function renderTasks(filter = "all") {
      tasksList.innerHTML = "";
      const filteredTasks = tasks.filter(task => {
          if (filter === "completed") return task.status === "completed";
          if (filter === "pending") return task.status === "pending";
          return true; // Show all tasks
      });

      filteredTasks.forEach((task, index) => {
          const listItem = document.createElement("li");
          listItem.innerHTML = `
              <span class="task-text">
                  <strong>${task.name}</strong><br>
                  <small>${task.description}</small><br>
                  <small>Due: ${task.dueDate || "No due date"}</small>
              </span>
              <div>
                  <button class="complete"><i data-lucide="check-circle"></i></button>
                  <button class="pending"><i data-lucide="hourglass"></i></button>
                  <button class="edit"><i data-lucide="edit"></i></button>
                  <button class="delete"><i data-lucide="trash-2"></i></button>
              </div>
          `;
          if (task.status === "completed") listItem.classList.add("completed");
          tasksList.appendChild(listItem);

          // Attach event listeners
          listItem.querySelector(".complete").addEventListener("click", () => {
              task.status = "completed";
              saveTasks();
              renderTasks(filter);
          });

          listItem.querySelector(".pending").addEventListener("click", () => {
              task.status = "pending";
              saveTasks();
              renderTasks(filter);
          });

          listItem.querySelector(".edit").addEventListener("click", () => {
              const newName = prompt("Edit task name:", task.name);
              const newDescription = prompt("Edit task description:", task.description);
              const newDueDate = prompt("Edit due date:", task.dueDate);
              if (newName) {
                  task.name = newName;
                  task.description = newDescription;
                  task.dueDate = newDueDate;
                  saveTasks();
                  renderTasks(filter);
              }
          });

          listItem.querySelector(".delete").addEventListener("click", () => {
              tasks.splice(index, 1);
              saveTasks();
              renderTasks(filter);
          });
      });
      lucide.createIcons();
  }

  // Save tasks to local storage
  function saveTasks() {
      localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  // Add task
  taskForm.addEventListener("submit", function (e) {
      e.preventDefault();
      if (taskName.value.trim() === "") return alert("Task name cannot be empty!");
      const newTask = new Task(taskName.value.trim(), taskDescription.value.trim(), taskDueDate.value);
      tasks.push(newTask);
      saveTasks();
      renderTasks();
      taskForm.reset();
  });

  // Filter tasks
  filterAll.addEventListener("click", () => renderTasks("all"));
  filterCompleted.addEventListener("click", () => renderTasks("completed"));
  filterPending.addEventListener("click", () => renderTasks("pending"));

  // Initial render
  renderTasks();
});

// Search functionality
const searchInput = document.getElementById("searchInput");
searchInput.addEventListener("input", () => {
    const searchTerm = searchInput.value.trim().toLowerCase();
    renderTasks("all", searchTerm);
});

// Sort by due date
function sortTasksByDueDate(tasks) {
    return tasks.sort((a, b) => {
        if (!a.dueDate || !b.dueDate) return 0;
        return new Date(a.dueDate) - new Date(b.dueDate);
    });
}

// Updated renderTasks function
function renderTasks(filter = "all", searchTerm = "") {
    tasksList.innerHTML = "";
    let filteredTasks = tasks.filter(task => {
        if (filter === "completed") return task.status === "completed";
        if (filter === "pending") return task.status === "pending";
        return true; // Show all tasks
    });

    // Filter by search term
    if (searchTerm) {
        filteredTasks = filteredTasks.filter(task =>
            task.name.toLowerCase().includes(searchTerm) ||
            task.description.toLowerCase().includes(searchTerm)
        );
    }

    // Sort by due date
    filteredTasks = sortTasksByDueDate(filteredTasks);

    filteredTasks.forEach((task, index) => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <span class="task-text">
                <strong>${task.name}</strong><br>
                <small>${task.description}</small><br>
                <small>Due: ${task.dueDate || "No due date"}</small>
            </span>
            <div>
                <button class="complete"><i data-lucide="check-circle"></i></button>
                <button class="pending"><i data-lucide="hourglass"></i></button>
                <button class="edit"><i data-lucide="edit"></i></button>
                <button class="delete"><i data-lucide="trash-2"></i></button>
            </div>
        `;
        if (task.status === "completed") listItem.classList.add("completed");
        tasksList.appendChild(listItem);

        // Attach event listeners
        listItem.querySelector(".complete").addEventListener("click", () => {
            task.status = "completed";
            saveTasks();
            renderTasks(filter, searchTerm);
        });

        listItem.querySelector(".pending").addEventListener("click", () => {
            task.status = "pending";
            saveTasks();
            renderTasks(filter, searchTerm);
        });

        listItem.querySelector(".edit").addEventListener("click", () => {
            const newName = prompt("Edit task name:", task.name);
            const newDescription = prompt("Edit task description:", task.description);
            const newDueDate = prompt("Edit due date:", task.dueDate);
            if (newName) {
                task.name = newName;
                task.description = newDescription;
                task.dueDate = newDueDate;
                saveTasks();
                renderTasks(filter, searchTerm);
            }
        });

        listItem.querySelector(".delete").addEventListener("click", () => {
            tasks.splice(index, 1);
            saveTasks();
            renderTasks(filter, searchTerm);
        });
    });
    lucide.createIcons();
}