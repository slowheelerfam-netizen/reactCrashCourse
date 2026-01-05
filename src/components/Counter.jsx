import React, { useState } from "react"

function Counter() {
    const [arr, setArr] = useState([1, 2])

    function addPlus() {
        setArr(prevArr => [ ...prevArr, "+" ])
    }

    function addMinus() {
        setArr(prevArr => [ ...prevArr, "-" ])
    }

    return (
        <div>
            <button onClick={addPlus}>+</button>
            <button onClick={addMinus}>-</button>
            {arr.toString()}
        </div>
    );
}

export default Counter


// function Counter() {
// const [cart, setCart] = useState({
//     item: "apple",
//     quantity: 0,
// });

// function addApple() {
// // 1. Use a callback to get the previous value
// // 2. Spread out all the properties of the prev state
// // 3. Only change the property that you need to change
//     setCart((prevCart) => ({
//         ...prevCart,
//         quantity: prevCart.quantity + 1,
//     }))
// }

// function subApple() {
//     setCart(prevCart => ({
//         ...prevCart,
//         quantity: prevCart.quantity - 1,
//     }))
// }
//     return (
//         <div>
//             <button onClick={subApple}>-</button>
//             {cart.quantity}
//             {cart.item}
//             <button onClick={addApple}>+</button>
//         </div>
//     )
// }
// export default Counter;

// function Counter()  {
//     const [counter, setCounter] = useState(0)

//     function incrementCounter() {
//              setCounter(counter + 1)
//     }

//     function decrementCounter() {
//              setCounter(counter - 1)
//     }
//       return (
//       <div>
//           <button onClick={decrementCounter}>-</button>
//           {counter}
//           <button onClick={incrementCounter}>+</button>

//       </div>
//       )
// }
// export default Counter




// function Counter()  {
//   const [counter, setCounter] = useState(0)
//     function incrementCounter() {
//         setCounter((prevCounter) => prevCounter + 1)
//         setCounter((prevCounter) => prevCounter + 1)
//     }
//     function decrementCounter() {
//       setCounter((prevCounter) => prevCounter - 1)
//       setCounter((prevCounter) => prevCounter - 1)
//     } 
//     return (
//     <div>
//         <button onClick={decrementCounter}>-</button>
//         {counter}
//         <button onClick={incrementCounter}>+</button>

//     </div>
//     )
// }
// export default Counter