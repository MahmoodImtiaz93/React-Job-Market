import React from 'react'

const App = () => {
  const name = 'mahmood'
  const greeting = `Hello ${name}!`

  const x= 40;
  const y= 50;
  const sum = x + y;

  const  isLoggedIn = false;

  const  names = ['mahmood', 'ali', 'ahmed', 'sara', 'nashit']
  return (
    <div>
      <h1 className="text-5xl font-bold underline ">
       {greeting}
      </h1>
      <h2 className="text-2xl">
       The sum of {x} and {y} is  =  {sum}</h2>
       <p style={{ color:'red' , fontFamily:"Roboto"}} >This is practice</p>
       <ul>
        {
          names.map((name, index) => (
            <li key={index} className="text-xl">
              {index + 1} - {name}
            </li>
          ))
        }
       </ul>
       {isLoggedIn ? (
        <h2 className="text-2xl">Welcome back, {name}!</h2>): <h2> Please Log in</h2>}
    </div>
  )
}

export default App
