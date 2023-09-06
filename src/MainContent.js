import React, { useState } from 'react';
import { FaComment, FaShare, FaFileExport } from 'react-icons/fa';

function MainContent({ displayedContent }) {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  return (
    <main className='main-content'>
      {displayedContent === 'chronolog' && (
        <div>
          <nav>
            <p className="nav-title">Chronologie</p>
            <button className="nav-button"><FaComment />Envoyer un commentaire</button>
            <button className="nav-button"><FaShare />Partager</button>
            <button className="nav-button"><FaFileExport />Exporter</button>
          </nav>

          <div class="table-container">
<table class="table table-bordered table-striped">
  <thead>
    <tr>
      <th class="fixed-column">Tasks</th>
      <th>SEPT. '22</th>
      <th>OCT. '22</th>
      <th>NOV. '22</th>
      <th>DÉC. '22</th>
      <th>JANV. '23</th>
      <th>FÉV. '23</th>
      <th>MARS '23</th>
      <th>AVR. '23</th>
      <th>MAI '23</th>
      <th>JUIN '23</th>
      <th>JUIL. '23</th>
      <th>AOÛT '23</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="fixed-column">Sprint Planning</td>
      <td><input type="checkbox" /></td>
      <td><input type="checkbox" /></td>
      <td><input type="checkbox" /></td>
      <td><input type="checkbox" /></td>
      <td><input type="checkbox" /></td>
      <td><input type="checkbox" /></td>
      <td><input type="checkbox" /></td>
      <td><input type="checkbox" /></td>
      <td><input type="checkbox" /></td>
      <td><input type="checkbox" /></td>
      <td><input type="checkbox" /></td>
      <td><input type="checkbox" /></td>
    </tr>
    <tr>
      <td class="fixed-column"><input type="text" placeholder="What needs to be done?" /></td>
      <td><input type="text" /></td>
      <td><input type="text" /></td>
      <td><input type="text" /></td>
      <td><input type="text" /></td>
      <td><input type="text" /></td>
      <td><input type="text" /></td>
      <td><input type="text" /></td>
      <td><input type="text" /></td>
      <td><input type="text" /></td>
      <td><input type="text" /></td>
      <td><input type="text" /></td>
      <td><input type="text" /></td>
    </tr>
    <tr>
      <td class="fixed-column">Code Review</td>
      <td><input type="checkbox" /></td>
      <td><input type="checkbox" /></td>
      <td><input type="checkbox" /></td>
      <td><input type="checkbox" /></td>
      <td><input type="checkbox" /></td>
      <td><input type="checkbox" /></td>
      <td><input type="checkbox" /></td>
      <td><input type="checkbox" /></td>
      <td><input type="checkbox" /></td>
      <td><input type="checkbox" /></td>
      <td><input type="checkbox" /></td>
      <td><input type="checkbox" /></td>
    </tr>
  </tbody>
</table>
          </div>
        </div>
      )}
      {displayedContent === 'Backlog' && (
        <div>
          <nav>
            <p className="nav-title">Backlog</p>
          </nav>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter a new task"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-primary"
                type="button"
                onClick={addTask}
              >
                Add Task
              </button>
            </div>
          </div>
          <table className="table table-bordered">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Task</th>
                <th scope="col">statu</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((task, index) => (
                <tr key={index}>
                  <td><input type="checkbox" /><input type="checkbox" />{task}</td>
                   <td>
                   <select name="" id="">
                    <option value="a faire">a faire</option>
                    <option value="en cours">en cours</option>
                    <option value="Terminé">Terminé</option>
                   </select>
                   </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

{displayedContent === 'tableaux' && (
  <div>
    <nav>
      <p className="nav-title">PP Sprint</p>
    </nav>
    <div className="container">
      <h1 style={{ textAlign: 'center' }}>Tableau de bord PP SPRINT</h1>
      <br />
      <div className="overflow-auto">
        <div className="d-flex flex-nowrap">
          {/* Todo Card */}
          <div className="col-md-4">
            <div className="card mb-4">
              <div className="card-header bg-info text-white">Todo</div>
              <div className="card-body">
                {/* Render Todo tasks here */}
              </div>
            </div>
          </div>

          {/* In Progress Card */}
          <div className="col-md-4">
            <div className="card mb-4">
              <div className="card-header bg-warning">In Progress</div>
              <div className="card-body">
                {/* Render In Progress tasks here */}
              </div>
            </div>
          </div>

          {/* Test Card */}
          <div className="col-md-4">
            <div className="card mb-4">
              <div className="card-header bg-success text-white">Test</div>
              <div className="card-body">
                {/* Render Test tasks here */}
              </div>
            </div>
          </div>

          {/* Code Review Card */}
          <div className="col-md-4">
            <div className="card mb-4">
              <div className="card-header bg-primary text-white">Code Review</div>
              <div className="card-body">
                {/* Render Code Review tasks here */}
              </div>
            </div>
          </div>

          {/* Done Card */}
          <div className="col-md-4">
            <div className="card mb-4">
              <div className="card-header bg-secondary text-white">Done</div>
              <div className="card-body">
                {/* Render Done tasks here */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)}

    </main>
  );
}

export default MainContent;



// MainContent.js
// import { React,useState } from 'react';
// import {FaComment,FaShare, FaFileExport } from 'react-icons/fa';
// function MainContent({ displayedContent }) {

//   const [tasks, setTasks] = useState([]);
//   const [newTask, setNewTask] = useState('');

//   const addTask = () => {
//     if (newTask.trim() !== '') {
//       setTasks([...tasks, newTask]);
//       setNewTask('');
//     }
//   return (
//     <main className='main-content'>
      
//       {displayedContent === 'Backlog' && (
//         <div>
//              <nav>
//             <p class="nav-title">Backlog</p>
//           </nav>
//           <div className="input-group mb-3">
//         <input
//           type="text"
//           className="form-control"
//           placeholder="Enter a new task"
//           value={newTask}
//           onChange={(e) => setNewTask(e.target.value)}
//         />
//         <div className="input-group-append">
//           <button
//             className="btn btn-outline-primary"
//             type="button"
//             onClick={addTask}
//           >
//             Add Task
//           </button>
//         </div>
//       </div>
//       <table className="table table-bordered">
//         <thead className="thead-dark">
//           <tr>
//             <th scope="col">Task</th>
//           </tr>
//         </thead>
//         <tbody>
//           {tasks.map((task, index) => (
//             <tr key={index}>
//               <td>{task}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//       )}




//       {displayedContent === 'tableaux' && (
//         <div>
//           <nav>
//             <p class="nav-title">PP Sprint</p>
//             </nav>
//           <table className="table table-hover">
//         <thead className="thead-dark">
//           <tr>
//             <th>#</th>
//             <th>Product Name</th>
//             <th>Price</th>
//             <th>Stock</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td>1</td>
//             <td>Widget A</td>
//             <td>$10.99</td>
//             <td>50</td>
//           </tr>
//           <tr>
//             <td>2</td>
//             <td>Widget B</td>
//             <td>$12.99</td>
//             <td>40</td>
//           </tr>
//           <tr>
//             <td>3</td>
//             <td>Widget C</td>
//             <td>$8.99</td>
//             <td>60</td>
//           </tr>
//         </tbody>
//       </table>
//         </div>
//       )}
      
//     </main>
//   );
// }
// }
// export default MainContent;
