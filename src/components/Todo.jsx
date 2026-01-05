import './Todo.css';
//This pertains to 1.6 React Hooks Use State
function Todo({ title, onTodoDelete }) {
    
    return (
        <div className="todo"> 
          <p>{title}</p>
          <button onClick={onTodoDelete}>Delete</button>
        </div>
    );
}

export default Todo;

// function Todo({ title }) {
//     function deleteTodo() {
//         console.log('deleteTodo()')
//     }
//     return (
//         <div className="todo"> 
//           <p>{title}</p>
//           <button onClick={deleteTodo}>Delete</button>
//         </div>
//     );
// }

// export default Todo;