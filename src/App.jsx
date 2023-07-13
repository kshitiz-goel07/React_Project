import { useState } from "react"

function App() {

  const [todo, setToDo]= useState({
    title: "gym",
    description: "Go to gym "
  });

  setTimeout(() =>{
    setToDo({
      title : "gym gogogogo",
      description : "Go to gym please"
    })
  }, 5000)
  
   return (
    <div>
      <ParentHtml></ParentHtml>
      {todo.title}
      <br/>
      {todo.description}
    </div>
   )

}


function ParentHtml(){
  return(
    <div>
      hey
      
    </div>
  )
 }


export default App
