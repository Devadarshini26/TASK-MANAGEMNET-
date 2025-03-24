# TASK-MANAGEMNET-
Task Management Application
Overview
This is an Application for managing tasks using HTML, CSS, and JavaScript. It supports addition, modification, deletion, and display of tasks. Tasks may be labeled completed or pending, and users are able to view tasks according to their status. The app features due dates, search capabilities, and sorting the tasks by due date. The tasks are stored in the browser's local storage, making sure that they survive even when the page is reopened.

Features
Add Task:

Users are able to add a task with a name, description, and an optional due date.

View Tasks:

Tasks are shown in a list along with their details (name, description, due date, and status).

Edit Task:

Users are able to edit the name, description, and due date of a current task.

Delete Task:

Users are able to delete a task from the list.

Task Status:

Users are able to mark tasks as completed or pending.

Filter Tasks:

Users are able to filter tasks by status (all, completed, pending).

Search Functionality:

Users are able to search for tasks by name or description.

Sort by Due Date:

Tasks are sortable by due date.

Local Storage:

Tasks are stored in the browser's local storage and remain even after page reload.

Responsive Design:

The application is completely responsive and runs perfectly on any screen size.

Technologies Used
HTML: For page structuring.

CSS: For styling the application, including animations and responsiveness.

JavaScript: For managing task management logic (adding, editing, deleting, filtering, etc.).

Lucide Icons: To add icons to buttons and improve the UI.

Local Storage: To store tasks in the browser.

How to Use
Add a Task:

Enter the task name, description, and optional due date in the input fields.

Click the "Add Task" button or press Enter.

Edit a Task:

Click the edit (pencil) button next to the task you want to edit.

Update the task name, description, or due date in the prompt and click "OK."

Mark as Complete:

Click the checkmark button next to the task to mark it as completed.

Mark as Pending:

Click the pending (hourglass) button to revert a completed task to pending status.

Delete a Task:

Click the trash button next to the task you want to delete.

Filter Tasks:

Use the filter buttons ("All," "Completed," "Pending") to view tasks by status.

Search Tasks:

Type in the search bar to find tasks by name or description.

Sort by Due Date:

Tasks are automatically sorted by their due date.

File Structure
Copy
task-manager/
│
├── index.html          # Main HTML file for the application
├── styles.css          # CSS file for styling the application
├── script.js           # JavaScript file for task management logic
├── README.md           # This file

Setup Instructions
Clone the repository or download the files.

Open the index.html file in your browser.

Start managing your tasks!

Code Overview
HTML (index.html)
Contains the structure of the application, including input fields, buttons, and task list.

Uses Lucide Icons for a modern and clean look.

CSS (styles.css)
Provides styling for the layout, buttons, and task list.

Includes responsive design for different screen sizes.

JavaScript (script.js)
Implements the core functionality of the application:

Adds, edits, deletes, and filters tasks.

Saves tasks to local storage.

Handles search and sorting by due date.

Customization
Styling: You can customize the colors, fonts, and layout by modifying the styles.css file.

Icons: Replace Lucide icons with other icon libraries by updating the <script> tag in the index.html file.

Functionality: Extend the functionality by adding features like task categories, priority levels, or reminders.

Developer
This project was developed by Devadarshini Ashokkumar ❤️.

License
This project is open-source and available under the MIT License. Feel free to use, modify, and distribute it as needed.



Enjoy organizing your tasks with this simple and efficient Task Manager! 🚀
