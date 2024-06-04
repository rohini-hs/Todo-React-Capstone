import React, { useState, useEffect } from 'react';
import styles from '../Componenets/Dashboard.module.css'


function Dashboard() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState('');
  const [selectedUsername, setSelectedUsername] = useState('');
  const [todos, setTodos] = useState([]);
   const[username,setuserName]=useState('');
   const[Noofrecords,SetRecords]=useState(0);
   const[done,setDone]=useState(0);
   const [doneTasks, setDoneTasks] = useState();
   const [pending, setPending] = useState(0);

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
    const uname = event.target[userId].innerHTML;
    setuserName(uname);
    setSelectedUser(userId);
  
  
    try {
      const response = await fetch(`http://localhost:8083/api/todos/byuser/${userId}`);
      const data = await response.json();
  
      SetRecords(data.length)
      setTodos(data);
     
      const completedTasks = data.filter(task => task.completed);
    // Update the state variable doneTasks with the filtered array
      setDoneTasks(completedTasks.length);

      //find the pending taks
      console.log(Noofrecords);
      console.log(doneTasks);
      setPending(Noofrecords - doneTasks);
      console.log(pending);

    } catch (error) {
      console.error(`Error fetching ToDos for user ${userId}:`, error);
    }
  };

  return (
  
      <div className={styles.container}>
       
        <aside>
            <div>
         
              <h5>Hi '{username}'</h5>
              <h5> No of Tasks you have : {Noofrecords}</h5>
            </div>
        </aside>
     
        <main className={styles.mainBody}>
      <header> 
                <h1>Task Dashboard</h1> 
      </header> 

      <div className={styles.taskform}> 
      <label><h5><b>Select a User:</b></h5></label>

      <select value={selectedUser} onChange={handleUserChange}>
        <option value="">Select a user</option>
        {users.map(user => (
          <option key={user.name} value={user.id}>{user.name}</option>
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
</main>
</div>


  );
}
export default Dashboard;







