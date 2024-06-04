import React, { useState, useEffect } from 'react';
import styles from '../Componenets/Newtask.module.css'


function Dashboard() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState('');
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch('http://localhost:8083/api/users');
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    }

    fetchUsers();
  }, []);
  const handleUserChange = async (event) => {
    const userId = event.target.value;
    console.log(userId);
    setSelectedUser(userId);
    try {
      const response = await fetch(`http://localhost:8083/api/todos/byuser/${userId}`);
      const data = await response.json();
      console.log(data);
      setTodos(data);
    } catch (error) {
      console.error(`Error fetching ToDos for user ${userId}:`, error);
    }
  };
  return (
    <div>
      <header> 
                <h1>Task Dashboard</h1> 
      </header> 
      <div className={styles.taskform}> 
      <label><h5><b>Select a User:</b></h5></label>

      <select value={selectedUser} onChange={handleUserChange}>
        <option value="">Select a user</option>
        {users.map(user => (
          <option key={user.id} value={user.id}>{user.name}</option>
        ))}

      </select>
      </div>
      
      <table>
  <thead>
    <tr>
      <th>Category</th>
      <th>Description</th>
      <th>Deadline</th>
      <th>Priority</th>
      <th>Completed</th>
    </tr>
  </thead>
  <tbody>
    {todos.map(todo => (
      <tr key={todo.id} class={todo.completed ? "completed" : "uncompleted"}>
        <td>{todo.category}</td>
        <td>{todo.description}</td>
        <td>{todo.deadline}</td>
        <td>{todo.priority}</td>
        <td>{todo.completed ? 'Yes' : 'No'}</td>
      </tr>
    ))}
  </tbody>
</table>
</div>
  );
 
}
export default Dashboard;







