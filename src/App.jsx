// import logo from './logo.svg';
import './App.css';
//used for previous code
// import Todo from './components/Todo.jsx';
// import Title from './components/Title.jsx';
// import Modal from './components/Modal.jsx'
// import Counter from './components/Counter.jsx'
// import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
// import About from "./pages/About.jsx";
// import Contact from "./pages/Contact.jsx";
// import Nav from "./components/Nav.jsx";
import Users from "./pages/Users.jsx"
//Code below is for mod5 Routing

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users/:id" element={<Users />} /> 
          {/* whatever username you use must match in Users.jsx */}
          {/* <Route path="/about" element={<About />} />. code used for first half of mod5
          <Route path="/Contact" element={<Contact />} /> */}
        </Routes>
      </Router>
 
  );
}

export default App;


// function App() {
//   const [showModal, setShowModal] = useState(false)


//     function onTodoDelete() {
//       setShowModal(true)
//       console.log('onTodoDelete')
//     }

//     function cancelModal() {
//       setShowModal(false)  
//     }

//     function confirmModal() {
//       setShowModal(false)
//     }
// useEffect(() => {
//   console.log('Empty array runs once, only on mount')
// }, [])

// useEffect(() => {
//     console.log(`on mount AND on any change to ${showModal}, infinte loops possible`)
// }, [showModal])

// useEffect(() => {
//   console.log('Every render, every value call')
// })

//   return (
//       <div>
//         <Title />
//         <div>
//           <input type="text" onChange={(event) => {
//           console.log(event.target.value)
//         }} />
//         <button onClick={() => setShowModal(true)}>Add todo</button>
//         </div>
//         <div className='todo__wrapper'>
//           <Todo onTodoDelete={onTodoDelete} title="Finish Frontend Simplfied"/>   
//           <Todo onTodoDelete={onTodoDelete} title="Finish Interview Section"/>    
//           <Todo onTodoDelete={onTodoDelete} title="Land a $100k Job"/> 
//         </div>  
//           {showModal && <Modal cancelModal={cancelModal} confirmModal={confirmModal} title="Confirm Delete" />}
//           {/* {!!isModalOpen && <Modal title="Confirm Delete" />}  */}
//     </div>  
//   );
// }
// export default App;


// export default App;


// function Counter() {
//   // Initialize state at 0
//   const [count, setCount] = useState(0);

//   return (
//     <div style={{ textAlign: 'center', marginTop: '50px' }}>
//       <h1>{count}</h1>
      
//       {/* Decrement Button */}
//       <button onClick={() => setCount(count - 1)}>
//         Decrement
//       </button>

//       {/* Increment Button */}
//       <button onClick={() => setCount(count + 1)}>
//         Increment
//       </button>
//     </div>
//   );
// }

//  export default Counter;


// function App() {
//   const [showModal, setShowModal] = useState(false)
//   return (
//       <div>
//         <Title />
//         <div>
//           <input type="text" onChange={(event) => {
//           console.log(event.target.value)
//         }} />
//         <button onClick={() => setShowModal(true)}>Add todo</button>
//         </div>
//         <div className='todo__wrapper'>
//           <Todo title="Finish Frontend Simplfied"/>   
//           <Todo title="Finish Interview Section"/>    
//           <Todo title="Land a $100k Job"/> 
//         </div>  
//           {showModal && <Modal title="Confirm Delete" />}
//           {/* {!!isModalOpen && <Modal title="Confirm Delete" />}  */}
//     </div>  
//   );
// }
