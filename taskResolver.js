let tasks = [
    {
      id: '1',
      title: 'Développement Front-end pour Site E-commerce',
      description: 'Créer une interface utilisateur réactive en utilisant React et Redux.',
      completed: false,
      duration: 5,
    },
    {
      id: '2',
      title: 'Développement Back-end pour Authentification Utilisateur',
      description: "Implémenter un système d'authentification et d'autorisation avec Node.js.",
      completed: false,
      duration: 8,
    }
  ];
  
  const taskResolver = {
    Query: {
      task: (_, { id }) => tasks.find(task => task.id === id),
      tasks: () => tasks,
    },
    Mutation: {
      addTask: (_, { title, description, completed, duration }) => {
        const task = { 
          id: String(tasks.length + 1), 
          title, 
          description, 
          completed, 
          duration 
        };
        tasks.push(task);
        return task;
      },
      completeTask: (_, { id }) => {
        const task = tasks.find(task => task.id === id);
        if (task) {
          task.completed = true;
          return task;
        }
        return null;
      },
      changeDescription: (_, { id, newDescription }) => {
        const task = tasks.find(task => task.id === id);
        if (task) {
          task.description = newDescription;
          return task;
        }
        return null;
      },
      deleteTask: (_, { id }) => {
        const index = tasks.findIndex(task => task.id === id);
        if (index !== -1) {
          tasks.splice(index, 1);
          return true;
        }
        return false;
      }
    }
  };
  
  module.exports = taskResolver;
  