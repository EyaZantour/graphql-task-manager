# GraphQL Task Management System

This is a simple task management system built with **GraphQL, Node.js, and Express**.

## 🚀 Features
- Retrieve all tasks
- Add a new task
- Mark a task as completed
- Update task descriptions
- Delete tasks

## 🛠 Installation
1. Clone the repository:
git clone https://github.com/EyaZantour/graphql-task-manager.git
2. Navigate to the project folder:
cd graphql-task-manager

3. Install dependencies:
npm install

4. Start the server:
node index.js


## 📌 API Usage
Open [Apollo Sandbox](http://localhost:5000/graphql) to test queries and mutations.

🔹 Example Queries
Get all tasks:
query {
  tasks {
    id
    title
    description
    completed
    duration
  }
}

Add a new task:
mutation {
  addTask(title: "New Task", description: "This is a new task", completed: false, duration: 3) {
    id
    title
    description
    completed
    duration
  }
}

Mark a task as completed:
mutation {
  completeTask(id: "1") {
    id
    title
    completed
  }
}

Update task description:
mutation {
  changeDescription(id: "1", newDescription: "Updated task description") {
    id
    description
  }
}

Delete a task:
mutation {
  deleteTask(id: "1")
}

🛠 Technologies Used
Node.js - JavaScript runtime
Express.js - Web framework for Node.js
GraphQL - Query language for APIs
Apollo Server - GraphQL server implementation




