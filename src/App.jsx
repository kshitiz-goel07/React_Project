import { useState } from "react"
import { useEffect } from "react";

function App() {

  const [todo, setToDo]= useState({
    title: "gym",
    description: "Go to gym "
  });

  useEffect(()=>{
    console.log("Render");
    setInterval(() =>{
    setToDo({
      title : "gym gogogogo"+ Math.random(),
      description : "Go to gym please"
    })
  }, 1000)
  }, [])
  
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
